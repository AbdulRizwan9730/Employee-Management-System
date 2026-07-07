package com.rizwan.ems_backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rizwan.ems_backend.entity.Department;
import com.rizwan.ems_backend.exception.ResourceNotFoundException;
import com.rizwan.ems_backend.repository.DepartmentRepository;
import com.rizwan.ems_backend.service.DepartmentService;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    public DepartmentServiceImpl(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @Override
    public Department saveDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    @Override
    public Department getDepartmentById(Long id) {
        return departmentRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Department not found with id : " + id));
    }

    @Override
    public Department updateDepartment(Long id, Department department) {

        Department existing = getDepartmentById(id);

        existing.setDepartmentName(department.getDepartmentName());
        existing.setDescription(department.getDescription());

        return departmentRepository.save(existing);
    }

    @Override
    public void deleteDepartment(Long id) {

        Department department = getDepartmentById(id);

        departmentRepository.delete(department);
    }

}
