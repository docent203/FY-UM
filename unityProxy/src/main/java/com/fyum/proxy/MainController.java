package com.fyum.proxy;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;

@RestController
@CrossOrigin("*")
public class MainController {

    @GetMapping("/test")
    String test() {
        return "Hello World!";
    }
    @PostMapping("/urlToBase64")
    String urlToBase64(@RequestParam("url") String url) {
        RestTemplate restTemplate = new RestTemplate();
        byte[] imageBytes = restTemplate.getForObject(url, byte[].class);
        return Base64.getEncoder().encodeToString(imageBytes);
    }
}
