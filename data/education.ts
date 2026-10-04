export interface Education {
  id: number;
  institution: string;
  logo: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  description: string;
  achievements: string[];
}

export const education: Education[] = [
  {
    id: 1,
    institution: "University Name",
    logo: "/images/education/university-logo.png",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startYear: 2019,
    endYear: 2023,
    description: "Specialized in Software Engineering, Data Science, and Web Development. Completed thesis on Machine Learning applications in e-commerce.",
    achievements: [
      "Cumulative GPA: 3.85/4.0",
      "Dean's List: 2021-2023",
      "Best Capstone Project Award",
      "Active in tech competitions & hackathons",
    ],
  },
  {
    id: 2,
    institution: "Certification Platform",
    logo: "/images/education/cert-logo.png",
    degree: "Professional Certifications",
    field: "Full Stack Development & Data Engineering",
    startYear: 2023,
    endYear: 2024,
    description: "Completed multiple professional certifications including AWS Solutions Architect, Google Cloud Professional Data Engineer, and Full Stack Development Master.",
    achievements: [
      "AWS Solutions Architect Associate",
      "Google Cloud Professional Data Engineer",
      "Full Stack Development Specialization",
      "Machine Learning Specialization",
    ],
  },
];
