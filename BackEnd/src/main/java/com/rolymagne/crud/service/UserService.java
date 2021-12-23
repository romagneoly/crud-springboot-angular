package com.rolymagne.crud.service;

import com.rolymagne.crud.model.User;
import com.rolymagne.crud.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User save(User user) {
        return userRepository.save(user);
    }

    public User delete(Long id) {
        User user = userRepository.findById(id).get();
        userRepository.deleteById(id);
        return user;
    }

    public List<User> read() {
        return userRepository.findAll();
    }
}
