package com.example.SprindDataJPA.service;

import com.example.SprindDataJPA.entity.User;
import com.example.SprindDataJPA.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// no need to manage sessions or transactions manually like in hibernate
// spring handles everything behind the scenes
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUserByID(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    // as we can see the amount of code is also reduced because of spring data JPA
}
