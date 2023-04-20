package com.example.fyum.masterpiece.entity;

import com.example.fyum.config.BaseEntity;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Getter;

@Getter
@Entity
public class Trend extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT UNSIGNED")
    private int id;
    private String trend;
    private String description;
    private String imgSrc;

    @JsonManagedReference
    @OneToMany(mappedBy = "trend", fetch = FetchType.LAZY)
    private List<Masterpiece> masterpiece = new ArrayList<>();

}
