package com.rizwan.ems_backend.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.rizwan.ems_backend.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Page<Employee> findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCaseOrEmailContainingIgnoreCase(
            String firstName,
            String lastName,
            String email,
            Pageable pageable);

    List<Employee> findAllByOrderByIdDesc(Pageable pageable);

}