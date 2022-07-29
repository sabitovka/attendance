package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.transfer.MarkDto;
import com.sabkar.attendance.repository.MarkRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MarkService {

    private MarkRepository markRepository;

    public MarkDto saveMark(MarkDto markDto) {
        return null;
    }

}
