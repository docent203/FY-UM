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
    String[] urlToBase64(@RequestParam("url") String url) {
        String [] urlArray = url.split(",");
        String [] baseArray = new String [urlArray.length];
        for (int i = 0; i < urlArray.length; i++) {
            RestTemplate restTemplate = new RestTemplate();
            byte[] imageBytes = restTemplate.getForObject(urlArray[i], byte[].class);
            baseArray[i] = Base64.getEncoder().encodeToString(imageBytes);
        }
        return baseArray;
    }
}
