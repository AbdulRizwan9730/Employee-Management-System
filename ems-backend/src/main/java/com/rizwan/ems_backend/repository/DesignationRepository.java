package com.rizwan.ems_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rizwan.ems_backend.entity.Designation;

public interface DesignationRepository extends JpaRepository<Designation, Long> {

}