package com.rizwan.ems_backend.service.impl;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.rizwan.ems_backend.entity.Employee;
import com.rizwan.ems_backend.exception.ResourceNotFoundException;
import com.rizwan.ems_backend.repository.EmployeeRepository;
import com.rizwan.ems_backend.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Employee not found with id : " + id));
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {

        Employee existingEmployee = getEmployeeById(id);

        existingEmployee.setFirstName(employee.getFirstName());
        existingEmployee.setLastName(employee.getLastName());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setPhone(employee.getPhone());
        existingEmployee.setGender(employee.getGender());
        existingEmployee.setDob(employee.getDob());
        existingEmployee.setDepartment(employee.getDepartment());
        existingEmployee.setDesignation(employee.getDesignation());
        existingEmployee.setSalary(employee.getSalary());
        existingEmployee.setAddress(employee.getAddress());
        existingEmployee.setCity(employee.getCity());
        existingEmployee.setState(employee.getState());
        existingEmployee.setCountry(employee.getCountry());
        existingEmployee.setStatus(employee.getStatus());

        return employeeRepository.save(existingEmployee);
    }	

    @Override
    public void deleteEmployee(Long id) {

        Employee employee = getEmployeeById(id);

        employeeRepository.delete(employee);
    }
    
    @Override
    public Page<Employee> getEmployees(int page, int size,
                                       String sortBy,
                                       String direction) {

        Sort sort = direction.equalsIgnoreCase("asc")
                ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        Pageable pageable = PageRequest.of(page, size, sort);

        return employeeRepository.findAll(pageable);
    }

    @Override
    public Page<Employee> searchEmployees(String keyword,
                                          int page,
                                          int size) {

        Pageable pageable = PageRequest.of(page, size);

        return employeeRepository
                .findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCaseOrEmailContainingIgnoreCase(
                        keyword,
                        keyword,
                        keyword,
                        pageable);
    }

}
