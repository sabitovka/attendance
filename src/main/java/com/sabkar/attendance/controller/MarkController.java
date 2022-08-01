package com.sabkar.attendance.controller;

import com.sabkar.attendance.entity.transfer.MarkDto;
import com.sabkar.attendance.service.MarkService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class MarkController {
    MarkService markService;

    @PostMapping("/v1/marks")
    private ResponseEntity<MarkDto> saveMark(@Valid @RequestBody MarkDto markDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(markService.saveMark(markDto));
    }

}
