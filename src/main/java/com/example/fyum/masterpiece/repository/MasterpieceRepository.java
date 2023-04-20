package com.example.fyum.masterpiece.repository;

import com.example.fyum.masterpiece.entity.Masterpiece;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MasterpieceRepository extends JpaRepository<Masterpiece, Integer> {

}
