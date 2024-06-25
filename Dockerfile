# Use the official Node.js LTS image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set a build argument for the MongoDB connection string
ARG MONGO_URI

# Set a build argument for the session secret key
ARG SESSION_SECRET

# Set environment variables using the build arguments
ENV MONGO_URI=$MONGO_URI
ENV SESSION_SECRET=$SESSION_SECRET

# Expose the port on which your Node.js application will run
EXPOSE 3000

# Command to run your Node.js application
CMD ["npm", "start"]
