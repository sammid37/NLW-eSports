package com.sammid37.louie.controller;

import com.sammid37.louie.model.User;
import com.sammid37.louie.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    // register new admin
    @PostMapping("/register")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    // visualize admins
    @GetMapping("admin")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
