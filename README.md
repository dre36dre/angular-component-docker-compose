# Portfolio Full Stack

A full-stack personal portfolio application developed to demonstrate practical skills in modern web development.

The project is being built progressively using **Angular**, **Spring Boot**, **PostgreSQL**, **REST API**, and **Docker**, following a real-world application architecture.

## 🚀 Technologies

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* Angular Components
* Angular Services
* HTTP Client
* REST API integration

### Backend

* Java
* Spring Boot
* Spring Web
* Spring Data JPA
* Hibernate
* REST API
* Maven

### Database

* PostgreSQL
* JPA/Hibernate ORM

### Tools

* Git & GitHub
* Postman
* Docker
* Visual Studio Code / Spring Tool Suite

---

## 🎨 Angular Frontend

The frontend is being developed with Angular using a component-based architecture.

The application includes the main sections of a professional portfolio:

* Home
* About
* Skills
* Projects
* Contact

Angular is responsible for the user interface and will communicate with the Spring Boot backend through HTTP requests.

The project uses Angular components and services to organize the application and prepare it for integration with the REST API.

### Frontend Architecture

```text
Angular
│
├── Components
│   ├── Home
│   ├── About
│   ├── Skills
│   ├── Projects
│   └── Contact
│
├── Services
│   └── ProjectService
│
└── REST API
        │
        ▼
   Spring Boot
```

---

## ☕ Spring Boot Backend

The backend was developed using **Java and Spring Boot**.

The application exposes a REST API responsible for managing portfolio projects.

### Projects API

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| GET    | `/api/projects`      | List all projects |
| POST   | `/api/projects`      | Create a project  |
| PUT    | `/api/projects/{id}` | Update a project  |
| DELETE | `/api/projects/{id}` | Delete a project  |

### Project Entity

Each project contains:

```text
Project
├── id
├── name
└── description
```

The `id` is automatically generated using JPA.

---

## 🗄️ PostgreSQL

The backend uses PostgreSQL as the relational database.

Spring Data JPA and Hibernate are responsible for mapping the Java `Project` entity to the PostgreSQL database.

```text
Spring Boot
     │
     ▼
Spring Data JPA
     │
     ▼
Hibernate
     │
     ▼
PostgreSQL
```

---

## 🔄 Full Stack Architecture

The current architecture is:

```text
┌─────────────────────┐
│       Angular       │
│      Frontend       │
└──────────┬──────────┘
           │
           │ HTTP / REST
           ▼
┌─────────────────────┐
│    Spring Boot      │
│       Backend       │
└──────────┬──────────┘
           │
           │ JPA / Hibernate
           ▼
┌─────────────────────┐
│     PostgreSQL       │
│      Database        │
└─────────────────────┘
```

---

## ✅ Current Progress

### Backend

* [x] Spring Boot project
* [x] PostgreSQL connection
* [x] Project entity
* [x] Repository
* [x] REST Controller
* [x] GET projects
* [x] POST project
* [x] PUT project
* [x] DELETE project
* [x] CRUD testing with Postman

### Frontend

* [x] Angular project
* [x] Portfolio components
* [x] Project model
* [x] Project service foundation
* [ ] Connect Angular to Spring Boot REST API
* [ ] Display projects from PostgreSQL
* [ ] Create projects from Angular
* [ ] Edit projects from Angular
* [ ] Delete projects from Angular

### Future Development

* [ ] Authentication
* [ ] JWT
* [ ] Admin dashboard
* [ ] Responsive design improvements
* [ ] Docker Compose
* [ ] Cloud deployment
* [ ] Production configuration

---

## 🎯 Project Goal

The goal of this project is to build a professional full-stack portfolio while demonstrating practical experience with:

**Java • Spring Boot • Angular • TypeScript • PostgreSQL • REST APIs • JPA • Hibernate • Docker • Git • GitHub**

The application is being developed incrementally, with each stage introducing new technologies and real-world software development practices.
