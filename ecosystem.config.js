// PM2 process definition for the Eureka Service Registry.
// Deploy the built jar to /opt/cloudmart/service-registry/service-registry.jar on the VM,
// then from that directory run: pm2 start ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "service-registry",
      script: "java",
      args: "-jar service-registry.jar",
      cwd: "/opt/cloudmart/service-registry",
      env: {
        SERVER_PORT: "8761",
        EUREKA_HOSTNAME: "localhost" // override with the VM's internal DNS name / IP when deployed
      },
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      restart_delay: 3000,
      out_file: "/var/log/pm2/service-registry-out.log",
      error_file: "/var/log/pm2/service-registry-error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss"
    }
  ]
};
