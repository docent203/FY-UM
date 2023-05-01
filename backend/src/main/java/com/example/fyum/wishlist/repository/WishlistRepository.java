package com.example.fyum.wishlist.repository;

import com.example.fyum.wishlist.entity.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {

    Wishlist deleteByMember_IdAndPainting_Id(int memberId, int paintingId);
}
