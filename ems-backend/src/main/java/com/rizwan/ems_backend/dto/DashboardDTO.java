package com.rizwan.ems_backend.dto;

import java.util.List;

public class DashboardDTO {

    private long totalEmployees;
    private long totalDepartments;
    private long totalDesignations;
    private double totalSalary;

    private List<EmployeeDashboardDTO> recentEmployees;

    public DashboardDTO() {
    }

    public DashboardDTO(long totalEmployees,
                        long totalDepartments,
                        long totalDesignations,
                        double totalSalary,
                        List<EmployeeDashboardDTO> recentEmployees) {

        this.totalEmployees = totalEmployees;
        this.totalDepartments = totalDepartments;
        this.totalDesignations = totalDesignations;
        this.totalSalary = totalSalary;
        this.recentEmployees = recentEmployees;
    }

    public long getTotalEmployees() {
        return totalEmployees;
    }

    public void setTotalEmployees(long totalEmployees) {
        this.totalEmployees = totalEmployees;
    }

    public long getTotalDepartments() {
        return totalDepartments;
    }

    public void setTotalDepartments(long totalDepartments) {
        this.totalDepartments = totalDepartments;
    }

    public long getTotalDesignations() {
        return totalDesignations;
    }

    public void setTotalDesignations(long totalDesignations) {
        this.totalDesignations = totalDesignations;
    }

    public double getTotalSalary() {
        return totalSalary;
    }

    public void setTotalSalary(double totalSalary) {
        this.totalSalary = totalSalary;
    }

    public List<EmployeeDashboardDTO> getRecentEmployees() {
        return recentEmployees;
    }

    public void setRecentEmployees(List<EmployeeDashboardDTO> recentEmployees) {
        this.recentEmployees = recentEmployees;
    }
}