#  Docker Notes - Gowdilya Jeyakumar

* Image: Is a package or a template used to create one or more containers
* Containers: Are running instances of images, that are isolated and have their own environments and set of processes

## Docker Commands

    docker run [image]
used to run a docker container from an image

    docker run nginx

will run an instance of the nginx application on the docker host if it already exists. If the image is not present on the host, it will go to docker hub and pull the image. 

    docker ps
list all running containers and its basic information: Container ID, Name of Image, STATUS, NAME of Container

    docker ps -a

Lists all running or non-running(previously exited) containers.

    docker stop [container name/container id]
