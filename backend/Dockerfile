FROM node:12
LABEL sak_node shariq.a.khan@uconn.edu
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3010
CMD [ "node", "backendserver.js" ]
