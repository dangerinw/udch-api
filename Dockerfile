FROM node:lts

# Create app directory
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build
# Start the server using the production build
CMD [ "npm", "run", "start" ]