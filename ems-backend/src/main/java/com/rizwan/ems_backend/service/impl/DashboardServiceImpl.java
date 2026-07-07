package com.rizwan.ems_backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rizwan.ems_backend.dto.DashboardDTO;
import com.rizwan.ems_backend.repository.DepartmentRepository;
import com.rizwan.ems_backend.repository.DesignationRepository;
import com.rizwan.ems_backend.repository.EmployeeRepository;
import com.rizwan.ems_backend.service.DashboardService;

import java.util.List;

import org.springframework.data.domain.PageRequest;

import com.rizwan.ems_backend.dto.EmployeeDashboardDTO;

@Service
public class DashboardServiceImpl implements DashboardService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private DesignationRepository designationRepository;

    @Override
    public DashboardDTO getDashboardData() {

        long totalEmployees = employeeRepository.count();

        long totalDepartments = departmentRepository.count();

        long totalDesignations = designationRepository.count();

        double totalSalary = employeeRepository.findAll()
                .stream()
                .map(employee -> employee.getSalary().doubleValue())
                .reduce(0.0, Double::sum);

        List<EmployeeDashboardDTO> recentEmployees =
                employeeRepository.findAllByOrderByIdDesc(PageRequest.of(0, 5))
                .stream()
                .map(employee -> new EmployeeDashboardDTO(

                        employee.getId(),

                        employee.getFirstName() + " " + employee.getLastName(),

                        employee.getDepartment().getDepartmentName(),

                        employee.getDesignation().getDesignationName(),

                        employee.getEmail()

                ))
                .toList();

        return new DashboardDTO(

                totalEmployees,
                totalDepartments,
                totalDesignations,
                totalSalary,
                recentEmployees
        );
    }

}