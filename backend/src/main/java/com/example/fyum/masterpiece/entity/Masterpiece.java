package com.example.fyum.masterpiece.entity;

import com.example.fyum.config.Painting;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Getter
@DiscriminatorValue("Masterpiece")
@Entity
public class Masterpiece extends Painting {
    private String titleKr;
    private String titleOrigin;
    private String paintedAt;
    private String paintingType;
    private String technique;
    private String description;

    @JsonManagedReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Trend trend;
    @JsonManagedReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Painter painter;
    @JsonManagedReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Theme theme;

}

