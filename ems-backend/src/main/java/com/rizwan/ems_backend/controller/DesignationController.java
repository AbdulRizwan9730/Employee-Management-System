package com.rizwan.ems_backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rizwan.ems_backend.entity.Designation;
import com.rizwan.ems_backend.service.DesignationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/designations")
@CrossOrigin(origins = "http://localhost:3000")
public class DesignationController {

    private final DesignationService designationService;

    public DesignationController(DesignationService designationService) {
        this.designationService = designationService;
    }

    @PostMapping
    public ResponseEntity<Designation> saveDesignation(
            @Valid @RequestBody Designation designation) {

        return new ResponseEntity<>(
                designationService.saveDesignation(designation),
                HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Designation>> getAllDesignations() {

        return ResponseEntity.ok(
                designationService.getAllDesignations());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Designation> getDesignationById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                designationService.getDesignationById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Designation> updateDesignation(
            @PathVariable Long id,
            @RequestBody Designation designation) {

        return ResponseEntity.ok(
                designationService.updateDesignation(id, designation));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDesignation(
            @PathVariable Long id) {

        designationService.deleteDesignation(id);

        return ResponseEntity.ok("Designation deleted successfully.");
    }

}
