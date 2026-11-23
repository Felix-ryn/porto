export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  role: string;
  duration: string;
  demoLink?: string;
  githubLink?: string;
  features: string[];
  challenges: string[];
  solution: string;
  year?: string;
  company?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "seismocluster",
    title: "SeismoCluster",
    shortDescription:
      "A real-time earthquake monitoring and analysis dashboard for visualizing seismic patterns across Indonesia using clustering and anomaly detection.",
    fullDescription:
      "SeismoCluster retrieves earthquake data from the USGS ComCat API, processes it through an automated ETL pipeline, and analyzes it with machine learning models managed through MLflow. The results are presented in an interactive React dashboard with geographic maps and data visualizations.",
    thumbnail: "/images/projects/seismocluster.png",
    images: [
      "/images/projects/seismocluster.png",
    ],
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "MLflow",
      "Scikit-learn",
    ],
    role: "Full-Stack Developer & Data Engineer",
    duration: "Independent Project",
    githubLink: "https://github.com/Felix-ryn/seismocluster.git",
    demoLink: "https://affectionate-playfulness-production-84b4.up.railway.app/",
    features: [
      "Real-time earthquake data ingestion",
      "Automated ETL pipeline",
      "Interactive geographic clustering map",
      "DBSCAN hotspot detection",
      "Isolation Forest anomaly detection",
      "MLflow champion model registry",
      "Hierarchical earthquake zoning",
      "REST API for monitoring and analysis",
    ],
    challenges: [
      "Processing and normalizing frequent seismic data updates",
      "Detecting meaningful geographic hotspot patterns",
      "Keeping multiple ML models consistent and traceable",
    ],
    solution:
      "Built an ETL pipeline with FastAPI and PostgreSQL, trained and tracked clustering models in MLflow, and exposed the results through a React and Leaflet dashboard.",
    year: "2026",
    company: "Independent",
  },
  {
    id: 2,
    slug: "sess-parking",
    title: "Smart Statistical System",
    shortDescription:
      "A smart street parking management system that combines transactions, revenue, QRIS/cash payments, area capacity, and YOLOv8 computer vision for occupancy and illegal parking monitoring.",
    fullDescription:
      "A zone-based smart parking platform for managing curbside parking operations. The system records entry and exit transactions, processes cash and QRIS payments, calculates area capacity and revenue, manages tax/MOU rules and jukir deposits, and reconciles active transactions with parking detections from a YOLOv8 computer vision service.",
    thumbnail: "/images/projects/sessparking.png",
    images: [
      "/images/projects/sessparking.png",
    ],
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "FastAPI",
      "YOLOv8",
    ],
    role: "Full-Stack & Computer Vision Developer",
    duration: "Independent Project",
    githubLink: "https://github.com/Felix-ryn/Smart-EvaluationSensing-Statistical-System.git",
    demoLink: undefined,
    features: [
      "Zone-based parking capacity management",
      "Entry and exit transaction processing",
      "Cash and simulated QRIS payments",
      "Revenue, tax/MOU, and jukir deposit reports",
      "Transaction and computer vision reconciliation",
      "YOLOv8 occupancy detection",
      "Illegal parking violation verification",
      "Admin and parking operator dashboards",
    ],
    challenges: [
      "Synchronizing transaction records with camera detections",
      "Handling uncertain computer vision violations safely",
      "Calculating capacity and reconciliation across parking zones",
    ],
    solution:
      "Combined a React dashboard, Express/Prisma backend, PostgreSQL database, and FastAPI YOLOv8 service, with admin verification before violation records are considered valid.",
    year: "2026",
    company: "Independent",
  },
];

export const allProjects: Project[] = [];
