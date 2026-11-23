export interface Skill {
  name: string;
  proficiency: "Expert" | "Advanced" | "Intermediate";
  icon?: string;
}

export interface SkillCategory {
  id: number;
  category: string;
  description: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    id: 1,
    category: "Programming Languages",
    description: "Core programming languages and fundamentals",
    skills: [
      { name: "Python", proficiency: "Expert" },
      { name: "JavaScript", proficiency: "Expert" },
      { name: "TypeScript", proficiency: "Advanced" },
      { name: "SQL", proficiency: "Expert" },
      { name: "Bash", proficiency: "Advanced" },
    ],
  },
  {
    id: 2,
    category: "Backend Development",
    description: "Server-side development and API design",
    skills: [
      { name: "Node.js", proficiency: "Expert" },
      { name: "Express.js", proficiency: "Expert" },
      { name: "FastAPI", proficiency: "Advanced" },
      { name: "REST API", proficiency: "Expert" },
      { name: "GraphQL", proficiency: "Advanced" },
      { name: "Microservices", proficiency: "Advanced" },
      { name: "Authentication/Authorization", proficiency: "Advanced" },
      { name: "WebSocket", proficiency: "Advanced" },
    ],
  },
  {
    id: 3,
    category: "Data Engineering",
    description: "Building data pipelines and data infrastructure",
    skills: [
      { name: "Apache Spark", proficiency: "Advanced" },
      { name: "Apache Kafka", proficiency: "Advanced" },
      { name: "Airflow", proficiency: "Advanced" },
      { name: "ETL/ELT", proficiency: "Expert" },
      { name: "Data Warehousing", proficiency: "Advanced" },
      { name: "Data Pipeline", proficiency: "Expert" },
      { name: "dbt", proficiency: "Advanced" },
      { name: "Delta Lake", proficiency: "Intermediate" },
    ],
  },
  {
    id: 4,
    category: "Machine Learning",
    description: "ML model development and AI implementation",
    skills: [
      { name: "Scikit-learn", proficiency: "Expert" },
      { name: "XGBoost", proficiency: "Expert" },
      { name: "TensorFlow", proficiency: "Advanced" },
      { name: "PyTorch", proficiency: "Advanced" },
      { name: "Pandas", proficiency: "Expert" },
      { name: "NumPy", proficiency: "Expert" },
      { name: "Feature Engineering", proficiency: "Expert" },
      { name: "YOLO", proficiency: "Advanced" },
    ],
  },
  {
    id: 5,
    category: "Databases",
    description: "Database design, optimization, and management",
    skills: [
      { name: "PostgreSQL", proficiency: "Expert" },
      { name: "MongoDB", proficiency: "Advanced" },
      { name: "DuckDB", proficiency: "Advanced" },
      { name: "Redis", proficiency: "Advanced" },
      { name: "SQL Optimization", proficiency: "Expert" },
      { name: "Database Design", proficiency: "Expert" },
      { name: "Query Optimization", proficiency: "Advanced" },
    ],
  },
  {
    id: 6,
    category: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React", proficiency: "Expert" },
      { name: "Next.js", proficiency: "Expert" },
      { name: "Tailwind CSS", proficiency: "Expert" },
      { name: "HTML/CSS", proficiency: "Expert" },
      { name: "Responsive Design", proficiency: "Expert" },
      { name: "TypeScript", proficiency: "Advanced" },
      { name: "Framer Motion", proficiency: "Advanced" },
    ],
  },
  {
    id: 7,
    category: "DevOps & Tools",
    description: "Deployment, containerization, and infrastructure",
    skills: [
      { name: "Docker", proficiency: "Advanced" },
      { name: "Git", proficiency: "Expert" },
      { name: "Linux", proficiency: "Advanced" },
      { name: "CI/CD", proficiency: "Advanced" },
      { name: "PostgreSQL Administration", proficiency: "Advanced" },
      { name: "API Testing", proficiency: "Advanced" },
    ],
  },
];
