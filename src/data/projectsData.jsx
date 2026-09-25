// src/data/projectsData.jsx

import ecs from "../assets/ECS.png";
import vpn from "../assets/VPN.png";
import opensearch from "../assets/opensearch.png";
import bitbucket from "../assets/bitbucket.png";
import cwa from "../assets/cwa.png";
import azure from "../assets/azure.png";

const projects = [
  {
    id: 1,
    title: "CHEDS Import Tool",
    description:
      "Python + Streamlit tool that converts Ministry HEDB Excel exports into Zoho Creator import-ready files using per-module mapping configs. Companion to a government reporting integration covering 15 CHEDS/GSB modules with add/update/delete and bulk-push.",
    image: cwa,
    github: "https://github.com/ArafatSable/cheds-import-tool",
  },
  {
    id: 2,
    title: "Government Data Reporting Integration",
    description:
      "Zoho Creator application that submits institutional data to the UAE Ministry of Higher Education CHEDS/GSB API across 15 reporting modules. Deluge functions for add/update/delete and bulk-push with error handling, batch limits, and retry logic. Raised bulk-push throughput from 25 to 110 records per run. Client work under NDA — details generalised.",
    image: ecs,
  },
  {
    id: 3,
    title: "Student Information System (Zoho Creator)",
    description:
      "Learning-outcome attainment module with 3 custom JavaScript widgets, academic-integrity case management, feedback/QA dashboards, and a visa expiry scheduler integrated with Zoho CRM and Zoho Books. Client work under NDA — details generalised.",
    image: opensearch,
  },
  {
    id: 4,
    title: "Financial Data Pair Trading Platform",
    description:
      "Real-time visualisations of financial pairs with analytics APIs. Built with React, Node.js, and MongoDB.",
    image: azure,
    github: "https://github.com/ArafatSable/Pair_trading",
  },
  {
    id: 5,
    title: "Real-Time Data Pipeline",
    description:
      "Ingestion pipeline for high-frequency financial data with data-quality checks. Kafka, Spark, Python, and SQL.",
    image: bitbucket,
    github: "https://github.com/ArafatSable/Real_Time_Data_Streaming",
  },
  {
    id: 6,
    title: "Image Regeneration using U-Net",
    description:
      "Reconstructs clear images from blurred datasets using patch-based preprocessing. Python, TensorFlow, and OpenCV.",
    image: vpn,
  },
];

export default projects;
