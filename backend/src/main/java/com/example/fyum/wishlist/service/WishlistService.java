package com.example.fyum.wishlist.service;

import com.example.fyum.config.Painting;
import com.example.fyum.config.PaintingRepository;
import com.example.fyum.member.entity.Member;
import com.example.fyum.member.repository.MemberRepository;
import com.example.fyum.wishlist.entity.Wishlist;
import com.example.fyum.wishlist.repository.WishlistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WishlistService {

    private final MemberRepository memberRepository;
    private final PaintingRepository paintingRepository;

    private final WishlistRepository wishlistRepository;
    public void postWishlist(int paintingId, String kakaoId){

        Member member = memberRepository.findByKakaoId(kakaoId);

        Optional<Painting> painting = paintingRepository.findById(paintingId);

        Wishlist wishlist = Wishlist.builder()
                            .member(member)
                            .painting(painting.get())
                            .build();
        wishlistRepository.save(wishlist);
    }

    public void deleteWishlist(int paintingId, String kakaoId){

        Member member = memberRepository.findByKakaoId(kakaoId);
        wishlistRepository.deleteByMember_IdAndPainting_Id(member.getId(),paintingId);
    }

}
