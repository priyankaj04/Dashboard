# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install react-scripts@5.0.0 -g

# Copy the rest of the application code to the container
COPY . .

# Build the production version of the React app
RUN npm run build

# Expose the port your React app will run on (if applicable)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]