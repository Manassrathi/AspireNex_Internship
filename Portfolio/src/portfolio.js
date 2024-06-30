import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Manas Rathi",
  title: "Hi all, I'm Manas Rathi",
  subTitle: emoji(
    "I'm a passionate Full Stack Developer who loves diving into complex problems and crafting innovative solutions. My journey in the tech world began with a profound fascination for building applications that make a difference."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1O-4hPQcCX0uTm0pyFnPOn_EW-61Y2-jz/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Manassrathi",
  linkedin: "https://www.linkedin.com/in/manas-rathi-72673b22a/",
  gmail: "2021kucp1037@iiitkota.ac.in",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full-Stack Web Developer Crafting Efficient and Scalable Solutions.",
  skills: [
    emoji(
      "🌐 Experienced in front-end development with HTML, CSS, JavaScript, and various frameworks like React.js, Redux, Typescript."
    ),
    emoji("💻 Proficient in back-end development using Node.js, Mongoose, Express.js."),
    emoji(
      "⚡ Constantly learning and exploring new technologies to stay updated in the ever-evolving tech landscape."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Information Technology, Kota",
      logo: require("./assets/images/iiit_kota_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2021 - June 2025",
      desc: "Currently in my final year of B.Tech in CSE with a current CGPA of 7.90 until 6th Semester.",
      descBullets: [
        "Coursework: Database Management Systems, Operating System, Software Engineering, Computer Architecture and Organisation, Computer Networks, Machine Learning, Artficial Intelligence, Object Oriented Programing."
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Cograd",
      companylogo: require("./assets/images/Cograd_logo.png"),
      date: "March 2024 – June 2024",
      desc: "Cograd is an ed-tech startup under Supervision Educare Pvt. Ltd. with the vision of spreading innovation and creativity among the school students. Cograd is a government recognised well-established startup that is missiondriven to establish quality schools in untouched parts of India, that is, tier-3 cities and villages.",
      descBullets: [
        "Worked on Job Portal of Cograd Official Website connecting applicants and recruiters offering seamless communication for employment opportunities."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of my Personal Projects built using MERN Stack Technologies",
  projects: [
    {
      image: require("./assets/images/studynotion.png"),
      projectName: "StudyNotion",
      projectDesc: "EdTech Platform for Students and Instructors. StudyNotion is an innovative EdTech platform where instructors can upload their courses and track their progress.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://study-notion-frontend-mu-two.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/crown_logo.png"),
      projectName: "Crown Clothing",
      projectDesc: "E-commerce full-stack website built using React and Redux. Responsive User Interface,Intuitive Navigation,Dynamic Product Listings, User Accounts, A userfriendly Shopping Cart system.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://crown-clothing-mocha.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Data Structures and Algorithms",
      subtitle:
        "Solved more than 400 DSA Questions on various coding platforms such as Leetcode, GeeksforGeeks, Coding Ninjas etc.",
      image: require("./assets/images/leetcode_logo.webp"),
      imageAlt: "Leetcode Logo",
      footerLink: [
        {
          name: "Profile",
          url: "https://leetcode.com/u/manasrathi/"
        },
      ]
    },
    {
      title: "Web Development Bootcamp",
      subtitle:
        "Complete Web Development Bootcamp Course by Dr. Angela Yu on Udemy.",
      image: require("./assets/images/udemy_logo.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "View Udemy Certification",
          url: "https://www.udemy.com/certificate/UC-85cd75e1-1b79-40fa-b15e-1a3143668e7d/"
        }
      ]
    },

    {
      title: "Machine Learning and Data Science Bootcamp",
      subtitle: "Completed Machine Learning and Data Science Bootcamp by Zero to Mastery on Udemy.",
      image: require("./assets/images/udemy_logo.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-17971782-0021-4cb0-b9bf-5c5ac2651b0d/"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7016297230",
  email_address: "2021kucp1037@iiitkota.ac.in"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
