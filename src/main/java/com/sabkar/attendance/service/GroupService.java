package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.transfer.GroupDto;
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
public class GroupService {

    @Value("${api-server.url}")
    private String baseUrl;

    public List<GroupDto> fetchAll() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity response = restTemplate.getForEntity(baseUrl + "/groups", GroupDto[].class);
        if (response.getStatusCode() != HttpStatus.OK || response.getBody() == null) {
            return null;
        }
        return Stream.of((GroupDto[]) response.getBody()).collect(Collectors.toList());
    }

    public GroupDto fetchGroupById(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity response = restTemplate.getForEntity(baseUrl + "/groups/" + id, GroupDto.class);
        if (response.getStatusCode() != HttpStatus.OK || response.getBody() == null) {
            return null;
        }
        return response.getStatusCode() == HttpStatus.OK ? (GroupDto) response.getBody() : null;
    }
}
