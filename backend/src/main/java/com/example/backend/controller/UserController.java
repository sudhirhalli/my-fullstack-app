package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
  @Autowired
  private UserRepository repo;

  @GetMapping
  public List<User> getAll() {
    return repo.findAll();
  }
  
  @GetMapping("/{id}")
  public User getById(@PathVariable long id) {
    Optional<User> user =  repo.findById(id);
    return user.get();
  }

  @PostMapping
  public User save(@RequestBody User user) {
    return repo.save(user);
  }
}
