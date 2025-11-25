import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// This is the one-file React app for Trisha Raj's portfolio.
// It uses functional components and hooks.
// All components, styling (via Tailwind CSS), and logic are self-contained.

// Icon Components
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.21c2.45-.75 5.2-1.8 5.2-5.75A3.8 3.8 0 0 0 17 6.4a3.5 3.5 0 0 0 .15-2.61s-.72-.21-2.2.86a11.5 11.5 0 0 0-5.45 0c-1.48-1.07-2.2-.86-2.2-.86A3.5 3.5 0 0 0 7 6.4a3.8 3.8 0 0 0-1.9 3.4c0 3.95 2.75 5 5.2 5.75A4.8 4.8 0 0 0 9 18v4" />
    <path d="M9 18h6" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-linkedin"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.2 14.8c-.8.8-1.8.8-2.6 0l-4-4c-.8-.8-.8-1.8 0-2.6l4-4c.8-.8 1.8-.8 2.6 0l4 4c.8.8.8 1.8 0 2.6l-4 4z" />
  </svg>
);


const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-download"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-link"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-mail"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// Framer Motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    rotate: [0, 1, -1, 0],
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '4px 4px 0 #000',
    y: -4,
    x: -4,
  },
  tap: { scale: 0.95, boxShadow: '0 0 0 #000', y: 0, x: 0 },
};

