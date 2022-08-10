package com.sabkar.attendance.config;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootConfiguration
public class SpringBootConfig {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

}
