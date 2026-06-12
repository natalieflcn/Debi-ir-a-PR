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
- [ ] Add Tio Tony's audios of saying PR phrases to "Brush Up Your Spanish"
- [~] Make sure the pages of the landing site are responsive for all devices
  - [x] Resources Page
  - [x] About Page
  - [x] How It Works Page
  - [x] Home Page
  - [ ] NOTE: Mobile navigation bar not responding well

- [x] NOTE: Turn off audio for panels while window is resizing

- [~] Create Explorer core static pages
  - [x] Explorer Dashboard page
  - [x] Explorations page
  - [x] Explorations/Exploration page (not yet started)
  - [x] Explorations/Exploration page (started)
  - [x] Explorations/Exploration/Location page

## Week: May 30 - June 7

- [x] Finish Explorer core static pages
  - [x] Profile page
    - [x] Implement Modal Window with changing Informational icons when user hovers over and clicks for more information on user title

- [~] Create Ambassador core static pages
  - [x] Dashboard
    - [ ] UserStats could contain reusable component
  - [~] Explorations
    - [x] ManageExplorations
      - [x] Separate 'View and Edit Exploration' button into two 'View' and 'Edit' buttons
      - [ ] Use useRef to close dropdown menus upon clicking outside of menus
    - [x] CreateExploration
    - [x] Exploration
    - [x] EditExplorationDetails
    - [x] CreateLocation
    - [x] ViewLocation
    - [x] EditExplorationLocationDetails
  - [ ] Users
    - [ ] Manage Explorers TODO
    - [ ] Explorer Details
    - [ ] Edit Explorer Details
  - [ ] Profile
    - [x] Ambassador Profile TODO 3
    - [ ] Edit Ambassador Profile TODO 4
- [x] Fix routing for Ambassador pages
- [x] Refactor current BrowserRouter implementation into CreateBrowserRouter
- [x] Create Input reusable component
- [x] Redesign ExplorationCard component to include Input component
- [x] Turn MiniExplorationCard into shared component
- [x] Implement MiniExplorationCard into AmbassadorExplorations page
- [~] Refactor shared components (between Explorers, Ambassador, and Admin) into /shared folders

- [ ] NOTE: Clean up function declarations for React components

## Week: June 7 – June 12

- [~] Explorations
  - [x] Use useRef to close dropdown menus upon clicking outside of menus
  - [x] CreateLocation
  - [x] EditExplorationLocationDetails
  - [x] Users
    - [x] Manage Explorers
    - [x] Explorer Details
  - [x] Profile
    - [x] Ambassador Profile
- [x] Fix routing for Ambassador pages

- [x] Create SuperAdmin core static pages (4-5 new pages)
  - [x] Dashboard
  - [x] Explorations
    - [x] ManageExplorations
    - [x] CreateExploration
    - [x] Exploration
    - [x] CreateLocation
    - [x] ViewLocation
  - [x] Users
    - [x] User Details
    - [x] Manage Users
  - [x] Profile
    - [x] Admin Profile

- [ ] Create other pages
  - [x] Login page
  - [x] Sign-up page
    - [x] Explorer Signup
    - [x] Ambassador Signup
  - [ ] Page 404 Not Found TODO 3
  - [ ] Error page TODO 4

- [ ] NOTE: Need to change navItem hover/active colors for Admin theme

- [ ] Add editing capability with useState on Profile components
- [ ] Link buttons to navigate between pages
- [ ] Change Login/Logout text based on logged-in user
- [ ] Add "BACK" buttons to Explorations, Users pages
- [ ] Create ability to add TAGS to Explorations and Locations
- [ ] Editing sorting dropdown for ManageExplorers and ManageUsers
