package com.rizwan.ems_backend.service;

import java.util.List;

import com.rizwan.ems_backend.entity.Designation;

public interface DesignationService {

    Designation saveDesignation(Designation designation);

    List<Designation> getAllDesignations();

    Designation getDesignationById(Long id);

    Designation updateDesignation(Long id, Designation designation);

    void deleteDesignation(Long id);
}
