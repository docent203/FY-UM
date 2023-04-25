package com.example.fyum.masterpiece.service;

import com.example.fyum.masterpiece.dto.CategoryResponseDto;
import com.example.fyum.masterpiece.entity.Painter;
import com.example.fyum.masterpiece.entity.Theme;
import com.example.fyum.masterpiece.repository.PainterRepository;
import com.example.fyum.masterpiece.repository.ThemeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MasterpieceService {
    private final PainterRepository painterRepository;
    private final ThemeRepository themeRepository;

    public Page<CategoryResponseDto> getPainters(int page) {
        Pageable pageable = PageRequest.of(page, 5);
        Page<Painter> painters = painterRepository.findAll(pageable);
//        return painters.map(CategoryResponseDto::new);
        return null;
    }

    public void getMasterpiecesByPainter(int painterId, int page) {
        Painter painter = painterRepository.findById(painterId).orElseGet(null);

    }

    public Page<CategoryResponseDto> getThemes(int page) {
        Pageable pageable = PageRequest.of(page, 5);
        Page<Theme> themes = themeRepository.findAll(pageable);
//        return themes.map(CategoryResponseDto::new);
        return null;
    }
}
