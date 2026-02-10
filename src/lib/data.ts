import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

type ImageMap = { [key: string]: ImagePlaceholder };
const imageMap = PlaceHolderImages.reduce((acc: ImageMap, img) => {
  acc[img.id] = img;
  return acc;
}, {});

export const personalInfo = {
    name: "Narra Srujan",
    tagline: "Cloud Engineer & Full-Stack Developer",
    about: "Interned at Airbus, pursued a degree in Computer Science, I specialize in building robust cloud infrastructure and full-stack applications. My focus is on leveraging modern technologies to create scalable, efficient, and user-centric solutions.",
    email: "sonusrujan76@gmail.com",
    github: "https://github.com/sonusrujan",
    linkedin: "https://www.linkedin.com/in/srujan-rathna-shalem-narra-8a4a202b2/",
}

export type Project = {
    title: string;
    description: string;
    highlights: string[];
    techStack: string[];
    image: ImagePlaceholder;
}

export const projects: Project[] = [
    {
        title: "Camera Calibration Platform",
        description: "An end-to-end internal tool for mono, multi-camera, and floor-map calibration at Airbus.",
        highlights: [
            "Built an end-to-end internal tool for mono, multi-camera, and floor-map calibration.",
            "Implemented checkerboard/Charuco board detection, alignment guidance, and automated coverage plot generation.",
            "Integrated WebRTC, RTSP, and FFmpeg for real-time video streaming and image capture.",
            "Developed the complete backend using Flask for accurate calibration plot computation.",
            "Migrated frontend from Angular to React and handled full API integration.",
            "Automated data handling using Azure Blob Storage, VMs, and Cosmos DB.",
            "Configured CI/CD pipelines using Jenkins for production-ready builds."
        ],
        techStack: ["Flask", "Angular", "React", "WebRTC", "RTSP", "FFmpeg", "Azure", "Blob Storage", "Cosmos DB", "Jenkins", "Swagger"],
        image: imageMap['project-1']
    },
    {
        title: "People Anonymisation Tool",
        description: "An internal Airbus tool to detect and anonymize people in media files.",
        highlights: [
            "Developed a tool to anonymize people in images and videos from Azure Blob Storage.",
            "Implemented automated workflows to blur or blackout human subjects.",
            "Used YOLO pretrained models for high-accuracy person detection.",
            "Built the backend in Python and the user dashboard in React.",
            "Integrated Prefect to automate anonymization pipelines and ensure scalability."
        ],
        techStack: ["Python", "React", "YOLO", "Azure", "Blob Storage", "Cosmos DB", "Prefect"],
        image: imageMap['project-2']
    },
    {
        title: "Human Detection & Movement Tracking",
        description: "An internal Airbus tool to detect humans and display real-time movement paths.",
        highlights: [
            "Developed a tool to detect humans and display a real-time count in each frame.",
            "Implemented movement-path tracking by drawing trajectory lines.",
            "Utilized YOLO models for person detection and OpenCV for tracking.",
            "Deployed on Azure using Blob Storage, VMs, and Cosmos DB."
        ],
        techStack: ["Python", "YOLO", "OpenCV", "Azure", "Blob Storage", "Cosmos DB"],
        image: imageMap['project-5']
    },
    {
        title: "CodeCommerce",
        description: "A fully functional e-commerce platform with a consumer-friendly interface.",
        highlights: [
            "Developed a fully functional e-commerce platform with a consumer-friendly interface.",
            "Implemented secure authentication and an admin panel for product management.",
            "Ensured responsive front-end layouts and seamless API integrations."
        ],
        techStack: ["Node.js", "MongoDB", "Express.js", "React.js"],
        image: imageMap['project-3']
    },
    {
        title: "Blood Bank with Cloud Integration",
        description: "A cloud-based platform connecting blood donors and recipients.",
        highlights: [
            "Developed and deployed a cloud-based platform on Azure.",
            "Implemented CI/CD pipelines using Git, reducing deployment time by 40%.",
            "Utilized Docker and Kubernetes for scalable application environments.",
            "Ensured security best practices and comprehensive documentation."
        ],
        techStack: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MongoDB", "Azure", "Docker", "Kubernetes", "Git"],
        image: imageMap['project-4']
    }
];

export type WorkExperience = {
    company: string;
    title: string;
    duration: string;
    responsibilities: string[];
}

export const workExperience: WorkExperience[] = [
    {
        company: "Airbus India Private Limited",
        title: "Cloud Intern",
        duration: "Jun 2025 - Dec 2025",
        responsibilities: [
            "Developed a Camera Calibration Platform using Flask and React, reducing manual calibration time by 40% through automated X, Y, Z plot generation and WebRTC streaming.",
            "Engineered a People Anonymization Tool using YOLO and OpenCV, achieving 98% detection accuracy for human subjects and automating secure storage in Azure Blob Storage.",
            "Built scalable FastAPI backends, improving API response times by 25% for internal tracking tools, documented via Swagger for 100% team transparency.",
            "Automated deployment pipelines using Jenkins CI/CD, decreasing production build errors by 15% on Azure Virtual Machines.",
            "Optimized cloud resource access using Azure RBAC, ensuring zero security breaches during the handling of sensitive internal media assets."
        ]
    },
    {
        company: "Global Software Solutions Pvt Ltd.",
        title: "Cloud DevOps Intern",
        duration: "Aug 2023 - Dec 2023",
        responsibilities: [
            "Managed cloud infrastructure and CI/CD processes within Azure DevOps, implementing automation scripts that reduced manual deployment overhead by 20%.",
            "Streamlined cloud operations by monitoring system performance and assisting in the migration of legacy services to containerized environments.",
            "Gained hands-on experience in Infrastructure as Code (IaC) and automated resource provisioning to ensure robust environment consistency."
        ]
    },
    {
        company: "G3 Technologies",
        title: "Cloud DevOps Intern",
        duration: "Apr 2022 - May 2022",
        responsibilities: [
            "Developed responsive front-end components using React.js, improving user engagement by 15% via optimized UI/UX flows.",
            "Integrated RESTful APIs using Node.js and Express, reducing data retrieval latency by 30% through SQL optimization.",
            "Collaborated on JWT-based authentication implementation, decreasing unauthorized access attempts by 20%."
        ]
    }
];

export type Certification = {
    title: string;
    issuer: string;
    url: string;
}

export const certifications: Certification[] = [
    {
        title: "Java Full Stack Developer",
        issuer: "IAMNEO",
        url: "https://drive.google.com/file/d/1uWuXyi6MG0TLh2K6_Vea8ej8HCsGPFKK/view?usp=sharing",
    },
    {
        title: "Google Cloud Computing: Foundations",
        issuer: "Google",
        url: "https://drive.google.com/file/d/1TMs6RtJJWr1y0NvvDKsrclmIjkb0V4Xy/view?usp=sharing",
    },
    {
        title: "Microsoft Azure Fundamentals AZ-900",
        issuer: "Microsoft",
        url: "https://drive.google.com/file/d/1UXzZHqhg1y-kp_qyq6FOcTpkEeFmJAXa/view?usp=sharing",
    },
    {
        title: "Microsoft Azure Administrator AZ-104",
        issuer: "Microsoft",
        url: "https://drive.google.com/file/d/1IJQ70a_4frpKxQdcvrNQonnW_MV7scOs/view?usp=sharing",
    }
];
