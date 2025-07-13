package com.cognizant.spring_learn.dao;

import java.util.List;

import jakarta.annotation.PostConstruct;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import com.cognizant.spring_learn.model.Department;

@Repository
public class DepartmentDao {

    private List<Department> departmentList;

    @PostConstruct
    public void init() {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("department.xml");
        this.departmentList = context.getBean("departmentList", List.class);
        context.close();
    }

    public List<Department> getAllDepartments() {
        return departmentList;
    }
}