const App = () => {
  return (
    <div className={`font-sans antialiased text-gray-900 bg-paper-texture transition-colors duration-500`}>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&family=Anonymous+Pro:wght@400;700&display=swap');
        
        .font-sans {
          font-family: 'Anonymous Pro', monospace;
        }

        .font-serif {
          font-family: 'Shadows Into Light', cursive;
        }
        
        .sketch-border {
          border: 2px solid #333;
          border-radius: 8px;
          position: relative;
        }
        
        .sketch-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 2px dashed #000;
          border-radius: 10px;
          pointer-events: none;
          animation: sketch-in 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        
        @keyframes sketch-in {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .sketch-underline {
            position: relative;
        }
        
        .sketch-underline::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 100%;
            height: 3px;
            background: repeating-linear-gradient(45deg, #000, #000 3px, transparent 3px, transparent 6px);
            opacity: 0;
            transform: scaleX(0);
            transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .sketch-underline:hover::after {
            transform: scaleX(1);
            opacity: 1;
        }

        .hover-scribble {
            position: relative;
        }

        .hover-scribble::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0,50 Q25,25 50,50 T100,50' stroke='%23f9d423' stroke-width='4' fill='none' /%3E%3C/svg%3E") repeat;
            background-size: 50px;
            opacity: 0;
            transform: scale(0.9);
            transition: all 0.2s ease-in-out;
        }

        .hover-scribble:hover::before {
            opacity: 1;
            transform: scale(1);
            animation: scribble 1s infinite linear;
        }

        @keyframes scribble {
            from { background-position: 0 0; }
            to { background-position: 100% 100%; }
        }

        .bg-paper-texture {
          background-color: #f7f4e9;
          background-image: radial-gradient(#d3c9b7 1px, transparent 1px), radial-gradient(#d3c9b7 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: 0 0, 10px 10px;
        }

        .timeline-line {
          position: absolute;
          left: 14px;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #333;
          border-left: 2px dashed #333;
        }

        .timeline-dot {
          position: absolute;
          left: 8px;
          width: 12px;
          height: 12px;
          background-color: #333;
          border-radius: 50%;
        }
        `}
      </style>
      <div className="min-h-screen flex flex-col items-center p-4 md:p-8 relative">
        {/* Updated Header for Mobile Responsiveness */}
        <header className="w-full flex justify-end items-center mb-12">
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-bold uppercase">
              {['education', 'skills', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="hover:text-red-500 hover:scale-110 transition-transform duration-300"
                >
                  {section}
                </a>
              ))}
            </ul>
          </nav>
        </header>

        {/* Main Content Container with Fluid Width on Mobile */}
        <main className="w-full max-w-screen-xl mx-auto space-y-12 md:space-y-24">
          {/* Hero Section */}
          <motion.section
            id="hero"
            className="w-full flex flex-col justify-center items-start text-left py-16"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Trisha Raj
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 font-sans"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              B.Tech CSE Student | Aspiring Software Developer
            </motion.p>
            <motion.p
              className="text-sm sm:text-base md:text-lg max-w-2xl mb-8 font-sans"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I’m a passionate Computer Science student at SRMIST (Ghaziabad, Delhi NCR Campus, Class of 2027)
              with a strong interest in Data Structures & Algorithms, Web Development, and DevOps. I enjoy solving
              problems, building impactful projects, and participating in hackathons.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://linkedin.com/in/trisha-raj-06a61a281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-semibold border-2 border-black bg-white text-black shadow-sketch transition-all duration-300 flex items-center gap-2 text-sm md:text-base rounded-md"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <LinkedinIcon /> LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/trisharaj11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-semibold border-2 border-black bg-white text-black shadow-sketch transition-all duration-300 flex items-center gap-2 text-sm md:text-base rounded-md"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <GitHubIcon /> GitHub
                </motion.a>
                <motion.a
                  href="https://leetcode.com/u/TRISHA_RAJ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-semibold border-2 border-black bg-white text-black shadow-sketch transition-all duration-300 flex items-center gap-2 text-sm md:text-base rounded-md"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <LeetCodeIcon /> LeetCode
                </motion.a>
                <motion.a
                  href="https://drive.google.com/file/d/11SyVfoOTIuAw9CumV3H_P309oX-kJQ-C/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-semibold border-2 border-black bg-white text-black shadow-sketch transition-all duration-300 flex items-center gap-2 text-sm md:text-base rounded-md"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <DownloadIcon /> Download Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.section>

          {/* Education Section */}
          <Section title="Education" id="education">
            <div className="relative pl-6 md:pl-8 lg:pl-12">
              <div className="timeline-line"></div>
              <TimelineItem
                title="SRMIST Ghaziabad"
                period="2023–2027"
                description="B.Tech in Computer Science & Engineering | CGPA: 9.78"
              />
              <TimelineItem
                title="Army Public School Ranchi"
                period="2023"
                description="Intermediate PCM | Percentage: 85%"
              />
              <TimelineItem
                title="Army Public School Ranchi"
                period="2021"
                description="Matriculation | Percentage: 86.5%"
              />
            </div>
          </Section>
{/* Skills Section */}
<Section title="Skills" id="skills">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

    <SkillCategory 
      title="Programming Languages" 
      skills={['Python', 'C++', 'JavaScript']} 
    />

    <SkillCategory 
      title="Data Science" 
      skills={['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']} 
    />

    <SkillCategory 
      title="Data Visualization" 
      skills={['Power BI', 'Advanced Excel']} 
    />

    <SkillCategory 
      title="Web Development" 
      skills={['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'HTML', 'CSS']} 
    />

    <SkillCategory 
      title="Databases & Querying" 
      skills={['SQL', 'MongoDB', 'Mongoose']} 
    />

    <SkillCategory 
      title="Developer Tools" 
      skills={['Git', 'GitHub', 'Docker', 'Postman', 'Cloudinary']} 
    />

    <SkillCategory 
      title="CS Fundamentals" 
      skills={['DSA', 'OOP', 'DBMS', 'OS', 'DAA', 'CN']} 
    />

  </div>
</Section>


        <Section title="Projects" id="projects">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

    <ProjectCard
      title="CryptoPrice"
      description="React, CoinGecko API, React Google Charts"
      githubLink="https://github.com/trisharaj11/cryptoprice"
      liveLink="https://cryptoprice-beta.vercel.app/"
    />

    <ProjectCard
      title="Job Portal"
      description="MERN App with Recruiter/Applicant dashboards, Clerk auth, Sentry monitoring"
      githubLink="https://github.com/trisharaj11/job-portal"
      liveLink="https://job-portal-job.vercel.app/"
    />

     <ProjectCard
      title="Smart India Hackathon (SIH) 2025 – Career & Education Advisor"
      description="Built complete frontend (React + Tailwind) for aptitude quiz, course-to-career mapper, dashboards & college search. Qualified institute-level round."
      githubLink="https://github.com/trisharaj11/vidyaraaenmitra" 
      liveLink="https://vidyaraaenmitra.vercel.app/auth"
    />

    <ProjectCard
      title="E-Commerce Sales Analytics Dashboard"
      description="Interactive Power BI dashboard analyzing Q1–Q4 sales, pricing trends & KPIs using Power Query and advanced visuals."
    />

    <ProjectCard
      title="Netflix Data Analysis – Python EDA"
      description="Performed full EDA on 8,000+ Netflix titles. Cleaned dataset, extracted features, and created matplotlib visualizations for content & trend insights."
      githubLink="https://github.com/trisharaj11/netflix-data-analysis"
      liveLink=""
    />

  </div>
</Section>


          {/* Experience Section */}
          <Section title="Experience" id="experience">
            <div className="relative pl-6 md:pl-8 lg:pl-12">
              <div className="timeline-line"></div>
              <TimelineItem
                title="IT Trainee – Digital Literacy Program"
                period="DDU-GKY, 2025"
                description="Conducted training sessions for rural youth on digital literacy (MS Office, internet, online safety). Improved communication and teaching skills."
              />
            </div>
          </Section>

          {/* Achievements Section */}
          <Section title="Achievements" id="achievements">
            <ul className="list-disc list-inside space-y-4">
              <motion.li variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="sketch-border p-4">
                Top 25 out of 4000 teams – CODE4CAUSE 2.0 Hackathon (NSUT Delhi).
              </motion.li>
              <motion.li variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="sketch-border p-4">
                Cleared Adobe Hackathon Round 1 & built a Dockerized NLP pipeline in Round 2.
              </motion.li>
              <motion.li variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="sketch-border p-4">
                Consistently high CGPA (9.78).
              </motion.li>
              <motion.li variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="sketch-border p-4">
                GeeksforGeeks SRMIST – Social Media Lead.
              </motion.li>
              <motion.li variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="sketch-border p-4">
                NSS (National Service Service) – OC Member & Content Writing Co-Lead.
              </motion.li>
            </ul>
          </Section>

          {/* Contact Section */}
          <Section title="Contact" id="contact">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-lg">
              <motion.a
                href="mailto:rajtrisha1103@gmail.com"
                className="flex items-center gap-2 hover:text-red-500 transition-colors duration-300 sketch-underline"
                whileHover={{ scale: 1.1 }}
              >
                <EmailIcon /> rajtrisha1103@gmail.com
              </motion.a>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
};

// Reusable Section Component with animations
const Section = ({ title, id, children }) => {
  return (
    <motion.section
      id={id}
      className="w-full py-16 md:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold font-serif text-center mb-10 sketch-underline">
        {title}
      </h2>
      <div className="flex flex-col items-center">
        {children}
      </div>
    </motion.section>
  );
};

// Reusable Timeline Item Component
const TimelineItem = ({ title, period, description }) => (
  <motion.div
    className="relative pl-8 md:pl-10 lg:pl-14 pb-12"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="absolute top-1 left-0 timeline-dot"></div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm italic mb-2 text-gray-600">{period}</p>
    <p className="text-base text-gray-800 font-sans">{description}</p>
  </motion.div>
);

// Reusable Skill Category Component
const SkillCategory = ({ title, skills }) => (
  <div className="flex flex-col items-center sm:items-start w-full">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap justify-center sm:justify-start gap-3">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          className="px-4 py-2 font-medium cursor-default sketch-border hover-scribble"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

// Reusable Project Card Component
const ProjectCard = ({ title, description, githubLink, liveLink }) => {
  return (
    <motion.div
      className="sketch-border p-6 flex flex-col justify-between"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
    >
      <div className="mb-4">
        <div className="w-full h-40 bg-gray-300 sketch-border flex items-center justify-center relative mb-4">
          <span className="text-xl sm:text-2xl font-bold font-serif text-gray-800">{title}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 font-sans">{description}</p>
      </div>
      <div className="flex gap-4">
        <motion.a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-red-500 transition-colors flex items-center gap-2 sketch-underline"
          whileHover={{ scale: 1.1 }}
        >
          <GitHubIcon /> GitHub
        </motion.a>
        {liveLink && (
          <motion.a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-red-500 transition-colors flex items-center gap-2 sketch-underline"
            whileHover={{ scale: 1.1 }}
          >
            <LinkIcon /> Live
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default App;
