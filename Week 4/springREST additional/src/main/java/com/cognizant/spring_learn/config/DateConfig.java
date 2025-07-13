package com.cognizant.spring_learn.config;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.PropertyEditorRegistrar;
import org.springframework.beans.PropertyEditorRegistry;

@Configuration
public class DateConfig {

    @Bean
    public static PropertyEditorRegistrar customDateEditorRegistrar() {
        return new PropertyEditorRegistrar() {
            @Override
            public void registerCustomEditors(PropertyEditorRegistry registry) {
                SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
                dateFormat.setLenient(false);
                registry.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
            }
        };
    }
}
