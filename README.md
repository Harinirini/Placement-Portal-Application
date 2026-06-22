Placement Portal

A Full Stack Placement Portal Application built using Flask, React, SQLite, SQLAlchemy, JWT Authentication, and Bootstrap.

The application streamlines campus recruitment by connecting Students, Companies, and Placement Cell Administrators through a role-based portal.

=================================================================

PROJECT OVERVIEW

The Placement Portal provides separate modules for:

• Students
• Companies
• Administrators

The system allows users to register, login securely, and access their respective dashboards.

=================================================================

FEATURES IMPLEMENTED (M1 & M2)

Authentication

• Student Registration
• Student Login
• Company Registration
• Company Login
• Admin Login
• JWT Authentication
• Logout Functionality

Student Module

• Student Registration Form
• Student Login
• Student Dashboard
• Profile Display

Company Module

• Company Registration Form
• Company Login
• Company Dashboard

Admin Module

• Admin Login
• Admin Dashboard

=================================================================

TECH STACK

Frontend

• React.js
• React Router DOM
• Axios
• Bootstrap 5

Backend

• Flask
• Flask SQLAlchemy
• Flask JWT Extended
• Werkzeug

Database

• SQLite

=================================================================

PROJECT STRUCTURE

Placement Portal

├── frontend  
│   ├── src  
│   │   ├── pages  
│   │   │   ├── Login.jsx  
│   │   │   ├── StudentRegister.jsx  
│   │   │   ├── CompanyRegister.jsx  
│   │   │   ├── CompanyLogin.jsx  
│   │   │   ├── AdminLogin.jsx  
│   │   │   ├── Dashboard.jsx  
│   │   │   ├── CompanyDashboard.jsx  
│   │   │   └── AdminDashboard.jsx  
│   │   ├── api.js  
│   │   ├── App.jsx  
│   │   └── main.jsx  
│
├── app.py  
├── models.py  
├── extensions.py  
├── config.py  
├── seed.py  
├── placement.db  
└── README.md  
