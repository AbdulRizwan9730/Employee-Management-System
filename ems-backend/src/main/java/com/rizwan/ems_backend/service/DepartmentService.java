package com.rizwan.ems_backend.service;

import java.util.List;

import com.rizwan.ems_backend.entity.Department;

public interface DepartmentService {

    Department saveDepartment(Department department);

    List<Department> getAllDepartments();

    Department getDepartmentById(Long id);

    Department updateDepartment(Long id, Department department);

    void deleteDepartment(Long id);
}