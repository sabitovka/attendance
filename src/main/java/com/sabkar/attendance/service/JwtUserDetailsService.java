package com.sabkar.attendance.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    private final User user = new User("sabitov", "$2y$10$g3YI6AmKxMa3cpO.q08U.eVvmEWw6ZYHlfMa4J3j6EmfRTVxd2aG.", Collections.emptyList());

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (user.getUsername().equals(username)) {
            return user;
        }
        throw new UsernameNotFoundException("User not found with username: " + username);
    }

}
