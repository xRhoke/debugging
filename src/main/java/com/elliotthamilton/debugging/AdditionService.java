package com.elliotthamilton.debugging;

import org.springframework.stereotype.Service;

@Service
public class AdditionService {

    public int add(int firstValue, int secondValue){
        return firstValue + secondValue + 3;
    }
}
