package com.example.jwtauth.controller;

import com.example.jwtauth.model.AuthResponse;
import com.example.jwtauth.service.TokenService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    private final TokenService tokenService;

    public AuthController(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @PostMapping("/authenticate")
    public AuthResponse authenticate(Authentication authentication) {
        String token = tokenService.generateToken(authentication);
        return new AuthResponse(token);
    }
}
