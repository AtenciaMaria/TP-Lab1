package com.example.olympicmedals.repository;

import com.example.olympicmedals.model.Medal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedalRepository extends JpaRepository<Medal, Long> {
}

