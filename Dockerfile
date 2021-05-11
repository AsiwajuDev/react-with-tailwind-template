# pull official base image
FROM node:14.16.1

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.3 -g 

# add app
COPY . ./

# start app
CMD ["npm", "start"]