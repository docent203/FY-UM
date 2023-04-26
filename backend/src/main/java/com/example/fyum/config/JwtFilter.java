package com.example.fyum.config;

import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.example.fyum.member.service.MemberService;
import com.example.fyum.utils.JwtUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Slf4j
public class JwtFilter extends OncePerRequestFilter {

    private final MemberService memberService;
    private final String key;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String authorization = request.getHeader(HttpHeaders.AUTHORIZATION);
        log.info("authorization : {}", authorization);

        if (authorization == null || !authorization.startsWith("Bearer ")) {
            log.error("authorization 을 잘못 보냈습니다.");
            request.setAttribute(JwtProperties.HEADER_STRING, "토큰이 이상해요");
            response.setStatus(401);
            filterChain.doFilter(request, response);
            return;
        }
        // 토큰 꺼내기
        String token = authorization.split(" ")[1];
        String Id = "";
        try {
            // 토큰이 만료기간 남았는지 여부
            if(JwtUtil.isExpired(token,key)){
                log.error("Token이 만료되었습니다.");
                filterChain.doFilter(request, response);
                return;
            }

            // id 꺼내기
            Id = JwtUtil.getMemberId(token, key);

        } catch (ExpiredJwtException e) {
            e.printStackTrace();
            response.setStatus(408);
        } catch (Exception e) {
            e.printStackTrace();
            response.setStatus(409);
        }


//        try {
//            Id= JwtUtil.getMemberId(token,key);
//
//        } catch (ExpiredJwtException e) {
//            e.printStackTrace();
//            request.setAttribute(JwtProperties.HEADER_STRING, "토큰이 만료되었습니다.");
//        } catch (JWTVerificationException e) {
//            e.printStackTrace();
//            request.setAttribute(JwtProperties.HEADER_STRING, "유효하지 않은 토큰입니다.");
//        }

        //권한 부여
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(Id, null, List.of(new SimpleGrantedAuthority("USER")));
        authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        filterChain.doFilter(request, response);
    }
}
