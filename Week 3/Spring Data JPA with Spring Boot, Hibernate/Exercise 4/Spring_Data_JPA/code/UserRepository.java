package com.example.SprindDataJPA.repository;

import com.example.SprindDataJPA.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// we have repository class in springJPA and not DAO class like Hibernate 
// this will marks the class as DAO object, a component that directly interact with the database

public interface UserRepository extends JpaRepository<User, Integer> { // UserRepository has access to all basic CRUD operations, we don't need to implement anything manually
  
    List<User> findByEmail(String email); // custom method
}
