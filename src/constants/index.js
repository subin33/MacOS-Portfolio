const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Dec 15, 2025",
    title: "MacOS 스타일 멀티 윈도우 UI를 어떻게 설계했는가",
    image: "/images/blog1.png",
    link: "https://blog-kappa-woad-43.vercel.app/blog/macos-style-multi-window-ui",
  },
  {
    id: 2,
    date: "Dec 16, 2025",
    title: "Zustand로 윈도우 상태를 설계한 이유",
    image: "/images/blog2.png",
    link: "https://blog-kappa-woad-43.vercel.app/blog/zustand-multi-window-ui",
  },
  {
    id: 3,
    date: "Dec 17, 2025",
    title: "GSAP Draggable + React에서의 라이프사이클 이슈",
    image: "/images/blog3.png",
    link: "https://blog-kappa-woad-43.vercel.app/blog/gsap-react-lifecycle",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["Vue.js", "React", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["MySQL", "MariaDB", "MongoDB"],
  },
  {
    category: "Tools / Deployment",
    items: ["Git", "Notion", "Vercel", "Netlify"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/subin33",
  },
  // {
  //   id: 2,
  //   text: "Notion",
  //   icon: "/images/notion.png",
  //   bg: "#4bcb63",
  //   link: "https://wirehaired-dimple-7ea.notion.site/NohSubin-1cecfaa56dff808e8bbbea12f77a08ea",
  // },
  {
    id: 3,
    text: "Blog",
    icon: "/images/blog.png",
    bg: "#ff866b",
    link: "https://blog-kappa-woad-43.vercel.app/",
  },
  {
    id: 4,
    text: "Resume",
    icon: "/images/portfolio.png",
    bg: "#05b6f6",
    link: "https://portfolio-subin.my.canva.site/subin",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/temp1.png",
  },
  {
    id: 2,
    img: "/images/temp2.png",
  },
  {
    id: 3,
    img: "/images/temp3.png",
  },
  {
    id: 4,
    img: "/images/temp4.png",
  },
];

export { navLinks, navIcons, dockApps, blogPosts, techStack, socials, photosLinks, gallery };

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Garfield-Theme-Portfolio
    {
      id: 5,
      name: "Garfield-Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-38 left-5", // icon position inside Finder
      windowPosition: "top-[54vh] left-10", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Garfield-Portfolio.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "✨ Garfield Theme Portfolio",
            "This project offers navigation to the About, Experience, Projects, and Contact sections through four corner buttons.",
            "At the center, there's an animated Garfield character whose eyes shift based on the section the user clicks.",
            "It supports a dark mode and light mode toggle, and features a responsive design, making it accessible across various devices.",
            "🛠️ Tech Stack",
            " HTML5 / CSS3 / JavaScript",
          ],
        },
        {
          id: 2,
          name: "Garfield-Theme-Portfolio.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://2026-portfolio-eosin.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/subin33/2026-portfolio",
          position: "top-55 right-10",
        },
        {
          id: 4,
          name: "Garfield Theme Portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/garfield-portfolio.png",
        },
      ],
    },

    // ▶ JobNest
    {
      id: 6,
      name: "JobNest",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-33",
      windowPosition: "top-[18vh] left-15",
      children: [
        {
          id: 1,
          name: "JobNest.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "✨ JobNest",
            "Mobile-first job posting platform built with Vue 3 and Supabase. JobNest allows employers to post job listings and job seekers to find relevant positions.",
            "🛠️ Tech Stack",
            " Vue 3 / Vite / SCSS / Supabase ",
          ],
        },
        {
          id: 2,
          name: "JobNest.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://job-nest-4bq2zkvpc-subin-project.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/subin33/JobNest",
          position: "top-55 left-10",
        },
        {
          id: 4,
          name: "JobNest.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/jobnest.png",
        },
      ],
    },

    // ▶ Lean-Canvas
    {
      id: 7,
      name: "Lean-Canvas",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-61",
      windowPosition: "top-[30vh] left-13",
      children: [
        {
          id: 1,
          name: "Lean-Canvas.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "✨ Lean-Canvas",
            "Lean Canvas is a web application that helps startups and businesses systematically organize and manage their business models. Based on Ash Maurya's Lean Canvas framework, it provides a visual environment where you can organize 9 core elements and edit them in real-time.Mobile-first job posting platform built with Vue 3 and Supabase. JobNest allows employers to post job listings and job seekers to find relevant positions.",
            "🛠️ Tech Stack",
            " React / Vite / Tailwind CSS / Supabase ",
          ],
        },
        {
          id: 2,
          name: "Lean-Canvas.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://lean-canvas-sigma.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/subin33/lean-canvas",
          position: "top-55 right-10",
        },
        {
          id: 4,
          name: "Lean-Canvas.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/lean-canvas.png",
        },
      ],
    },

    // ▶ Game-Mini-Project
    {
      id: 8,
      name: "Game-Mini-Project",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-91",
      windowPosition: "top-[42vh] left-8",
      children: [
        {
          id: 1,
          name: "Game-Mini-Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-45 left-10",
          description: [
            "✨ Game-Mini-Project",
            "On a space-themed page, each project is visually presented within a single view, allowing quick and easy access. A modal-based quick View feature enables users to preview projects without navigating away from the page. The collection consists of a total of 10 projects, including a Tetris game, portfolio site, weather app, to-do list, mood journal, calculator, typing game, image puzzle, chat app, and a psychology test.",
            "🛠️ Tech Stack",
            " HTML5 / CSS3 / JavaScript",
          ],
        },
        {
          id: 2,
          name: "Game-Mini-Project.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://project-playground.netlify.app/pc/",
          position: "top-5 left-20",
        },
        // {
        //   id: 3,
        //   name: "github.com",
        //   icon: "/images/github.png",
        //   kind: "file",
        //   fileType: "url",
        //   href: "#",
        //   position: "bottom-15 right-35",
        // },
        {
          id: 4,
          name: "Game-Mini-Project.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-35 left-80",
          imageUrl: "/images/game-mini-project.png",
        },
      ],
    },

    // ▶ Wine-Bliss
    {
      id: 9,
      name: "Wine-Bliss",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-38 left-61",
      windowPosition: "top-[78vh] left-14",
      children: [
        {
          id: 1,
          name: "Wine-Bliss.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "✨ Wine-Bliss",
            "Mobile-first storefront for browsing, searching, and purchasing wines. This repository contains static HTML/CSS/JS pages and mockups to preview the mobile UI.",
            "🛠️ Tech Stack",
            " HTML5 / CSS3 / JavaScript",
          ],
        },
        {
          id: 2,
          name: "Wine-Bliss.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mobile-web-portfolio.netlify.app/mobile-mockup/single-view.html",
          position: "bottom-10 right-15",
        },
        {
          id: 3,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/subin33/Wine-Bliss-Mobile-Web-Publishing",
          position: "top-15 right-35",
        },
        {
          id: 4,
          name: "Wine-Bliss.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-57 right-95",
          imageUrl: "/images/wine-bliss.png",
        },
        {
          id: 5,
          name: "Wine-Bliss.fig",
          icon: "/images/figma.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/proto/7a9IsVd62yDmBLYw2YCDC1/Wine-Bliss?node-id=8-3&starting-point-node-id=8%3A2",
          position: "top-62 right-40",
        },
      ],
    },

    // ▶ Emotion-Diary
    {
      id: 10,
      name: "Emotion-Diary",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-38 left-33",
      windowPosition: "top-[66vh] left-11",
      children: [
        {
          id: 1,
          name: "Emotion-Diary.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "✨ Emotion-Diary",
            "Emotion Diary is a web application that allows users to record and manage their daily lives along with their emotions. Users can select their emotional state across five levels and write diary entries accordingly. Diaries can be viewed on a monthly basis, and detailed entries can be checked on individual diary pages. Users can also edit or delete their entries. In addition, the application is designed with a mobile-optimized layout for a smooth experience on mobile devices.",
            "🛠️ Tech Stack",
            " React / CSS / JavaScript / Vite",
          ],
        },
        {
          id: 2,
          name: "Emotion-Diary.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://emotion-diary-eta-two.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/subin33/Emotion-Diary",
          position: "top-55 right-10",
        },
        {
          id: 4,
          name: "Emotion-Diary.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/emotion-diary.png",
        },
      ],
    },

    // ▶ My Blog
    {
      id: 11,
      name: "My-Blog",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[6vh] left-14",
      children: [
        {
          id: 1,
          name: "My-Blog.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "✨ My-Blog",
            "It uses Notion as a CMS, allowing posts to be written and managed easily, while the website displays updated content in real time. The blog supports state management and infinite scrolling with React Query, and implements MDX-based Markdown rendering with automatic table of contents generation. Users can explore content through tag-based filtering and sorting options, and leave comments via the Giscus comment system. Performance is optimized through data validation with Zod and streaming rendering using Suspense.",
            "🛠️ Tech Stack",
            " Next / TypeScript / Tailwind CSS / Notion API",
          ],
        },
        {
          id: 2,
          name: "My-Blog.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://blog-kappa-woad-43.vercel.app/",
          position: "top-30 left-40",
        },
        // {
        //   id: 3,
        //   name: "github.com",
        //   icon: "/images/github.png",
        //   kind: "file",
        //   fileType: "url",
        //   href: "#",
        //   position: "top-55 left-10",
        // },
        {
          id: 4,
          name: "My-Blog.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-12 left-10",
          imageUrl: "/images/my-blog.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "coder's joke.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/joke-1.jpg",
    },
    {
      id: 2,
      name: "coder's meme.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/joke-2.jpg",
    },
    {
      id: 3,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      description: [
        "Hello 👋, I am a developer who values both user flow and data structure. I believe that building intuitive and stable structures for users is just as important as implementing features themselves. At my previous company, I worked for 1 year and 8 months maintaining services in a Vue-based SPA environment, focusing on role-based UI, state management, and performance optimization. Currently, I am expanding my skills through projects using React, Next.js, and TypeScript, with a focus on data flow, rendering architecture, caching strategies, and component design. Moving forward, I aim to grow as a developer who creates stable and scalable services while considering both user experience and overall service architecture.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      href: "/files/resume.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  archive: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
