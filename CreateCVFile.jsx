import { Document, Page, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { PersonalInfo, Summary, Skills, WorkExperience, Projects, Education, Languages, OtherSkills } from './Departments';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
});


const cvData = {
  personalInfo: {
    name: "Mahmoud - Abu Lail",
    phone: "+963 938 293 299",
    email: "mahmoudabulail1998@gmail.com",
    github: "https://github.com/MahmoudAboliel",
  },
  summary: "Computer and Automation Engineer with expertise in web application development, specializing in front-end design using React. Proficient in back-end basics, databases (SQL). Experienced in Django fundamentals, with a growing focus on AI, including training generative language models and data analysis. Additionally, knowledgeable in Windows application development using C#",
  workExperience:[
    {
      title: "Web developer (Freelancing Projects)",
      description: "Front-end: React",
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      department: "Faculty of Computer and automation Engineering",
      university: "Damascus University",
      year: "2017 - 2024",
      graduationProject: {
        title: "Native Bot: AI-Powered English Language Assistant",
        description: {
          desc: "Developed a smart AI-based assistant to help users practice English language skills and correct grammatical mistakes. The project focuses on creating an interactive and user-friendly experience through advanced AI capabilities. The system includes two additional features:",
          features: {
            "Retrieval-Augmented Generation (RAG)": "Enables the assistant to process and discuss user-provided text files, enhancing contextual understanding and dialogue.",
            "Agent Integration": "Empowers the assistant to determine whether internet access is needed to fetch additional information, ensuring efficient and relevant responses.",
          }
        },
        tools: [
          "Large Language Model (Llama-3) | Speech to Text (STT) | Text to Speech (TTS) | LangChain (RAG, Agent, Memory)",
          "Backend (Django)",
          "Frontend (Flutter)",
        ],
        gitHub: "https://github.com/MahmoudAboliel/Llama2_applications",
      }
    },
  ],
  projects: [
    {
      title: "iPhone Store",
      state: "(React, not official project)",
      description: "Developed a React-based iPhone store application featuring multiple sections, including a video display module that manages playback and seamless transitions using React hooks. The project also integrated GSAP Library for smooth and engaging animations. The primary objective was to enhance proficiency in React development, focusing on component architecture, hooks utilization, and dynamic user interactions.",
      github: "https://github.com/MahmoudAboliel/Apple_store_React_Project"
    },
    {
      title: "Cyborg",
      state: "(React, not official project)",
      description: "Developed a multi-page React website with structured sections and reusable components. The project emphasized component integration, seamless page linking.",
      github: "https://github.com/MahmoudAboliel/Cyborg_React_Project",
    },
    {
      title: "Sign Language Recognition",
      state: "(AI: CNN, University Project)",
      description: "Developed and trained a machine learning-based sign language recognition system using Laptop camera. Training a CNN model to classify gestures in real-time. Utilized TensorFlow for model training and OpenCV for image processing.",
      github: "https://github.com/MahmoudAboliel/SignLanguageRecognition",
    },
  ],
  skills: [
    "Web Development | HTML | CSS | JavaScript",
    "React framework | Bootsrap | Tailwind CSS",
    "Python | langChain framework | Flask",
    "Basic Django | MySQL",
    "Basic C#",
    "Git | GitHub"
  ],
  languages: {
    Arabic: "Native",
    English: "Good",
  },
  otherSkills: [
    "The ability to work with the team and carrying the pressures of work.",
    "Willingness to ask other for advice or help when solving a problem.",
    "The ability to continuous learning and development.",
    "Ability to work fairly and productively alongside others.",
    "Can work under pressure and with limited supervision.",
  ]
}

const MyDocument = () => {
  
  const {personalInfo, summary, workExperience, education, projects, skills, languages, otherSkills} = cvData;
  
  return (
    <Document>

      <Page size="A4" style={styles.page}>
        <PersonalInfo personalInfo={personalInfo} />
        <Summary summary={summary} />
        <Skills skills={skills} />
        <WorkExperience workExperience={workExperience} />
        <Projects projects={projects} />
      </Page>

      <Page size="A4" style={styles.page}>
        <Education education={education} />
        <Languages languages={languages} />
        <OtherSkills otherSkills={otherSkills} />
      </Page>
    </Document>
  );
};

// View PDF File
const ViewPDF = () => (
  <PDFViewer width="100%" height="90%">
    <MyDocument />
  </PDFViewer>
);

// Download PDF File
const DownloadLink =  () => (
    <PDFDownloadLink document={<MyDocument />} fileName={`CV-${cvData.personalInfo.name}.pdf`}>
        {({ blob, url, loading, error }) => 
            loading ? 'download': 'download pdf...'
        }
    </PDFDownloadLink>
);

export default ViewPDF;
export { DownloadLink };