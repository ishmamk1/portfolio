export const projects = [
  {
    id: "p1",
    title: "Musync",
    name: "musync",
    icon: "/images/icons/musync.png",
    iconSelected: "/images/icons/musync.png",
    iconAlt: "music icon",
    screenshots: [
      "musync-start.png",
      "musync-dashboard.png",
      "musync-recent.png",
      "musync-rec.png",
    ],
    type: "project",
    github: {
      client_link: "no-link",
      server_link: "no-link",
      general: "https://github.com/ishmamk1/musync",
    },
    published_at: "04/2024",
    techstack: ["flask", "tcss", "js"],
    libraries: ["Recharts", "Mongoose", "paperCSS", "sentiment analysis API"],
    description:
      "Musync is a python/flask webapp that utilizes the Spotify API to extract data about the user as well as generate a curated playlist towards the user's desired selection.",
    long_description:
      "Musync enables users to securely log in to their Spotify account using OAuth authentication, access their top artists and tracks, view recently played tracks with details such as title, artist, album, and image, generate personalized playlists based on user input including artist name and genre preferences, and gracefully handles errors, providing helpful error messages when encountering issues.",
  },
  {
    id: "p2",
    title: "Linktree Clone",
    name: "linktree-clone",
    icon: "/images/icons/ltc.png",
    iconSelected: "/images/icons/ltc.png",
    iconAlt: "Linktree Clone",
    screenshots: [
      "ltc-start.png",
      "ltc-login.png",
      "ltc-edit.png",
    ],
    type: "project",
    github: {
      client_link: "no-link",
      server_link: "no-link",
      general: "https://github.com/ishmamk1/linktreeClone",
    },
    published_at: "09/2023",
    techstack: ["flask", "tcss", "sqlite"],
    libraries: [""],
    description:
      "The link tree clone is a web application built with Flask, Tailwind CSS, and HTML, providing users with a streamlined way to showcase multiple links within a single page.",
    long_description:
      "It allows users to create a personalized landing page containing links to their various social media profiles, websites, or other online platforms, enhancing their online presence and simplifying navigation for visitors.",
  },
  {
    id: "p3",
    title: "CSCI-135 Guide",
    name: "CS135-Guide",
    icon: "/images/icons/cs135.png",
    iconSelected: "/images/icons/cs135.png",
    iconAlt: "Computer Science",
    screenshots: ["cs-dash.png", "cs1.png", "cs2.png", "cs3.png"],
    type: "project",
    github: {
      client_link: "no-link",
      server_link: "no-link",
      general: "https://github.com/ishmamk1/csci135guide",
    },
    published_at: "03/2024",
    techstack: ["js", "tcss"],
    libraries: [""],
    description:
      "This guide aims to provide learners with a solid understanding of C++ programming concepts, from basic syntax to advanced topics such as recursion and inheritance.",
    long_description:
      "This guide covers various topics including variables and arithmetic, input/output and conditionals, strings and arrays, loops, functions, pointers and dynamic memory allocation, classes and objects, inheritance, and recursion.",
  },
];
