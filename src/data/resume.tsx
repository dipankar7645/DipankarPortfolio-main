import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Dipankar Kumar",
  initials: "VB",
  url: "https://www.dipankarkumar.com/",
  location: "India",
  description:
    "Frontend Engineer who loves learning new tech and building clean, responsive, user-friendly web applications.",
  opentowork: "Open to work and available to join immediately.",
  avatarUrl: "/me.jpg",
  skills: [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind CSS",
    // "Next.js",
    // "TypeScript",
    "Redux Toolkit",
    // "Zustand",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    // "Supabase",
    "Git",
    "GitHub",
    // "Docker",
    "Postman",
    // "Socket.IO",
    // "WebRTC",
    "C/C++",
    "Java",
    "Python",
    "Data Structures",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dipankar-kumar-799026234/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Dipankar7645",
        icon: Icons.x,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dipankar7645",
        icon: Icons.github,
        navbar: true,
      },
      // Medium: {
      //   name: "Medium",
      //   url: "https://medium.com/@vardaanbhatia55",
      //   icon: Icons.medium,
      //   navbar: true,
      // },

      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/Dipankar76/",
        icon: Icons.leetcode,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ETMBikes",
      href: "https://etmbikes.com/",
      badges: [],
      location: "Patna, Remote",
      title: "Frontend Developer",
      logoUrl: "/ETMBikes.png",
      start: "January 2023",
      end: "July 2023",
      description:
        "Collaborated with the founder to develop the frontend for EtmBikes, focusing on creating a responsive, user-friendly UI with smooth animations and an intuitive layout.",
    },
    // {
    //   company: "Ai Soft Power",
    //   href: "https://www.aisoftpower.in",
    //   badges: [],
    //   location: "Remote",
    //   title: "Freelance Software Engineer",
    //   logoUrl: "/gloxi_logo.jpeg",
    //   start: "August 2023",
    //   end: "Present",
    //   description:
    //     "Developing and delivering AI-driven software solutions, focusing on scalable web applications and automation tools. ",
    // },
    // {
    //   company: "Wipro Technologies",
    //   href: "https://www.wipro.com/",
    //   badges: [],
    //   location: "Greater Noida",
    //   title: "Associate",
    //   logoUrl: "/wipro.png",
    //   start: "March 2022",
    //   end: "July 2023",
    //   description:
    //     "Contributed to the development of 'WiLearn,' Wipro's in-house Learning Management System (LMS), implementing key features like a customizable dashboard, interactive course catalog, and dynamic quiz module. Enhanced UI/UX and reduced page load times by 25%, boosting user engagement by 20%.",
    // },
  ],
  education: [
    {
      school: "Chandigarh University",
      href: "https://www.cuchd.in/",
      degree: "Master's in Computer Applications (MCA)",
      logoUrl: "/cuchd.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "COLLEGE OF COMMERCE, ARTS & SCIENCE, PATNA",
      href: "https://www.cocaspatna.ac.in/",
      degree: "Bachelor's in Computer Applications (BCA)",
      logoUrl: "/cocas.png",
      start: "2020",
      end: "2023",
    },
  ],
  certificates: [
    {
      title: "JavaScript",
      issuer: "Infosys Springboard",
      url: "https://drive.google.com/file/d/1wIcKGVSugCCH-xcJbdnt5O3PddfhUjkj/view?usp=sharing",
      date: "Feb 2024",
      logoUrl: "/infosys.jpg",
    },
    {
      title: "Programming using Java",
      issuer: "Infosys Springboard",
      url: "https://drive.google.com/file/d/1NBmTPddme44OCSbGx_Q26SOoBCzAGXmv/view?usp=sharing",
      date: "July 2024",
      logoUrl: "/infosys.jpg", // Add company logo image here
    },
    {
      title: "Angular",
      issuer: "Infosys Springboard",
      url: "https://drive.google.com/file/d/1BlMaOalmUnYkuNLV7ulDBVzhvpho0xeJ/view?usp=sharing",
      date: "Feb 2025",
      logoUrl: "/infosys.jpg", // Add AWS logo image here
    },

    {
      title: "Python 3 Programming",
      issuer: "University of Michigan-Coursera",
      url: "https://drive.google.com/file/d/13sLThMV_M6aR-gS-ar16MTBCEsEKBF5M/view?usp=sharing",
      date: "Sep 2023",
      logoUrl: "/coursera.jpg", // Add AWS logo image here
    },
    {
      title: "Learning ReactJS",
      issuer: "Infosys Springboard",
      url: "https://drive.google.com/file/d/1rFJO81cM_QGtxwNJzb69klCdMFDRhW_P/view?usp=sharing",
      date: "Nov 2023",
      logoUrl: "/infosys.jpg", // Add AWS logo image here
    },
  ],

  // Add your projects here
  // 1st project

  projects: [
    {
      title: "CraveCart",
      href: "https://melmate.vercel.app/",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "",
      technologies: [
        "React.js",
        "Javascript",
        "CSS",
        "Redux Toolkit",
        "React Router",
        
      ],
      links: [
        {
          type: "Live",
          href: "https://melmate.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dipankar7645/new-master",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/CraveCart.png",
    },

    // 2nd project

    {
      title: "Shoecouture",
      href: "https://shoe-couture-main.vercel.app/",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "A sleek sneaker e-commerce platform with filtering, sorting, and cart functionality for a seamless shopping experience.",
      technologies: [
        "React.js",
        "Javascript",
        "Redux Toolkit",
        "React Router",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Live",
          href: "https://shoe-couture-main.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dipankar7645/ShoeCouture-main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ShoesHub.png",
    },

    // 3rd project

    {
      title: "SavorStreet",
      href: "https://savor-street-main.vercel.app/",
      dates: "Aug 2024 - Present",
      active: true,
      description:
        "A restaurant website featuring menu browsing, order confirmation, and a smooth user experience for food lovers. ",
      technologies: [ "React.js", "TailwindCSS", ],
      links: [
        {
          type: "Live",
          href: "https://savor-street-main.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dipankar7645/SavorStreet-main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/FoodStreet.png",
    },

    //4th project

    {
      title: "Weather-App",
      href: "https://cloudpeek.netlify.app/",
      dates: "Sep 2024 - Present",
      active: true,
      description:
        "A sleek and user-friendly weather application that provides real-time weather updates for any city around the world. Built with a responsive design, it displays temperature, humidity, wind speed, and weather conditions using data from a live weather API.",
      technologies: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "WEATHER API",
        "WEATHER STACK API",
      ],
      links: [
        {
          type: "Live",
          href: "https://cloudpeek.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dipankar7645/Weather-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/WeatherApp.png",
    },

    // 5th project

    // {
    //   title: "MealMate",
    //   href: "https://mealmatebyvardaan.vercel.app/",
    //   dates: "July 2024 - Present",
    //   active: true,
    //   description:
    //     "MealMate is a smart food delivery app featuring real-time restaurant listings, customizable menus, and secure payments, enhanced with an AI help bot for personalized support. With location-based services and efficient cart management.",
    //   technologies: [
    //     "React.js",
    //     "Javascript",
    //     "Redux Toolkit",
    //     "Auth0",
    //     "SCSS",
    //     "OpenAI",
    //     "Razrorpay",
    //   ],
    //   links: [
    //     {
    //       type: "Live",
    //       href: "https://mealmatebyvardaan.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/vardaan-bhatia/MealMate",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/mealmate.jpg",
    // },

    // 6th project

    // {
    //   title: "Primetube",
    //   href: "https://primetube.netlify.app/",
    //   dates: "May 2024 - Present",
    //   active: true,
    //   description:
    //     "PrimeTube is an intuitive video streaming platform offering smooth playback, voice search, and secure payments for premium content. With AI assistance, responsive design, and organized channel browsing.",
    //   technologies: [
    //     "React.js",
    //     "Javascript",
    //     "TailwindCSS",
    //     "Material UI",
    //     "RapidAPI",
    //     "Razorpay",
    //   ],
    //   links: [
    //     {
    //       type: "Live",
    //       href: "https://primetube.netlify.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/vardaan-bhatia/PrimeTube",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/yt.jpg",
    // },
  ],
} as const;
