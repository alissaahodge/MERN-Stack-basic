FROM node:16.4.2

# Set working directory
WORKDIR /backend

# Copy app dependencies to container
COPY ./backend/package*.json ./

# add `./node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# Install app dependencies
RUN npm install

# Deploy app for local development
CMD npm start --host 0.0.0.0 --port ${EXPRESS_PORT} --disableHostCheck true
