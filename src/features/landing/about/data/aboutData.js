import ChallengesSection from "../components/ChallengesSection";
import KeyFeaturesSection from "../components/KeyFeaturesSection";
import LessonsSection from "../components/LessonsSection";
import MissionSection from "../components/MissionSection";
import MotivationSection from "../components/MotivationSection";
import TechStackSection from "../components/TechStackSection";
import TheResultsSection from "../components/TheResultsSection";

const aboutData = [
  {
    id: "about-debi-ir-a-pr",
    heading: "About Debí ir a Puerto Rico",
    link: "/about",
    sections: [
      {
        id: "mission",
        heading: "Mission",
        link: "/about",
        content: MissionSection,
      },
      {
        id: "key-features",
        heading: "Key Features",
        link: "/about",
        content: KeyFeaturesSection,
      },
      {
        id: "tech-stack",
        heading: "Tech Stack",
        link: "/about",
        content: TechStackSection,
      },
    ],
  },
  {
    id: "the-process",
    heading: "The Process",
    link: "/about",
    sections: [
      {
        id: "motivation",
        heading: "Motivation",
        link: "/about",
        content: MotivationSection,
      },
      {
        id: "challenges-and-solutions",
        heading: "Challenges and Solutions",
        link: "/about",
        content: ChallengesSection,
      },
      {
        id: "lessons-learned",
        heading: "Lessons Learned",
        link: "/about",
        content: LessonsSection,
      },
      {
        id: "the-results",
        heading: "The Results",
        link: "/about",
        content: TheResultsSection,
      },
    ],
  },
];

export default aboutData;
