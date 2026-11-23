export interface AboutHighlight {
  title: string;
  description: string;
  icon: string;
}

export const aboutIntro = {
  title: "Turning Ideas into Digital Solutions.",
  description:
    "I'm a data science and software engineering enthusiast focused on building scalable systems, transforming raw data into actionable insights, and developing practical technology solutions. With expertise spanning backend development, data engineering, and machine learning, I thrive at the intersection of code and data.",
};

export const highlights: AboutHighlight[] = [
  {
    title: "Backend Development",
    description:
      "Building robust and scalable APIs and server-side applications with Node.js, Python, and modern frameworks.",
    icon: "server",
  },
  {
    title: "Data Engineering",
    description:
      "Designing and maintaining data pipelines, data warehouses, and ETL processes for efficient data processing.",
    icon: "database",
  },
  {
    title: "Machine Learning",
    description:
      "Developing and deploying ML models for classification, clustering, and predictive analytics using scikit-learn and deep learning frameworks.",
    icon: "brain",
  },
];
