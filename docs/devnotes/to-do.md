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
    - [ ] Manage Explorers
    - [ ] Explorer Details
    - [ ] Edit Explorer Details
  - [ ] Profile
    - [x] Ambassador Profile
    - [ ] Edit Ambassador Profile
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

- [x] Create other pages
  - [x] Login page
  - [x] Sign-up page
    - [x] Explorer Signup
    - [x] Ambassador Signup
  - [x] Page 404 Not Found
  - [x] Error page

## Week: June 15 – June 19

- [~] Polish front-end framework
  - [x] Need to change navItem hover/active colors for Ambassador/Admin theme
  - [x] Add editing capability with useState on Profile components (i.e. email, password)
  - [x] Link buttons to navigate between pages
    - [x] Landing pages
    - [x] Explorer pages
    - [x] Ambassador pages
    - [x] Admin pages
  - [x] Change Login/Logout text based on logged-in user
  - [x] How to select avatar for profile
  - [x] Add "BACK" buttons to Explorations, Users pages
  - [x] Create ability to add TAGS to Explorations and Locations
  - [x] Edit sorting dropdown for ManageExplorers and ManageUsers
  - [x] Create a DeleteAccount modal window for when users want to delete their account
  - [x] Create auth-aware navigation shell to render background/layout based on (fake) user type
  - [x] Add all cities to City dropdown
  - [x] Location form in modal window?
  - [x] Change Logo shortcut based on user role
  - [x] Open badge collection via modal window in Explorer dashboard, instead of redirecting to Profile

## Week: June 22 – June 25

- [~] Polish front-end framework
  - [x] Define Profile info descriptions
    - [x] Explorer Info Titles
  - [x] Add functionality to Sorting dropdown
  - [x] Add functionality to Filter dropdown
  - [x] Implement pagination feature
  - [x] Need to add functionality to Edit/Delete (Locations) buttons on Create/Edit Exploration form
  - [x] Wire up Error, PageNotFound page buttons
  - [x] Add LocationTagBuilder to Create/Edit Location form
  - [x] Add Bubbles background to Error and PageNotFound page
  - [~] All inputs in forms should be controlled (validated client-side, show appropriate UI feedback) TODO 2
    - [x] Make sure all inputs are controlled with state
      - [ ] Configure Locations in Create/Edit Exploration later
    - [ ] Validate each form field before form is allowed to submit
    - [ ] Error messages display per field when validation fails
    - [ ] Display feedback in the UI
    - [ ] Disabled submit button until entire form is completed
    - [ ] Email format validated on login/signup/profile forms
    - [ ] Password strength validated on signup/profile forms
    - [ ] Add confirm password form field to signup/profile forms
    - [ ] Form action and method attributes point to correct REST endpoints
  - [ ] LocationBuilder/CurrentLocations should remove locations from list with "Delete" button
  - [ ] Refine routing and navigation
    - [ ] Should be no literal strings ":explorationId" in RouterLinks, all dynamic segments should use real values and ids
  - [ ] Prepare components to accept external data, instead of relying on internal, hard-coded false data TODO 3
    - [ ] All fake data shapes match MongoDB schema field names
    - [ ] Every action and loader in router has placeholder
    - [ ] Components use useLoaderData pattern instead of importing fake data directly
  - [ ] Images have fallback/placeholder when src is missing
  - [ ] Make website responsive
