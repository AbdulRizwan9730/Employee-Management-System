# Employee Management System

A Full Stack Employee Management System developed using **Spring Boot**, **React.js**, and **MySQL**.

## Features

- Dashboard
  - Total Employees
  - Total Departments
  - Total Designations
  - Total Salary
  - Recent Employees

- Employee Management
  - Add Employee
  - Update Employee
  - Delete Employee
  - Search Employee

- Department Management
  - Add Department
  - Update Department
  - Delete Department
  - Search Department

- Designation Management
  - Add Designation
  - Update Designation
  - Delete Designation
  - Search Designation

---

## Technologies Used

### Frontend
- React.js
- React Router
- Axios
- Bootstrap

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate

### Database
- MySQL

### Tools
- Eclipse IDE
- Visual Studio Code
- Postman
- Git
- GitHub

---

## Project Structure

```
Employee-Management-System
│
├── ems-backend
│
├── ems-frontend
│
├── screenshots
│
└── README.md
```

---

## API Endpoints

### Employee

- GET /api/employees
- POST /api/employees
- PUT /api/employees/{id}
- DELETE /api/employees/{id}

### Department

- GET /api/departments
- POST /api/departments
- PUT /api/departments/{id}
- DELETE /api/departments/{id}

### Designation

- GET /api/designations
- POST /api/designations
- PUT /api/designations/{id}
- DELETE /api/designations/{id}

### Dashboard

- GET /api/dashboard

---

## Screenshots

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Employee List

![Employee List](screenshots/employees.png)

### Add Employee

![Add Employee](screenshots/add-employee.png)

### Department List

![Department List](screenshots/departments.png)

### Designation List

![Designation List](screenshots/designations.png)

---

## How to Run

### Backend

```bash
cd ems-backend
mvn spring-boot:run
```

Backend URL

```
http://localhost:8080
```

### Frontend

```bash
cd ems-frontend
npm install
npm start
```

Frontend URL

```
http://localhost:3000
```

---

## Future Improvements

- Login Authentication (JWT)
- Role-Based Access
- Pagination
- Export to Excel/PDF
- Responsive UI
- Employee Profile Image

---

## Author

**Abdul Rizwan**

Java Full Stack Developer

**GitHub:**  
https://github.com/AbdulRizwan9730

**LinkedIn:**  
https://www.linkedin.com/in/abdul-rizwan-9445b5335

**Email:**  
rizwanabdul2001@gmail.com
