package com.rizwan.ems_backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rizwan.ems_backend.entity.Designation;
import com.rizwan.ems_backend.exception.ResourceNotFoundException;
import com.rizwan.ems_backend.repository.DesignationRepository;
import com.rizwan.ems_backend.service.DesignationService;

@Service
public class DesignationServiceImpl implements DesignationService {

    private final DesignationRepository designationRepository;

    public DesignationServiceImpl(DesignationRepository designationRepository) {
        this.designationRepository = designationRepository;
    }

    @Override
    public Designation saveDesignation(Designation designation) {
        return designationRepository.save(designation);
    }

    @Override
    public List<Designation> getAllDesignations() {
        return designationRepository.findAll();
    }

    @Override
    public Designation getDesignationById(Long id) {

        return designationRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Designation not found with id : " + id));
    }

    @Override
    public Designation updateDesignation(Long id, Designation designation) {

        Designation existing = getDesignationById(id);

        existing.setDesignationName(designation.getDesignationName());
        existing.setDescription(designation.getDescription());

        return designationRepository.save(existing);
    }

    @Override
    public void deleteDesignation(Long id) {

        Designation designation = getDesignationById(id);

        designationRepository.delete(designation);
    }

}