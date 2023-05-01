package com.example.fyum.wishlist.controller;

import com.example.fyum.wishlist.service.WishlistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;

    @PostMapping("/{paintingId}")
    public ResponseEntity postWishlist(@PathVariable int paintingId, Authentication authentication){
        wishlistService.postWishlist(paintingId,authentication.getName());
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/{paintingId}")
    public ResponseEntity deleteWishList(@PathVariable int paintingId, Authentication authentication){
        wishlistService.deleteWishlist(paintingId,authentication.getName());
        return new ResponseEntity(HttpStatus.OK);
    }


}
