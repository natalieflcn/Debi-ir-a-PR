# To Do List

## Week: April 14 – April 17

### Goals

- [x] Outline thought processes in devnotes
  - [x] (roadmap.md) Draft high-level roadmap for project
  - [x] (devnotes.md) Draft intended features and React concepts to implement into project

- [~] Complete Resources Page
  - [~] Decide how to improve UI/UX of current panel system of information
    - [ ] Design Idea?: Add a lizard crawling around sidebar
    - [ ] Design Idea?: Add ants crawling around panels
  - [x] Tighten up content on Resources page
  - [x] Replace LoadingFrame component with React Lite YouTube Embed library
  - [x] Smooth out opening/closing animation of panels
  - [x] External links should open in a separate page
  - [x] Add content to 'Brush Up on Your Spanish'
    - [x] Create Table reusable component
    - [x] Create content and draft ten Puerto Rican slang words/phrases
  - [x] If a panel is open, the panel heading should be highlighted as well

## Week: April 21 – April 27

### Goals

- [~] Refactor current codebase
  - [x] Revise file structure into feature-driven approach
  - [x] Convert static data from JSX into pure JSON and extract into separate JS files
    - [x] About page
    - [x] Resources page
  - [~] Extract all styling decisions from React components
    - [x] Note: Abstract Link styles into Button
  - [x] Extract font declarations into typography.css
  - [x] Extract animations into animations.css

### Additional Notes

- Use styles/themes folder for color palettes, spacing scales, typography scales, static configuration
- In the future, create a Theme Context/Provider to control dark/light mode switching, role-based color schemes, dynamic theming

## Week: April 27 – May 6

### Goals

- [ ] Organize all styled components
  - [ ] Keep styled components in component files for styles that won't get reused OR if style doesn't exceed 50 lines (i.e. layout wrappers)
  - [ ] Only have dedicated styled component files for complex files (+40 lines)
  - [ ] Adjust themes of styled components via props
  - [ ] Export component color palette/styling options into separate themes folder in styles (i.e. styles/themes/resourcesTheme.js)
  - [~] Create variants for reused styles and co-locate them in styled components files
  - [ ] Clean up all $css prop pattern in styled components, only expose intentional CSS properties of the component
  - [~] Delete unused fonts, add new typography options
  - [ ] Reassess current color palette, background overlays, and typography hierarchy
  - [x] Uninstall unused dependencies (i.e. React Markdown, Rehype Raw)
  - [ ] Rename files to reflect new user-role names and platform definitions (Explorers, Explorations, Ambassadors, Admin) TODO
  - [ ] Use the IntersectionObsever API to implement scrolling to panels
  - [ ] Refactor current React Router implementation into /router folder
- [~] Complete Resources Page
  - [ ] Incorporate use-sound hook to add sound of coquis when hovering over image in 'Donate to Puerto Rican Organizations'
  - [ ] Add Tio Tony's audios of saying PR phrases to "Brush Up Your Spanish"

- [ ] Complete current About Page
  - [ ] Draft mock-ups for panels
  - Note: Save 'Challenges and Solutions', 'Lessons Learned', and 'The Results' for the end of the project

- [ ] Review current UX/UI design and assess what can be improved
  - [ ] Fix styling on Panel/Sidebar headings to better emphasize the hierarchy between headings on page
  - [ ] Create drop-down menus for About and Resources nav items

- [ ] Add coding portfolio icon to footer

- [ ] Make sure the current pages of the landing site are responsive for all devices
  - [ ] Large devices (desktops)
  - [ ] Medium devices (tablets)
  - [ ] Small devices (phones)

- [ ] Draft mock-ups for the rest of the landing site
  - [ ] 'How It Works' page
  - [ ] 'Home' page
- [ ] Implement 'How It Works' page
- [ ] Implement 'Home' page
