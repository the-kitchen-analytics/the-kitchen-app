# Use an official Node.js runtime as a parent image
FROM --platform=$BUILDPLATFORM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app
COPY . .

# Build the app
RUN npm run build

# Production image
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run the app
CMD ["nginx", "-g", "daemon off;"]