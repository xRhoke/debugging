package com.elliotthamilton.debugging;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/calculator")
public class AdditionController {

    private final AdditionService service;

    public AdditionController(AdditionService service) {
        this.service = service;
    }

    @GetMapping("/add")
    public int add(@RequestParam int firstValue, @RequestParam int secondValue){
        return service.add(firstValue, secondValue);
    }
}
