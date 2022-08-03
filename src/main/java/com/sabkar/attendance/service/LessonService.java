package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.transfer.LessonDto;
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
@NoArgsConstructor
@AllArgsConstructor
public class LessonService {

    @Value("${api-server.url}")
    private String baseUrl;

    public List<LessonDto> fetchAll() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity studentsArray = restTemplate.getForEntity(baseUrl + "/lessons/", LessonDto[].class);
        if (studentsArray.getStatusCode() != HttpStatus.OK || studentsArray.getBody() == null) {
            return null;
        }
        return Stream.of((LessonDto[]) studentsArray.getBody()).collect(Collectors.toList());
    }

    public LessonDto fetchById(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity response = restTemplate.getForEntity(baseUrl + "/lessons/" + id, LessonDto.class);
        return response.getStatusCode() == HttpStatus.OK ? (LessonDto) response.getBody() : null;
    }
}
