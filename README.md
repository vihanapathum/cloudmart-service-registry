# CloudMart — Service Registry

## Project Description

Eureka Service Registry for the CloudMart cloud-native e-commerce platform.
Every platform component and microservice (Config Server, API Gateway, Product
Service, Order Service, User Service) registers itself here on startup. The API
Gateway uses this registry for dynamic service discovery and client-side load
balancing across multiple instances of each service.

## Technology Stack

- Java 25
- Spring Boot 4.0.7
- Spring Cloud 2025.1 (Netflix Eureka Server)
- PM2 (process management on the deployed VM)

## Setup / Getting Started

### Prerequisites

- Java 25 JDK
- Maven 3.9+

### Run locally

```bash
mvn clean package
java -jar target/service-registry.jar
```

Then open http://localhost:8761 to see the Eureka dashboard.

### Deployed

This service is deployed on Google Cloud Platform as part of an IaaS Managed
Instance Group (Compute Engine), managed by PM2 for automatic restarts. See
`ecosystem.config.js`.

## Student Information

- **Student Name:** A.G.Vihana Pathum Piyasiri
- **Student Number:** 2301692038
- **Slack Handle:**
- **GCP Project ID:** project-f45a7f6e-0370-44ea-b74
