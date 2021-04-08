# Frontend Side of KPGTS

## This is the front end side of KPGTS website. Built using next.js and Tailwind css for maximum view quality

### How to deploy
This frontend is built using default next.js server. That's why the easiest way to deploy it in production mode is by using vercel
1. Sign in to Vercel
2. Import project from git repo
3. Done !

But if you want to help developing it, here is the way
1. Fork this project
2. Clone the forked repo to your local machine
3. Yarn dev for hot reload, etc
4. If you've made new things, don't forget to commit and create pull request!

### Current Feature :
1. Persistent session using JWT stored on localStorage (yeah it's not perfect. Will be changed in future version)
2. Jumbotron
3. Registration Page
4. Login Page
5. Auto redirect to home page if user is logged in

### Future Feature :
1. Change JWT storing system to httpOnly cookie
2. Polished mobile view
3. Dashboard for admin and user
4. News pages
5. Built in exam system

### Additional Info :
1. Why dont you use next.js built in server capability?
  Because I want to teach myself node.js (express) on building complex API. I also want to learn how to separate frontend and backend using next.js