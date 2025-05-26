// src/data/projectsData.jsx

// 1) import your images
import ecs    from "../assets/ECS.png";
import vpn    from "../assets/VPN.png";
import opensearch    from "../assets/opensearch.png";
import bitbucket    from "../assets/bitbucket.png";
import cwa    from "../assets/cwa.png";
import azure    from "../assets/azure.png";
// You can replace these with real project images later

// 2) export an array of plain objects
const projects = [
  {
    id: 1,
    title: "AWS ECS Migration Project",
    description:
      "Migrated EC2-based infrastructure to AWS ECS with GitHub Actions-based CI/CD, ALB integration, CloudWatch monitoring, and Terraform-defined staging and production environments.",
    image: ecs,
    
  },
  {
    id: 2,
    title: "ZTNA PoC with Firezone & NetBird",
    description:
      "Designed and tested Zero Trust VPN access using Firezone and NetBird to enable secure remote access to internal AWS and Azure resources via site-to-site and peer-to-peer models.",
    image: vpn,
    
  },
  {
    id: 3,
    title: "OpenSearch with GCS Snapshots (Helm + Kubernetes)",
    description:
      "Deployed OpenSearch on Kubernetes with secure GCS snapshot backups using Helm, custom volume mounts, keystore credentials, and automated plugin configuration for OpenSearch 1.3.x.",
    image: opensearch,
    
  },
  {
    id: 4,
    title: "Bitbucket Self-Hosted Runners Autoscaler on Kubernetes",
    description:
      "Set up autoscaling Bitbucket runners in Kubernetes with Docker-in-Docker support, IRSA-based ECR push access, and custom `runner-scale-set` config using Kustomizes.",
    image: bitbucket,
    
  },
  {
    id: 5,
    title: "CloudWatch + Ansible + Terraform Integration",
    description:
      "Automated EC2 disk usage monitoring across environments using Ansible, dynamic detection of mount paths, and CloudWatch alarm provisioning through reusable Terraform modules.",
    image: cwa,
    
  },
  {
    id: 6,
    title: "Azure Hub-and-Spoke Architecture (Cost-Efficient)",
    description:
      "Built a scalable hub-and-spoke architecture on Azure with isolated prod/dev environments, public-private subnets, NSGs, Standard Load Balancer, and cost-optimized NAT gateway setup.",
    image: azure,
    
  }
];

export default projects;
