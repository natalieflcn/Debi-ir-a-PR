import TearPaper from "../../assets/audios/TearPaper.mp3";
import ScrapPaper from "../../assets/images/ui/ScrapPaper.png";

export const AboutTheme = {
  headingColor: `var(--color-red-200)`,
  headingShadow: `var(--color-brown-400)`,

  panelBackground: `url(${ScrapPaper})`,
  panelBoxShadow: `var(--color-dark-200)`,
  panelBoxHoverColor: `var(--color-brown-100)`,
  panelBoxHoverShadow: `var(--color-yellow-300)`,

  panelHeadingColor: `var(--color-red-300)`,
  panelHeadingShadow: `none`,
  panelHeadingHoverColor: `var(--color-red-200)`,
  panelHeadingHoverShadow: `var(--color-brown-400)`,
  panelTextColor: `var(--color-dark-200)`,

  panelButtonVariation: "scrapPaper",
  panelActiveButtonVariation: "scrapPaperInverted",
  sidebarBackground: `url(${ScrapPaper})`,
  sidebarShadow: `var(--color-brown-300)`,
  sidebarHeadingColor: `var(--color-red-300)`,
  sidebarHeadingShadow: `none`,
  sidebarHeadingHoverColor: `var(--color-red-200)`,
  sidebarHeadingHoverShadow: `var(--color-brown-400)`,
  sidebarMenuItemBorder: `var(--color-red-300)`,
  sidebarMenuItemColor: `var(--color-red-300)`,
  sidebarMenuItemHoverColor: `var(--color-red-200)`,
  sidebarMenuItemHoverShadow: `none`,
  sidebarMenuItemBorderHover: `var(--color-red-200)`,
  sidebarMenuItemActiveColor: `var(--color-red-200)`,
  sidebarMenuItemBorderActive: `var(--color-red-200)`,

  cardBackground: `url(${ScrapPaper})`,
  imageShadow: `var(--box-shadow-lg) var(--color-brown-400)`,

  buttonAudio: TearPaper,
};
