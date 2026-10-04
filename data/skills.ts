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
    category: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React", proficiency: "Expert" },
      { name: "Next.js", proficiency: "Expert" },
      { name: "TypeScript", proficiency: "Advanced" },
      { name: "Tailwind CSS", proficiency: "Expert" },
      { name: "Vue.js", proficiency: "Advanced" },
      { name: "HTML/CSS", proficiency: "Expert" },
      { name: "JavaScript", proficiency: "Expert" },
      { name: "Responsive Design", proficiency: "Expert" },
      { name: "CSS Animation", proficiency: "Advanced" },
      { name: "Web Performance", proficiency: "Advanced" },
    ],
  },
  {
    id: 2,
    category: "Backend Development",
    description: "Server-side development and API design",
    skills: [
      { name: "Node.js", proficiency: "Expert" },
      { name: "Express.js", proficiency: "Expert" },
      { name: "Python", proficiency: "Advanced" },
      { name: "FastAPI", proficiency: "Advanced" },
      { name: "REST API", proficiency: "Expert" },
      { name: "GraphQL", proficiency: "Advanced" },
      { name: "Authentication/Authorization", proficiency: "Advanced" },
      { name: "Microservices", proficiency: "Advanced" },
      { name: "API Gateway", proficiency: "Intermediate" },
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
      { name: "Big Data", proficiency: "Advanced" },
      { name: "Data Pipeline", proficiency: "Expert" },
      { name: "Delta Lake", proficiency: "Intermediate" },
      { name: "Data Lake", proficiency: "Advanced" },
      { name: "Batch Processing", proficiency: "Advanced" },
    ],
  },
  {
    id: 4,
    category: "Machine Learning & AI",
    description: "ML model development and AI implementation",
    skills: [
      { name: "Scikit-learn", proficiency: "Expert" },
      { name: "TensorFlow", proficiency: "Advanced" },
      { name: "PyTorch", proficiency: "Advanced" },
      { name: "XGBoost", proficiency: "Expert" },
      { name: "Pandas", proficiency: "Expert" },
      { name: "NumPy", proficiency: "Expert" },
      { name: "Data Analysis", proficiency: "Expert" },
      { name: "Model Training", proficiency: "Advanced" },
      { name: "Feature Engineering", proficiency: "Expert" },
      { name: "SHAP/LIME", proficiency: "Intermediate" },
    ],
  },
  {
    id: 5,
    category: "Database & Storage",
    description: "Database design, optimization, and management",
    skills: [
      { name: "PostgreSQL", proficiency: "Expert" },
      { name: "MongoDB", proficiency: "Advanced" },
      { name: "MySQL", proficiency: "Advanced" },
      { name: "Redis", proficiency: "Advanced" },
      { name: "Database Design", proficiency: "Expert" },
      { name: "Query Optimization", proficiency: "Advanced" },
      { name: "Indexing", proficiency: "Advanced" },
      { name: "SQL", proficiency: "Expert" },
      { name: "NoSQL", proficiency: "Advanced" },
      { name: "Data Modeling", proficiency: "Advanced" },
    ],
  },
  {
    id: 6,
    category: "SEO & Digital Marketing",
    description: "Search engine optimization and online visibility",
    skills: [
      { name: "Technical SEO", proficiency: "Expert" },
      { name: "Keyword Research", proficiency: "Advanced" },
      { name: "On-page SEO", proficiency: "Expert" },
      { name: "Off-page SEO", proficiency: "Advanced" },
      { name: "Google Analytics", proficiency: "Advanced" },
      { name: "Link Building", proficiency: "Advanced" },
      { name: "SEO Tools", proficiency: "Expert" },
      { name: "Content Strategy", proficiency: "Advanced" },
      { name: "Rank Tracking", proficiency: "Advanced" },
      { name: "Schema Markup", proficiency: "Intermediate" },
    ],
  },
];
