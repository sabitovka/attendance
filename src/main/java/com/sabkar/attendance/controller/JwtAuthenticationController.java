package com.sabkar.attendance.controller;

import com.sabkar.attendance.config.JwtTokenUtil;
import com.sabkar.attendance.entity.transfer.UserDto;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
@CrossOrigin
public class JwtAuthenticationController {

    private AuthenticationManager authenticationManager;
    private JwtTokenUtil jwtTokenUtil;
    private UserDetailsService jwtInMemoryUserDetailsService;

    @PostMapping(value = "/login")
    @ResponseStatus(code = HttpStatus.OK)
    public String generateToken(@RequestBody UserDto userDto) throws Exception{
        this.authenticate(userDto.getUsername(), userDto.getPassword());

        final UserDetails userDetails = jwtInMemoryUserDetailsService.loadUserByUsername(userDto.getUsername());

        return jwtTokenUtil.generateToken(userDetails);
    }

    private void authenticate(String username, String password) throws Exception {
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }

}
