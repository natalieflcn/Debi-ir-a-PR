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

- [x] Organize all styled components
  - [x] Keep styled components in component files for styles that won't get reused OR if style doesn't exceed 50 lines (i.e. layout wrappers)
  - [x] Only have dedicated styled component files for complex files (+40 lines)
  - [x] Adjust themes of styled components via props
  - [x] Export component color palette/styling options into separate themes folder in styles (i.e. styles/themes/resourcesTheme.js)
  - [x] Create variants for reused styles and co-locate them in styled components files
  - [x] Clean up all $css prop pattern in styled components, only expose intentional CSS properties of the component
- [x] Delete unused fonts
- [x] Reassess current color palette, background overlays, and typography hierarchy
- [x] Uninstall unused dependencies (i.e. React Markdown, Rehype Raw)

- [x] Review current UX/UI design and assess what can be improved
  - [x] Fix styling on Panel/Sidebar headings to better emphasize the hierarchy between headings on page

- [x] Add coding portfolio icon to footer

- [~] Implement the rest of the landing site
  - [x] 'How It Works' page
  - [~] 'Home' page

## Week: May 11 – May 15

- [x] Rename files to reflect new user-role names and platform definitions (Explorers, Explorations, Ambassadors, Admin)
- [x] Refactor current React Router implementation into /router folder

- [~] Complete Resources Page
  - [x] Add sound of coquis when hovering over image in 'Donate to Puerto Rican Organizations'
  - [x] Leaves rustling when panel opens on Resources

- [~] Complete current About Page
  - [x] Draft mock-ups for panels
  - Note: Save 'Challenges and Solutions', 'Lessons Learned', and 'The Results' for the end of the project
  - [x] Paper crumbling sound when panel opens on About

- [x] Implement the rest of the landing site
  - [x] 'How It Works' page
    - [x] Refactor Workflow.jsx into sub-components
  - [x] 'Home' page

## Week: May 16 – May 25

- [x] Fix Panel & PanelGroup scrolling implementation
- [ ] Add Tio Tony's audios of saying PR phrases to "Brush Up Your Spanish" TODO 2
- [ ] Make sure the pages of the landing site are responsive for all devices TODO 3
  - [x] Resources Page
  - [x] About Page
  - [x] How It Works Page
  - [x] Home Page
  - [ ] NOTE: Mobile navigation bar not responding well

- [x] NOTE: Turn off audio for panels while window is resizing

- [ ] Create Explorer core static pages TODO finish today
  - [x] Explorer Dashboard page
  - [x] Explorations page
  - [~] Explorations/Exploration page (not yet started)
  - [ ] Explorations/Exploration page (started)
  - [ ] Explorations/Exploration/Location page
  - [ ] Profile page

- [ ] Create Ambassador core static pages
- [ ] Create SuperAdmin core static pages
