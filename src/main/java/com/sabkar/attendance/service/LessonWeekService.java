package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.transfer.LessonWeekDto;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.time.temporal.ChronoField;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class LessonWeekService {

    @Value("${api-server.url}")
    private String baseUrl;

    private static final int STUDY_YEAR_MONTH_NUMBER = 9; // номер месяца начала учебного года
    private static final int STUDY_YEAR_DAY_NUMBER = 1; // номер дня месяца начала учебного года

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

    public LessonWeekDto fetchByDate(LocalDate localDate) {
        int num = localDate.get(ChronoField.ALIGNED_WEEK_OF_YEAR) % 2;
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity response = restTemplate.getForEntity(baseUrl + "/lessonWeeks/" + (num + 1), LessonWeekDto.class);
        return response.getStatusCode() == HttpStatus.OK ? (LessonWeekDto) response.getBody() : null;
    }
}
