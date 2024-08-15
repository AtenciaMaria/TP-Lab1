package com.example.olympicmedals.controller;

import com.example.olympicmedals.model.Medal;
import com.example.olympicmedals.repository.MedalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medals")
public class MedalController {

    @Autowired
    private MedalRepository medalRepository;

    @PostMapping
    public Medal addMedal(@RequestBody Medal medal) {
        return medalRepository.save(medal);
    }

    @GetMapping
    public List<Medal> getAllMedals() {
        return medalRepository.findAll();
    }
}

