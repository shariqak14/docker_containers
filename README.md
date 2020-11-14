# Docker Containers

## Create a Bridge Network
```
docker network create my_net
docker network ls
```

## Create a Shared Volume
```
docker volume create --name DataVolume
docker volume ls
```

## Build the Images
```
docker build -t backend:app backend/
docker build -t frontend:app frontend/
docker images
```

## Run the Containers and Mount the Backend to the Shared Volume
```
docker run --network my_net --name backend -d -v DataVolume:/datavolume -p 3010:3010 backend:app
docker run --network my_net --name frontend -d  -p 3009:3009 frontend:app
docker ps
```

## Add a File in the Shared Volume to be Read in the Backend
```
docker exec -it backend bash 
root@21a11dbd9a11:/usr/src/app# echo "990 991 992 993 994 995" >> /datavolume/data.txt
root@21a11dbd9a11:/usr/src/app# cat /datavolume/data.txt
root@21a11dbd9a11:/usr/src/app# exit
```

## Restart the Backend
```
docker restart backend
```

## Make Requests
```
curl http://localhost:3010/get_backend_data
curl http://localhost:3009/get_data
```

## Check the Logs to View the Outputs
```
docker logs frontend
docker logs backend
```
