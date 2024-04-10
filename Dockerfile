# Stage 1: Build the Angular app
FROM node:18-alpine as build
 
#creating app directory
RUN mkdir /app

# Set the working directory in the container
WORKDIR /app
 
# Copy only package.json and package-lock.json to leverage Docker layer caching
COPY package*.json ./
 
# Install Node.js dependencies
RUN npm install
 
# Copy the rest of the application code to the working directory
COPY . .
 
# Build the Angular app
RUN npm run build
 
# Stage 2: Serve the app using Nginx
FROM nginx:alpine
 
# Copy the Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf
 
# Copy the built Angular app from the build stage to the Nginx web server directory
COPY --from=build /app /usr/share/app
COPY --from=build /app/build/dev /usr/share/nginx/html/dev
COPY --from=build /app/build/acc /usr/share/nginx/html/acc


# Set the ENTRYPOINT for Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]