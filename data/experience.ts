export interface ExperienceItem {
  id: number;
  type: "education" | "experience";
  institution: string;
  position: string;
  period: string;
  description: string;
  location?: string;
  highlights?: string[];
}

export const experiences: ExperienceItem[] = [
  {
  id: 1,
  type: "education",
  institution: "Politeknik Elektronika Negeri Surabaya (PENS)",
  position: "B.S. in Applied Data Science",
  period: "2024 - Present",
  location: "Surabaya, Indonesia",
  description:
    "Pursuing an Applied Data Science degree with a focus on data analytics, machine learning, artificial intelligence, and data engineering. Developing practical skills in statistical modeling, predictive analytics, and software development to solve real-world problems through data-driven approaches.",
  highlights: [
    "Data Science and Statistical Analysis",
    "Machine Learning and Artificial Intelligence",
    "Deep Learning and Predictive Modeling",
    "Data Engineering and Database Management",
    "Python Programming and Data Analytics",
    "Software Development and Data Visualization",
  ],
},
  {
  id: 2,
  type: "experience",
  institution: "E-Code HIMTI PENS",
  position: "Backend Developer",
  period: "March 2026 - Present",
  location: "Surabaya, Indonesia",
  description:
    "Working as a Backend Developer at E-Code HIMTI PENS, responsible for developing and maintaining APIs, managing databases, and optimizing backend systems to support application functionality, performance, and reliability.",
  highlights: [
    "Backend API Development and Integration",
    "RESTful API Design and Implementation",
    "Database Management and Optimization",
    "Backend System Development and Maintenance",
    "System Performance and Reliability Optimization",
    "Problem Solving and Technical Troubleshooting",
  ],
},
  {
  id: 3,
  type: "experience",
  institution: "Independent Project",
  position: "Freelance Data Science & Machine Learning Engineer",
  period: "2025 - Present",
  location: "Indonesia",
  description:
    "Developing an independent earthquake prediction project focused on tectonic and volcanic seismic activity, applying data science, machine learning, and deep learning techniques to analyze seismic patterns, build predictive models, and evaluate model performance.",
  highlights: [
    "Earthquake Data Analysis and Prediction",
    "Python Programming and Time Series Analysis",
    "Machine Learning and Deep Learning (ACO, Genetic Algorithm, LSTM, CNN, Naive Bayes)",
    "Data Preprocessing and Feature Engineering",
    "Predictive Model Development and Evaluation",
    "Seismic Pattern Analysis and Problem Solving",
  ],
},
  {
  id: 4,
  type: "experience",
  institution: "PT Cendana Teknika Utama",
  position: "SEO Specialist & Database Administrator Intern",
  period: "November 2023 - May 2024",
  location: "Indonesia",
  description:
    "Gained professional experience in database administration and website optimization, handling database management, SQL query optimization, SEO strategies, WordPress development, and website performance optimization.",
  highlights: [
    "Database Administration and Management",
    "Data Handling, Processing, and Integrity Maintenance",
    "SQL Query Optimization and Technical Troubleshooting",
    "SEO Optimization and Keyword Research",
    "Content Writing and On-Page SEO",
    "Technical SEO and Website Performance Optimization",
    "WordPress Development and Management",
    "Problem Solving and Technical Analysis",
  ],
},
  {
  id: 5,
  type: "experience",
  institution: "Teaching Factory Telkom DBT",
  position: "Teaching Factory Participant",
  period: "January 2022 - March 2023",
  location: "Indonesia",
  description:
    "Selected as a student participant in the Teaching Factory program at Telkom DBT, gaining hands-on experience and industry-relevant skills through various training programs in Business and Technology.",
  highlights: [
    "Participated in practical Business and Technology training programs",
    "Developed industry-relevant technical and professional skills",
    "Gained hands-on experience through industry-oriented learning",
    "Strengthened problem-solving and professional communication skills",
  ],
},
  {
  id: 6,
  type: "experience",
  institution: "SMK Telkom Malang",
  position: "Software Engineering Student",
  period: "2021 - 2024",
  location: "Malang, Indonesia",
  description:
    "Studied Software Engineering with a strong focus on full-stack web development, specializing in building modern web applications using Node.js and React.js.",
  highlights: [
    "Backend development using Node.js and Express.js",
    "Frontend development using React.js",
    "RESTful API development and integration",
    "Database management using MySQL",
    "Full-stack web application development",
  ],
},
];
