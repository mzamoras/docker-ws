#BASE IMAGE
FROM node

#WORKING DIRECTORY
WORKDIR /var/www/app

#INSTALL AND CACHE DEPENDENCIES
COPY package*.json ./
ADD package.json /var/www/app/package.json
RUN npm install

#BUNDLE THE APP SOURCE
COPY . .

#PORT SPECIFICATION
EXPOSE 3000

#START APP
CMD [ "npm", "start" ]