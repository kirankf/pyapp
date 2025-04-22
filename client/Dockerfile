# Stage 1: Build
FROM node:16-alpine as builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy and build
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=builder /app/build /usr/share/nginx/html

# Remove default nginx site
RUN rm -rf /usr/share/nginx/html/*

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]