package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.transfer.StudentDto;
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
public class StudentService {

    @Value("${api-server.url}")
    private String baseUrl;

    public List<StudentDto> fetchAll() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity studentsArray = restTemplate.getForEntity(baseUrl + "/students/", StudentDto[].class);
        if (studentsArray.getStatusCode() != HttpStatus.OK || studentsArray.getBody() == null) {
            return null;
        }
        return Stream.of((StudentDto[]) studentsArray.getBody()).collect(Collectors.toList());
    }

    public StudentDto fetchById(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity response = restTemplate.getForEntity(baseUrl + "/students/" + id, StudentDto.class);
        return response.getStatusCode() == HttpStatus.OK ? (StudentDto) response.getBody() : null;
    }

    public List<StudentDto> fetchByGroupId(Integer groupId) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity studentsArray = restTemplate.getForEntity(baseUrl + "/students/?groupId=" + groupId, StudentDto[].class);
        if (studentsArray.getStatusCode() != HttpStatus.OK || studentsArray.getBody() == null) {
            return null;
        }
        return Stream.of((StudentDto[]) studentsArray.getBody()).collect(Collectors.toList());
    }
}
