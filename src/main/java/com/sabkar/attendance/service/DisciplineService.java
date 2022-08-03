package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.transfer.DisciplineDto;
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
public class DisciplineService {

    @Value("${api-server.url}")
    private String baseUrl;

    public List<DisciplineDto> fetchAll() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity studentsArray = restTemplate.getForEntity(baseUrl + "/disciplines/", DisciplineDto[].class);
        if (studentsArray.getStatusCode() != HttpStatus.OK || studentsArray.getBody() == null) {
            return null;
        }
        return Stream.of((DisciplineDto[]) studentsArray.getBody()).collect(Collectors.toList());
    }

    public DisciplineDto fetchById(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity response = restTemplate.getForEntity(baseUrl + "/disciplines/" + id, DisciplineDto.class);
        return response.getStatusCode() == HttpStatus.OK ? (DisciplineDto) response.getBody() : null;
    }

}
