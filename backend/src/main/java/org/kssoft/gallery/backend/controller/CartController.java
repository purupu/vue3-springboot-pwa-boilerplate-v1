package org.kssoft.gallery.backend.controller;

import org.kssoft.gallery.backend.entity.Cart;
import org.kssoft.gallery.backend.entity.Item;
import org.kssoft.gallery.backend.repository.CartRepository;
import org.kssoft.gallery.backend.repository.ItemRepository;
import org.kssoft.gallery.backend.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@RestController
public class CartController {

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    JwtService jwtService;

    @Autowired
    private CartRepository cartRepository;

    @GetMapping("/api/cart/items")
    public ResponseEntity getCartItems(
            @CookieValue(value = "token", required = false) String token
    ) {
        if (!jwtService.isValid(token)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        }
        List<Cart> carts = cartRepository.findByMemberId(jwtService.getId(token));
        List<Integer> itemIds = carts.stream().map(Cart::getItemId).toList();
        List<Item> items = itemRepository.findByIdIn(itemIds);

        return new ResponseEntity(items, HttpStatus.OK);
    }

    @PostMapping("/api/cart/items/{itemId}")
    public ResponseEntity pushCartItem(
            @PathVariable int itemId,
            @CookieValue(value = "token", required = false) String token
    ) {
        if (!jwtService.isValid(token)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        }
        int memberId = jwtService.getId(token);
        Cart cart = cartRepository.findByMemberIdAndItemId(memberId, itemId);

        if (cart == null) {
            Cart newCart = new Cart();
            newCart.setMemberId(memberId);
            newCart.setItemId(itemId);
            cartRepository.save(newCart);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }


    @DeleteMapping("/api/cart/items/{itemId}")
    public ResponseEntity deleteCartItem(
            @PathVariable int itemId,
            @CookieValue(value = "token", required = false) String token
    ) {
        if (!jwtService.isValid(token)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        }
        int memberId = jwtService.getId(token);
        Cart cart = cartRepository.findByMemberIdAndItemId(memberId, itemId);
        cartRepository.delete(cart);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
