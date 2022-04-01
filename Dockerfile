# To use:
# Build the image:          docker build -t machinest ./
# Run image in container:   docker run -p 8080:8080 machinest

FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

# serve dist folder on port 8080
EXPOSE 8080
CMD [ "http-server", "dist" ]