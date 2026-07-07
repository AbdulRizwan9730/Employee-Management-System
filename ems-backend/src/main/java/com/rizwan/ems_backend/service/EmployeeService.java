package com.rizwan.ems_backend.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.rizwan.ems_backend.entity.Employee;

public interface EmployeeService {

    Employee saveEmployee(Employee employee);

    List<Employee> getAllEmployees();

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);

    void deleteEmployee(Long id);
    
    Page<Employee> getEmployees(int page, int size, String sortBy, String direction);

    Page<Employee> searchEmployees(String keyword, int page, int size);
}	