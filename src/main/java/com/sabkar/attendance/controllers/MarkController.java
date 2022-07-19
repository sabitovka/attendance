package com.sabkar.attendance.controllers;

import com.sabkar.attendance.entity.transfer.MarkDto;
import com.sabkar.attendance.services.MarkService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/marks")
@AllArgsConstructor
public class MarkController {

    MarkService markService;

    @PostMapping
    private ResponseEntity<MarkDto> saveMark(@RequestBody MarkDto markDto) {
        System.out.println(markDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(markService.saveMark(markDto));
    }

}
