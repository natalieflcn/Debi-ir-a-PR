# Debí ir a Puerto Rico

Debí ir a Puerto Rico (diapr) is a gamified tourism app designed to help people experience the best parts of Puerto Rico. Explorers can find the best way to experience the island and Ambassadors can curate personal explorations to promote local businesses and their favorite parts of the island.

**Live site:** https://diapr.org

> Note: the API runs on a free Render instance, so the first request after
> a quiet period can take 30–60 seconds while the server wakes up.

## Key Features

As an Explorer:

- **Exploration Database, Live Search, and Filtering:** Explorers can browse curated explorations, filter them by their name, number of stops, or category
- **Monitor Exploration Progress:** Explorers can track their progress, noting which locations they've visited
- **Earn Explorer Badges:** Explorers can earn badges after completing an exploration, building a badge collection

As an Ambassador:

- **Curate Personalized Explorations:** Ambassadors can create explorations, highlighting their favorite locations on the island
- **Review Dashboard Analytics:** Ambassadors can monitor explorer activity, understanding which trends are the most popular amongst the community
- **Promote Select Explorations:** Ambassadors can feature a selection of explorations, bringing them to the forefront of the community

As an Admin:

- **Manage All Users:** Admins can manage Explorers, Ambassadors, and their respective profile data
- **Promoting Ambassadors:** Admins can promote Ambassadors to an Admin role

## Engineering Highlights

- **Tracking Exploration Progress:** Used React Query to cache exploration progress data and refetch exploration data upon exploration progress updates, keeping UI in sync with exploration completion

- **Role-Based Access:** Configured Express server to send JWT to client in httpOnly cookies to log users in, with route protection on both client and server for Explorer, Ambassador, and Admin roles

- **Google Maps and Geocoding API:** Used Google Maps API and Geocoding API to render individual maps for locations, as well as rendering exploration maps that summarizes all respective location map markers

- **Signed Image Uploads:** Image uploads only reach the server for signature, before being uploaded directly from client to Cloudinary, to avoid overwhelming server

- **Optimization:** Compressed images and videos, lazy-loaded user-based routes, retrieving image uploads from Cloudinary with compression transformations

## Tech Stack

| Area     | Tools                                                                        |
| -------- | ---------------------------------------------------------------------------- |
| Frontend | React, Vite, React Router, React Form, React Query, styled-components        |
| Backend  | Node.js, Express, MongoDB (Mongoose)                                         |
| Services | Cloudinary (image uploads), Resend (email), Google Maps API, Geocoding API   |
| Hosting  | Netlify (client), Render (API), MongoDB Atlas (database), Namecheap (domain) |

## Challenges and Things I Learned

**Problem:** Image uploads potentially overwhelming the server.

Due to the design of the Exploration model and its embedded locations, uploading images during an exploration submission would've overloaded the server.

**Solution**:
Instead of having the server validate and relay images to Cloudinary, it just signs uploads to Cloudinary that the client directly delivers.

In the future, I could be more mindful about data design -- instead of embedding Locations into Explorations, I could've used parent-referencing to define their relationship.

---

**Problem:** Keeping exploration pages in sync with the UI while explorers actively update their exploration progress.

**Solution**: Implemented React Query with user-scoped query keys to help refetch respective exploration data after a user's exploration progress was updated. Now, after every update in a user's exploration progress data, the UI would reflect this update immediately, leading to a better UI/UX for explorers.

In the future, I would've fetched all of my data with React Query (instead of React Router Loaders). Not only for its refetching capability, but also to use its cache throughout the rest of my project, heavily improving the performance of my app.

---

**Problem:** Aggressively slow loading of images, whether images were delivered from Cloudinary or served from the client.

**Solution**: Compressed all client-served images with Sqoosh, used MP4s instead of GIFs for looped demonstrations, and added compression limiters to Cloudinary image deliveries.

## Project Structure

    client/   Front-end (React App)
    server/   Back-end (Express API)

## Future Improvements

With more time and energy to spare, I would have also implemented the following features:

- Spanish translation upon request (via DeepL API, not via Browswer API) that was personalized for the Puerto Rican dialect
- Clean up orphaned images on Cloudinary after deleting images from explorations, locatins, or user data
- Make data analytics more comprehensive for Ambassadors and Admins
- Transform the platform into a more social experience for Explorers
- Create a Draft feature for Ambassadors and Admins to save drafts of explorations and locations

## Author

Natalie Falcon · Website (Coming Soon) · https://www.linkedin.com/in/natalieflcn/ · natalie.dflcn@gmail.com
