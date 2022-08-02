package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.transfer.LessonWeekDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class LessonWeekService {

    @Value("${api-server.url}")
    private String baseUrl;

    public List<LessonWeekDto> fetchAll() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity studentsArray = restTemplate.getForEntity(baseUrl + "/lessonWeeks/", LessonWeekDto[].class);
        if (studentsArray.getStatusCode() != HttpStatus.OK || studentsArray.getBody() == null) {
            return null;
        }
        return Stream.of((LessonWeekDto[]) studentsArray.getBody()).collect(Collectors.toList());
    }

    public LessonWeekDto fetchById(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity response = restTemplate.getForEntity(baseUrl + "/lessonWeeks/" + id, LessonWeekDto.class);
        return response.getStatusCode() == HttpStatus.OK ? (LessonWeekDto) response.getBody() : null;
    }
}
