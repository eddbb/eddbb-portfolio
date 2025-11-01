const projects = [
  {
    title: "My Portfolio Website",
    slug: "portfolio",
    short_description: "A personal portfolio website to showcase my previous and ongoing projects.",
    description: "A personal portfolio built with Next.js and Tailwind. It features a clean and modern design, responsive layout, and showcases my projects, skills, and contact information. The website is optimized for both performance and adaptability.",
    contributions: `- Designed and developed the entire website`,
    image: "/projects/portfolio.webp",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/eddbb/eddbb-portfolio",
    demo: "https://yourportfolio.com",
    status: "Work in Progress",
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
    tech: ["Next.js", "Tailwind CSS", "Firebase", "TypeScript"],
    github: "https://github.com/blimpan/MTGN25",
    demo: "https://www.mtgn.nu/",
    status: "Completed",
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
    image: "/projects/mtgn24/mtgn24.webp",
    tech: ["Next.js", "Tailwind CSS", "Firebase", "TypeScript"],
    github: "https://github.com/MediasMottagning/MTGN24",
    demo: "https://www.mtgn.nu/",
    status: "Completed",
  },
];

export default projects;