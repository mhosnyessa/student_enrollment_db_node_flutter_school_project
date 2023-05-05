# Second stage: Node base image
FROM node:latest AS node_base

# Third stage: Final image
# FROM node_base AS app
WORKDIR /app
COPY package*.json ./
COPY index.js ./
# COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000
