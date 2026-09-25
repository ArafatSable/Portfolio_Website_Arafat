// src/data/projectsData.jsx

import ecs from "../assets/ECS.png";
import vpn from "../assets/VPN.png";
import opensearch from "../assets/opensearch.png";
import bitbucket from "../assets/bitbucket.png";
import azure from "../assets/azure.png";

const projects = [
  {
    id: 1,
    title: "Higher-education statutory reporting pipeline",
    description:
      "Zoho Creator app that submits institutional data to a government higher-ed reporting API across 15 modules. Deluge add/update/delete and bulk-push on staging and production, with error handling, batch limits, and retries. Optimised lookups and raised bulk-push from 25 to 110 records per run. Companion Excel-to-Creator import tool is on GitHub.",
    image: ecs,
    github: "https://github.com/ArafatSable/cheds-import-tool",
  },
  {
    id: 2,
    title: "Student information system modules",
    description:
      "Learning-outcome attainment module with 3 custom JavaScript widgets, academic-integrity case management, feedback and QA dashboards, and a visa-expiry scheduler integrated with Zoho CRM and Zoho Books.",
    image: opensearch,
  },
  {
    id: 3,
    title: "Financial Data Pair Trading Platform",
    description:
      "Real-time visualisations of financial pairs with analytics APIs. Built with React, Node.js, and MongoDB.",
    image: azure,
    github: "https://github.com/ArafatSable/Pair_trading",
  },
  {
    id: 4,
    title: "Real-Time Data Pipeline",
    description:
      "Ingestion pipeline for high-frequency financial data with data-quality checks. Kafka, Spark, Python, and SQL.",
    image: bitbucket,
    github: "https://github.com/ArafatSable/Real_Time_Data_Streaming",
  },
  {
    id: 5,
    title: "Image Regeneration using U-Net",
    description:
      "Reconstructs clear images from blurred datasets using patch-based preprocessing. Python, TensorFlow, and OpenCV.",
    image: vpn,
  },
];

export default projects;
