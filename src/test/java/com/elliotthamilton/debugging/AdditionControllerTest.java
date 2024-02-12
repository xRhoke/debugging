package com.elliotthamilton.debugging;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import static org.mockito.Mockito.when;

@WebMvcTest(AdditionController.class)
public class AdditionControllerTest {

    @MockBean
    AdditionService service;

    @Autowired
    MockMvc mvc;

    @Test
    public void addReturnsResultOfAddingTwoNumbers() throws Exception {
        int firstValue = 1;
        int secondValue = 3;
        int sum = 4;

        when(service.add(firstValue, secondValue)).thenReturn(sum);

        mvc.perform(get("/api/calculator/add?firstValue=" + firstValue + "&secondValue=" + secondValue))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", is(4)));
    }
}
