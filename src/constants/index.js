import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a full stack developer with 2 years of experience in building scalable web applications using front-end technologies like React and Next.js, and back-end tools such as Node.js, MySQL, and PostgreSQL. My expertise extends to Python for data science, web development, and computer vision, allowing me to create innovative, data-driven solutions that enhance business growth and user experiences.`;

export const ABOUT_TEXT = `I am a passionate and versatile full stack developer with 2 years of experience in creating scalable and user-friendly web applications. I specialize in front-end technologies like React and Next.js, as well as back-end tools such as Node.js, MySQL, PostgreSQL, and MongoDB. Additionally, I have expertise in Python for data science, web development, and computer vision, enabling me to build innovative, data-driven solutions. I am driven by a curiosity to continuously learn and solve complex problems, thrive in collaborative environments, and enjoy contributing to open-source projects in my spare time.`;

export const EXPERIENCES = [
    {
        year: "2024 - Present",
        role: "Frontend Developer",
        company: "Dismore",
        description: `Developing a user-friendly website for a vending machine service platform. Responsible for implementing responsive and interactive UI using React.js and Next.js, while ensuring seamless integration with back-end services built on Express and TypeScript. Collaborating closely with designers and back-end developers to deliver high-performance features.`,
        technologies: ["React.js", "Next.js", "Express", "TypeScript"],
    },
    {
        year: "2023 - 2024",
        role: "Full Stack Developer",
        company: "PT. Unicam Digital Pictures",
        description: `Built and maintained a student counseling service website. Developed both the front-end and back-end, ensuring secure and efficient communication between the interface and the database. Utilized Laravel for server-side development, PostgreSQL for database management, and Flutter to enhance the mobile experience of the platform.`,
        technologies: ["Laravel", "PostgreSQL", "Flutter"],
    },
    {
        year: "2022 - 2023",
        role: "Frontend Developer",
        company: "PT. Cipta Wisata Medika",
        description: `Developed a hotel services website, focusing on creating a visually appealing and highly interactive user interface. Used JavaScript, React.js, and Next.js to build responsive designs and collaborated with back-end developers to integrate the platform with PostgreSQL databases, ensuring smooth data handling.`,
        technologies: ["JavaScript", "React.js", "Next.js", "PostgreSQL"],
    },
    {
        year: "2021 - 2022",
        role: "Backend Developer",
        company: "Tutor Teknik",
        description: `Developed and maintained a library management web application. Designed and implemented RESTful APIs for managing library operations, and optimized database performance with MySQL. Utilized Laravel for server-side development, ensuring a scalable and secure backend for the platform.`,
        technologies: ["Laravel", "MySQL", "JavaScript"],
    },
];


export const PROJECTS = [
    {
        title: "Donation Application for Orphan Care with K-Means Clustering and Income Forecasting",
        image: project1,
        description:
            "A comprehensive donation platform that supports orphan care, featuring real-time donation tracking and data analysis. The application implements K-Means clustering to group donor profiles and income forecasting using historical data. The backend is built with Django and PostgreSQL, while React.js and TypeScript are used for the frontend to ensure a seamless user experience.",
        technologies: ["React.js", "Python", "Django", "PostgreSQL", "TypeScript"],
    },
    {
        title: "E-Commerce Website",
        image: project2,
        description:
            "A fully functional e-commerce platform, enabling product listing, user management, and secure online transactions. Developed using Laravel for backend processes and PostgreSQL for data storage. This project focuses on a smooth user interface, high security, and efficient database management to handle product orders and inventory.",
        technologies: ["Laravel", "PostgreSQL"],
    },
    {
        title: "Computer Vision Detection Application",
        image: project3,
        description:
            "An advanced computer vision system designed to detect and analyze images for specific features using Python and Django. The application incorporates machine learning models for object detection and uses PostgreSQL to store and manage image data. This project showcases the use of AI in practical applications, providing precise image recognition capabilities.",
        technologies: ["Python", "Django", "PostgreSQL"],
    },
    {
        title: "Portfolio Website",
        image: project4,
        description:
            "A modern and responsive personal portfolio website designed to showcase professional projects, skills, and achievements. Built using React.js and Tailwind CSS for a sleek, minimalistic, and user-friendly design, it ensures a fast and responsive experience across all devices.",
        technologies: ["React.js", "Tailwind CSS"],
    },
];


export const CONTACT = {
    address: "Surabaya - Jawa Timur  ",
    phoneNo: "0856-1903-1903",
    email: "wachidnur@gmail.com",
};
