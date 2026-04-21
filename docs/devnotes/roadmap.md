# Debí ir a PR

## Mission

To provide a platform that connects both tourists AND locals to Puerto Rican treasures – iconic monuments, local food businesses, popular excursions, and lively clubs!

---

## User Groups

- **Non-Users**: Users visiting the site, learning more about the platform and Puerto Rico, but have yet to create an account.
- **Explorers**: Users with an 'Explorer' account, ready to take on 'explorations' around Puerto Rico, collecting a badge per each exploration.
- **Staff**: Users with a 'Staff' account, managing all explorations, Explorer user accounts, and capable of viewing statistics on the platform performance.
- **Admin**: User with an 'Admin' account, capable of viewing statistics on the platform performance, and managing all users (Explorers and Staff).

---

## Objectives

- Build a responsive React frontend with reusable components and state management using React Hooks and API-driven data flow
- Implement secure authentication and role-based authorization (Explorer, Staff, Admin) to control access to platform features
- Ensure real-time consistency of user data and permissions across Explorer, Staff, and Admin roles through API-driven state updates
- Design and manage a MongoDB database using Mongoose schemas and relationships to support users, explorations, and achievements
- Build a RESTful API using Node.js and Express to power all frontend interactions and maintain clear separation of concerns
- Integrate the Google Maps API to display explorations using geolocation, markers, and interactive InfoWindows
- Ensure consistent data flow across all user roles through centralized backend logic and API synchronization
- Create a gamification system where users earn badges upon completing explorations to increase engagement and retention
- Develop a responsive UX/UI inspired by Puerto Rican culture using styled-components for modular styling
- Structured using modular architecture (controllers, services, routes) to support scalability and long-term maintainability

---

## Milestones

### Phase 1: Frontend Foundation (React)

- [x] App structure & setup
- [~] Create the landing page for the platfotm
- [ ] Build core pages (UI only with static data)
- [ ] Implement routing with React Router
- [ ] Develop a reusable component system
- [ ] Use styled components to build a responsive design influenced by Puerto Rican aesthetics

### Phase 2: Backend Foundation (Node + Express)

- [ ] Set up server
- [ ] Create MongoDB models
- [ ] Build RESTful API routes

### Phase 3: Authentication and Authorization

- [ ] Create Auth system
- [ ] Implement middleware to protect routes and restrict access
- [ ] Connect to frontend

### Phase 4: Connect frontend to backend

- [ ] Create an API layer
- [ ] Replace static data with real-time backend data
- [ ] Error handling

### Phase 5: Role-Based UI

- [ ] Polish Explorer user experience
- [ ] Polish Staff user experience
- [ ] Polish Admin user experience

### Phase 6: Advanced Features

- [ ] Show tour locations with Google Maps API
- [ ] Reviews and ratings for tours
- [ ] Image uploads for tours
- [ ] Email system

### Phase 7: Testing and Polish

- [ ] Test auth flows
- [ ] Test CRUD opeartions
- [ ] Test protected routes

- [ ] Polish production version
  - [ ] Refactor front-end code for reusability and readability
  - [ ] Remove console.logs
  - [ ] Clean API responses
  - [ ] Handle erros gracefully
  - [ ] Optimize performance
  - [ ] Ensure mobile responsiveness
- [ ] Conduct user testing and gather feedback

### Phase 8: Deployment

- [ ] Frontend: Netlify
- [ ] Backend: Heroku
- [ ] Database: MongoDB Atlas

---

## Additional Notes
