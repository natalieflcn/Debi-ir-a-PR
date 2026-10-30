import ambassadorSignup from "../../../../assets/videos/ambassadorSignup.mp4";
import badgeCollection from "../../../../assets/videos/badgeCollection.mp4";
import createExploration from "../../../../assets/videos/createExploration.mp4";
import dashboardAnalytics from "../../../../assets/videos/dashboardAnalytics.mp4";
import explorations from "../../../../assets/videos/explorations.mp4";
import explorerSignup from "../../../../assets/videos/explorerSignup.mp4";
import trackProgress from "../../../../assets/videos/trackProgress.mp4";

const workflowData = [
  {
    id: "for-explorers",
    heading: "For Explorers",
    cardColor: `blue`,
    tagline: "Discover Puerto Rico beyond the Expedia tours",
    description:
      "As an Explorer, you'll uncover hidden gems, support local businesses, and earn badges as you go.",
    sections: [
      {
        id: 1,
        heading: "Sign Up",
        description: [
          "Create a free account to get started.",
          " It only takes a minute — and your adventure begins the moment you sign up.",
        ],
        cardImage: `url("src/assets/images/content/Step-0-1.png")`,
        demo: explorerSignup,
      },
      {
        id: 2,
        heading: "Explore the Island",
        description: [
          "Browse curated explorations across the island.",
          "Discover spots by town, find adventures near you, or explore themed journeys inspired by Puerto Rican culture, history, and art.",
        ],
        cardImage: "",
        demo: explorations,
      },
      {
        id: 3,
        heading: "Track Your Progress",
        description: [
          "As you visit each location, mark it complete and watch your progress grow.",
          "Every check-in brings you one step closer to finishing the exploration.",
        ],
        cardImage: "",
        demo: trackProgress,
      },
      {
        id: 4,
        heading: "Collect Badges",
        description: [
          "Complete an exploration to earn a badge!",
          "Show off your collection on your profile and see how much of the island you've truly experienced.",
        ],
        cardImage: "",
        demo: badgeCollection,
      },
    ],
    CTA: {
      description: "Your next adventure is waiting",
      primaryLink: { label: "Create Account", href: "/signup/explorer" },
      secondaryLink: { label: "Log In", href: "/login" },
    },
  },
  {
    id: "for-ambassadors",
    heading: "For Ambassadors",
    cardColor: `red`,
    tagline: "Share Your Love For Puerto Rico",
    description: [
      "As an Ambassador, you'll shape how the world experiences the island — putting your favorite spots on the map for thousands of Explorers.",
    ],
    sections: [
      {
        id: 1,
        heading: "Join our Team",
        description: [
          "To become an Ambassador, reach out to our team to request an account.",
          "We'll get you set up and ready to start building explorations.",
        ],
        cardImage: "",
        demo: ambassadorSignup,
      },
      {
        id: 2,
        heading: "Curate Explorations",
        description: [
          "Design explorations around the places you love and the places that deserve more love.",
          "Invite people to your favorite restaurants, scenic landscapes, cultural landmarks, local bars, hidden beaches, and everything in between.",
        ],
        cardImage: "",
        demo: createExploration,
      },
      {
        id: 3,
        heading: "Witness Your Impact",
        description: [
          "Watch in real time as Explorers discover your favorite spots.",
          "See which locations are getting the most visits and grow your impact across the island.",
        ],
        cardImage: "",
        demo: dashboardAnalytics,
      },
    ],
    CTA: {
      description: "Help People Love Puerto Rico in the Right Places",
      primaryLink: { label: "Create Account", href: "/signup/ambassador" },
      secondaryLink: { label: "Log In", href: "/login" },
    },
  },
];

export default workflowData;
