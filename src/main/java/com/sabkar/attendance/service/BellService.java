package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.transfer.BellDto;
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
public class BellService {
    @Value("${api-server.url}")
    private String baseUrl;

    public List<BellDto> fetchAll() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity studentsArray = restTemplate.getForEntity(baseUrl + "/bells/", BellDto[].class);
        if (studentsArray.getStatusCode() != HttpStatus.OK || studentsArray.getBody() == null) {
            return null;
        }
        return Stream.of((BellDto[]) studentsArray.getBody()).collect(Collectors.toList());
    }

    public BellDto fetchById(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity response = restTemplate.getForEntity(baseUrl + "/bells/" + id, BellDto.class);
        return response.getStatusCode() == HttpStatus.OK ? (BellDto) response.getBody() : null;
    }

}
