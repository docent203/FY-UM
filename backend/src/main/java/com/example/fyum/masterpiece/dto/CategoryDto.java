package com.example.fyum.masterpiece.dto;

import com.example.fyum.masterpiece.entity.Painter;

public class CategoryDto {
    int id;
    String nameKr;
    String nameOrigin;
    String imgSrc;

    public CategoryDto(Painter painter) {
        this.id = painter.getId();
        this.nameKr = painter.getPainterKr();
        this.nameOrigin = painter.getPainterOrigin();
        this.imgSrc = painter.getImgSrc();
    }


}
