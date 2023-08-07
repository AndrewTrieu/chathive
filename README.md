# ChatHive - A social media platform using MERN stack

## Description

This is a social media platform built using MERN stack (MongoDB, Express, React, Node.js). It allows users to create posts, like posts, and add friends. Dark mode is also supported.

## Live Deployment

You can check out the live deployment [here](https://chathive-client.onrender.com/). The backend is deployed [here](https://chathive-server.onrender.com/).

You can login with the following credentials:

- Email: <fake.person@mail.com>
- Password: nullnullnull

**NOTE:** First login might take a while since the backend response time is not great (free plan). Please refresh the page and try again if it does not redirect after 10s.

## Run Locally

- Clone the repository
- Set up `.env` file in `server` directory with the following content:

```bash
MONGO_URL=<your_mongo_url>
JWT_SECRET=<your_jwt_secret>
PORT=3001
```

where `<your_mongo_url>` is the URL to your MongoDB database, and `<your_jwt_secret>` is the secret key for JWT.

- Run `npm install` in both `client` and `server` directories
- Run `npm start` in both `client` and `server` directories

## Limitations

The project is only for demonstration purpose, and several limitations are apparent:

- Messages, notifications, and help button (accesible from navbar) are not implemented.
- Sharing posts and adding comments are not implemented.
- Images are hosted in the backend, and the frontend only displays the images available in the backend. Therefore, users cannot upload images.
- Links to other social media platforms are not implemented.
- Admin privileges are not implemented.
- Styling is not perfect.
- Search bar is not implemented.
- Slow loading time due to the hosting of images in the backend.
- Many more...

## Timeline

Table:

| Date and time | Task | Labour (hours) |
| --- | --- | --- |
| 07.07.2023 | Brainstorming and initialize project | 2 |
| 07.07.2023 | Setting up database | 2 |
| 07.07.2023 | Authentication and authorization | 6 |
| 10.07.2023 | User routes | 4 |
| 11.07.2023 | Post routes | 6 |
| 11.07.2023 | Add mock data + Fix package.json not pushed | 2 |
| 11.07.2023 | Add REST requests | 1 |
| 12.07.2023 | Add mock assets and initialize frontend | 3 |
| 13.07.2023 | Setup frontend | 6 |
| 13.07.2023 | Theme and styling | 10 |
| 14.07.2023 | Navbar | 10 |
| 16.07.2023 | Login and register page | 20 |
| 16.07.2023 | Fix mock schema and move mock injections out of index.js | 1 |
| 18.07.2023 | Home page and navigate to login/register page if not logged in | 20 |
| 19.07.2023 | Post widget | 10 |
| 21.07.2023 | Each post on home page | 20 |
| 22.07.2023 | Ads and friend list | 10 |
| 23.07.2023 | Profile page | 5 |
| 24.07.2023 | Testing and debugging | 3 |
| 24.07.2023 | Deploy on Render and README.md | 1 |
| **Total** | | **142** |

## References

Based on [this tutorial](https://www.youtube.com/watch?v=K8YELRmUb5o).
