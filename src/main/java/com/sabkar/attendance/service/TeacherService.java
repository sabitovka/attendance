package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.transfer.TeacherDto;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class TeacherService {

    @Value("${api-server.url}")
    private String baseUrl;

    public List<TeacherDto> fetchAll() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity responseEntity = restTemplate.getForEntity(baseUrl + "/teachers/", TeacherDto[].class);
        if (responseEntity.getStatusCode() != HttpStatus.OK || responseEntity.getBody() == null) {
            return null;
        }
        return Stream.of((TeacherDto[]) responseEntity.getBody()).collect(Collectors.toList());
    }

    public TeacherDto fetchById(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity response = restTemplate.getForEntity(baseUrl + "/teachers/" + id, TeacherDto.class);
        return response.getStatusCode() == HttpStatus.OK ? (TeacherDto) response.getBody() : null;
    }

}
