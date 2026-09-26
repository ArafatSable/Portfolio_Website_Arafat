// src/data/projectsData.jsx

import reporting from "../assets/proj_reporting.svg";
import sis from "../assets/proj_sis.svg";
import pairs from "../assets/proj_pairs.svg";
import pipeline from "../assets/proj_pipeline.svg";
import unet from "../assets/proj_unet.svg";

const projects = [
  {
    id: 1,
    title: "Higher-education statutory reporting pipeline",
    description:
      "Zoho Creator app submitting institutional data to a government higher-ed reporting API across 15 modules. Deluge add/update/delete and bulk-push, error handling and retries. Raised throughput from 25 to 110 records per run. Companion Python/Streamlit tool maps spreadsheet exports into Creator-ready files. Standardised 38 reports and trained client users.",
    image: reporting,
    github: "https://github.com/ArafatSable/cheds-import-tool",
  },
  {
    id: 2,
    title: "Student information system modules",
    description:
      "Learning-outcome attainment end to end: outcome masters, rubric mapping, 3 custom JS widgets and role-based access. Academic-integrity cases, QA dashboards, visa-expiry scheduler with CRM and Books, plus a division-merge change with combined attendance write-back.",
    image: sis,
  },
  {
    id: 3,
    title: "Financial Data Pair Trading Platform",
    description:
      "Responsive web app with real-time visualisations of financial pairs. React, Node.js, and MongoDB; backend APIs for analytics.",
    image: pairs,
    github: "https://github.com/ArafatSable/Pair_trading",
  },
  {
    id: 4,
    title: "Real-Time Data Pipeline",
    description:
      "Ingestion pipeline for high-frequency financial data. Kafka, Spark, Python, and SQL-based quality checks and error handling.",
    image: pipeline,
    github: "https://github.com/ArafatSable/Real_Time_Data_Streaming",
  },
  {
    id: 5,
    title: "Image Regeneration using U-Net",
    description:
      "Deep-learning pipeline reconstructing clear images from blurred datasets, with patch-based preprocessing. Python, TensorFlow, OpenCV. Strong SSIM and PSNR gains over baseline.",
    image: unet,
  },
];

export default projects;
