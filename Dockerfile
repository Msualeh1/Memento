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

# Copy the environment variable file (if needed)
COPY config.env ./

# Expose the port on which your Node.js application will run
EXPOSE 3000

# Command to run your Node.js application
CMD ["npm", "start"]
