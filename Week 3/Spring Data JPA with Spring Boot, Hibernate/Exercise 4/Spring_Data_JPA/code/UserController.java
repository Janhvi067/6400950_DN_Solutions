package com.example.SprindDataJPA.controller;

import com.example.SprindDataJPA.entity.User;
import com.example.SprindDataJPA.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// reponsible to handle web requests and returning responses in the form of web pages

@RestController // marks it as a controller class 
@RequestMapping("/users") // used to map http requests to handler methods 
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping // used to handle POST requests
    public ResponseEntity<String> saveUser(@RequestBody User user) {
        userService.saveUser(user);
        return ResponseEntity.ok("User saved successfully!");
    }

    @GetMapping("{id}") // used to handle GET requests
    public User getUser(@PathVariable int id) { 
        return userService.getUserByID(id);
    }
}
