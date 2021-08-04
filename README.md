# MERN Stack  `(MongoDb, Express ,React, Node)`

## About 
MERN stack is a web development framework. It consists of MongoDB - document database. Express(.js) - Node.js web framework. React(.js) - a client-side JavaScript framework. Node(.js) - the premier JavaScript web server.
This development stack also makes use of Docker and Nginx.

I have created this MERN stack template with basic features so that this can be used as a base for future projects using the MERN Stack.

The features included on this stack include:

- Fully functioning auth (login, sign up , google auth signup/login)
- Home page
- Dashboard
- basic posts module
- user account settings

## How To Run The Project 

### Dev Setup :
In order to run pystack locally your dev environment needs to be configured. To setup
your environment, follow the following instructions:
- make changes to file `env.example` to your choosing
- RUN `make`<br>
Poof! You're done!

### Frontend:
<br> In this frontend/src/environment/environment.js, you will specify your `google client id` to be used in the project.

### Backend:
<br>
in the .env file, specify the mongo d connection URL


## Notes:
## **Advanced:**

If you're reading this then we assume you want to adjust default values or setup step by step:

1. Run the command `make env` in the project root. A file called `.env` will be
created with default configs alongside `environment.ts` inside of 
`frontend/src/environments`. Edit this to be whatever you want.

2. `make build` - This will build each of the docker containers using the configurations you
specified in `.env`

3. `make up` - This will launch each docker containers for usage. You can visit the frontend at
`http://localhost:{REACT_PORT}` and the express backend at `http://localhost:{EXPRESS_PORT}`


#### `npm test`

Launches the test runner in the interactive watch mode.\


### Screenshots
##### Home
<code>
<img src='https://github.com/alissaahodge/MERN-Stack-basic/blob/master/ReadMeImages/Screenshot%202021-08-04%20at%207.29.47%20AM.png?raw=true'/>
</code>

##### Login
<code>
<img src='https://github.com/alissaahodge/MERN-Stack-basic/blob/master/ReadMeImages/Screenshot%202021-08-04%20at%207.30.09%20AM.png?raw=true'/>
</code>

##### Dashboard
<code>
<img src='https://github.com/alissaahodge/MERN-Stack-basic/blob/master/ReadMeImages/Screenshot%202021-08-04%20at%207.43.19%20AM.png?raw=true'/>
</code>

##### Posts Record Listing
<code>
<img src='https://github.com/alissaahodge/MERN-Stack-basic/blob/master/ReadMeImages/Screenshot%202021-08-04%20at%207.43.30%20AM.png?raw=true'/>
</code>

##### Sample Products Record Listing
<code>
<img src='https://github.com/alissaahodge/MERN-Stack-basic/blob/master/ReadMeImages/Screenshot%202021-08-04%20at%207.43.46%20AM.png?raw=true'/>
</code>

##### Account Settings
<code>
<img src='https://github.com/alissaahodge/MERN-Stack-basic/blob/master/ReadMeImages/Screenshot%202021-08-04%20at%207.43.51%20AM.png?raw=true'/>
</code>

