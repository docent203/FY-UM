package com.example.fyum.masterpiece.controller;

import com.example.fyum.masterpiece.service.MasterpieceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/paintings")
public class MasterpieceController {

    private MasterpieceService masterpieceService;

    // 작가 목록
    @GetMapping("/painters")
    public ResponseEntity<?> getPainters(@RequestParam(required = false, defaultValue = "1") int page) {
        return null;
    }

    // 작가별 작품 리스트
    @GetMapping("/painters/{painterId}")
    public ResponseEntity<?> getMasterpiecesByPainter(@PathVariable int painterId, @RequestParam(required = false, defaultValue = "1") int page) {
        return null;
    }

    // 테마 목록
    @GetMapping("/themes")
    public ResponseEntity<?> getThemes() {
        return null;
    }

    // 테마별 작품 리스트
    @GetMapping("/themes/{themeId}")
    public ResponseEntity<?> getMasterpiecesByTheme(@PathVariable int themeId, @RequestParam(required = false, defaultValue = "1") int page) {
        return null;
    }

    // 사조 목록
    @GetMapping("/trends")
    public ResponseEntity<?> getTrends() {
        return null;
    }

    // 사조별 작품 리스트
    @GetMapping("/trends/{trendId}")
    public ResponseEntity<?> getMasterpiecesByTrend(@PathVariable int trendId, @RequestParam(required = false, defaultValue = "1") int page) {
        return null;
    }

    // 작품 상세 정보
    @GetMapping("/detail/{paintingId}")
    public ResponseEntity<?> getMasterpieceDetail(@PathVariable int paintingId) {           // 유저 정보 필요 : 찜, 전시회 상태 반환
        return null;
    }


}
