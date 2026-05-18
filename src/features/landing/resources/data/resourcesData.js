import SpanishSection from "../components/SpanishSection";
import HistorySection from "../components/HistorySection";
import DonateSection from "../components/DonateSection";
import EndActSection from "../components/EndActSection";
import PRNewsSection from "../components/PRNewsSection";

const resourcesData = [
  {
    id: "learn-more-resources-pr",
    heading: "Learn More About the Island",
    link: "/resources",
    sections: [
      {
        id: "spanish",
        heading: "Brush Up on Your Spanish",
        link: "/resources",
        content: SpanishSection,
      },
      {
        id: "pr-history",
        heading: "Dive into Puerto Rican History",
        link: "/resources",
        content: HistorySection,
      },
    ],
  },
  {
    id: "support-pr",
    heading: "Support the Island",
    link: "/resources",
    sections: [
      {
        id: "donate",
        heading: "Donate to Puerto Rican Organizations",
        link: "/resources",
        content: DonateSection,
      },
      {
        id: "act-20-22-60",
        heading: "End Act-20-22-60",
        link: "/resources",
        content: EndActSection,
      },
      {
        id: "pr-news",
        heading: "Keep Up with Puerto Rican News",
        link: "/resources",
        content: PRNewsSection,
      },
    ],
  },
];

export default resourcesData;
