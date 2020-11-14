FROM node:12

LABEL pgb_node phillip.bradford@uconn.edu

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)



# Bundle app source
COPY . .


RUN npm install

EXPOSE 3009
CMD [ "node", "index.js" ]


