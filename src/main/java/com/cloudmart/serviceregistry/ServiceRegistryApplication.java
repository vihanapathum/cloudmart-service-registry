package com.cloudmart.serviceregistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 * CloudMart - Eureka Service Registry.
 * All other platform components and microservices register themselves here,
 * and the API Gateway uses this registry to discover and load-balance requests
 * to the microservices (lb://product-service, lb://order-service, lb://user-service).
 */
@SpringBootApplication
@EnableEurekaServer
public class ServiceRegistryApplication {
    public static void main(String[] args) {
        SpringApplication.run(ServiceRegistryApplication.class, args);
    }
}
