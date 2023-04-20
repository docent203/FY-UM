package com.example.fyum.myDrawing.repository;

import com.example.fyum.myDrawing.entity.MyDrawing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyDrawingRepository extends JpaRepository<MyDrawing, Integer> {

}
