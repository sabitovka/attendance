package com.sabkar.attendance.repository;

import com.sabkar.attendance.entity.domain.Bell;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BellRepository extends JpaRepository<Bell, Integer> {

}