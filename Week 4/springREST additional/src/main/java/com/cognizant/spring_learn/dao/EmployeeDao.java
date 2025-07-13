package com.cognizant.spring_learn.dao;

import java.util.List;

import jakarta.annotation.PostConstruct;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import com.cognizant.spring_learn.model.Employee;

@Repository  // <== This is ESSENTIAL for component scanning!
public class EmployeeDao {

    private List<Employee> employeeList;

    @PostConstruct
    public void init() {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        this.employeeList = context.getBean("employeeList", List.class);
        context.close();
    }

    public List<Employee> getAllEmployees() {
        return employeeList;
    }
}
