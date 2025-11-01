/* 
  {
    title: "",
    slug: "",
    short_description: "",
    description: "",
    contributions: ``,
    image_header: "",
    image: "",
    tech: [""],
    github: "",
    demo: "",
    status: "",
  },

*/


const projects = [
  {
    title: "EA SEED: Combining RL with LLMs in Games",
    slug: "ea-seed",
    short_description: "A project for EA SEED, exploring the integration of Reinforcement Learning and Large Language Models in gaming.",
    description: "This is an ongoing project in the course DD2430 where we have been tasked to combine Reinforcement Learning (RL) with Large Language Models (LLMs) to create adaptive and intelligent game agents.",
    contributions: ``,
    image_header: "/projects/ea-seed/ea-seed.webp",
    image: "",
    tech: ["Unity, C#, Python"],
    github: "",
    demo: "",
    status: "ONGOING / UNFINISHED",
  },
  {
    title: "My Portfolio Website",
    slug: "portfolio",
    short_description: "A personal portfolio website to showcase my previous and ongoing projects.",
    description: "A personal portfolio built with Next.js and Tailwind. It features a clean and modern design, responsive layout, and showcases my projects, skills, and contact information. The website is optimized for both performance and adaptability.",
    contributions: `- Designed and developed the entire website`,
    image_header: "/projects/portfolio.webp",
    image: "",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    github: "https://github.com/eddbb/eddbb-portfolio",
    demo: "",
    status: "ONGOING",
  },
  {
    title: "Course Compass",
    slug: "course-compass",
    short_description: "A website where KTH students can find, save and review courses. Originally made as a project for the course DH2643.",
    description: "This project was finished, but we decided to continue working on it after the course had ended. The website allows KTH studnents to search for courses, save them to their profile, and write reviews. The website features user authentication, a search function with multiple filters, and a clean, user-friendly interface. We created the frontend using Next.js and Tailwind CSS, and the backend using Node.js and PostgreSQL with Neon and ElasticSearch. This project will be expanded further.",
    contributions: `- Implemented a lot of the search functionality
                    - Created several components
                    - Created tests in Jest
                    - Worked on styling.
                    - Worked on filtering.`,
    image_header: "/projects/course-compass/course-compass.webp",
    image: "/projects/course-compass/course-compass.webp",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Node.js", "PostgreSQL", "ElasticSearch", "Docker"],
    github: "https://github.com/Tegelstenen/course-compass",
    demo: "https://coursecompass.azurewebsites.net/",
    status: "ONGOING",
  },
  {
    title: "MTGN25 (mtgn.nu)",
    slug: "mtgn25",
    short_description: "The website used at the reception for new students in the Media Technology programme 2025.",
    description: "For the Media Technology reception in 2025, we used the foundation that we had created in 2024 to further improve the website. There were a lot of smaller issues that we had since last year that we improved upon, for example, the admin panel in which we would upload photos and the general look of the website.",
    contributions: `- Worked on Quiz page
                    - Fixed several bugs
                    - Improved styling
                    - Helped beginner developers`,
    image_header: "/projects/mtgn25/mtgn25.webp",
    image: "/projects/mtgn25/mtgn25-1.webp",
    tech: ["Next.js", "Tailwind CSS", "Firebase", "TypeScript", "React"],
    github: "https://github.com/blimpan/MTGN25",
    demo: "https://www.mtgn.nu/",
    status: "COMPLETED",
  },
  {
    title: "MTGN24 (mtgn.nu)",
    slug: "mtgn24",
    short_description: "The website used at the reception for new students in the Media Technology programme 2024.",
    description: "For the Media Technology reception in 2024, we were tasked with creating a new website from scratch. The website was supposed to be a tool for both the new students and the organisers, where pictures from events, schedules, and other important information would be available. We took at mobile-first approach and made sure that the website was responsive and easy to use on all devices and implemented all of the most necessary features. Since we updated this version of the website, the demo above leads to the 2025 version.",
    contributions: `- Implemented the student group page, where students could see their groups
                    - Implemented the organiser group page, where students could see us organisers
                    - Improved styling`,
    image_header: "/projects/mtgn24/mtgn24.webp",
    image: "",
    tech: ["Next.js", "Tailwind CSS", "Firebase", "TypeScript", "React"],
    github: "https://github.com/MediasMottagning/MTGN24",
    demo: "https://www.mtgn.nu/",
    status: "COMPLETED",
  },
];

export default projects;