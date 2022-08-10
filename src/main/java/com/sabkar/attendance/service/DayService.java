package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.transfer.DayDto;
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
public class DayService {
    @Value("${api-server.url}")
    private String baseUrl;

    public List<DayDto> fetchAll() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity response = restTemplate.getForEntity(baseUrl + "/days/", DayDto[].class);
        if (response.getStatusCode() != HttpStatus.OK || response.getBody() == null) {
            return null;
        }
        return Stream.of((DayDto[]) response.getBody()).collect(Collectors.toList());
    }

    public DayDto fetchById(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity response = restTemplate.getForEntity(baseUrl + "/days/" + id, DayDto.class);
        return response.getStatusCode() == HttpStatus.OK ? (DayDto) response.getBody() : null;
    }
}
