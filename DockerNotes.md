#  Docker Notes - Gowdilya Jeyakumar
>These notes can be useful once you already have docker installed and setup on your computer

* Image: Is a package or a template used to create one or more containers
* Containers: Are running instances of images, that are isolated and have their own environments and set of processes

## Docker Commands
<br/>

**Important:** 
When entering any docker command with a `[container_id]` you can enter just the first few charecters. It will execute on the specfied container as long as entered prefix is unique from the other `containers_id's`.
<br/>
<br/>
<br/>
***
    docker images

 **List** available **images**, and there sizes



*** 


    docker run [image]

**Run** a docker **container** from an **image**

Example:
        
>`docker run nginx`

> will run an instance of the nginx application on the docker host if it already exists. If the image is not present on the host, it will go to **docker hub** and pull the image

***



    docker pull [image]

 **Download** the image from **docker hub** and not run a container



***



    docker rmi [image]

 **Remove** an image you no longer plan to use (and no containers are running off of that image)

***
## Collect Information

    docker ps

 **List** all running containers and its basic information: Container ID, Name of Image, STATUS, NAME of Container


   
    docker ps -a

Lists all running or non-running(previously exited) containers.


    docker inspect [container_id/container_name]

Returns all details of a container in a JSON Format

    docker  logs [container_id/container_name]

View the logs(contents written to the stdout of the container)
***

    docker stop [container name/container id]

Stops a running container.

> you can verify the states of the stopped containers with `docker ps -a`

***

    docker rm [container name/container id]

 used to **remove** a stopped container permenantly

***

    docker system prune

This will remove:

            - all stopped containers
            - all networks not used by at least one container
            - all dangling images
            - all dangling build cache

***

### Image of OS will Exit
`docker run ubuntu` will stop right away and be in an exited state.
Because unlike virtual machines containers are not meant to host an operating system. Containers are meant to host an instance of a specific task or process, like a host server, application server or database, or carry some computation. Once the task completes, the container exits. A container only lives as long as the process inside it is alive. If a WebService inside a container crashes or is stopped, the container exits.
<br/>
<br/>

If the image is'nt running any process, you can instruct docker to run a command:

        docker run ubuntu
        docker run ubuntu sleep 5
<br/>
<br/>

***What if we want to run a command on a running container?***

    docker exec distraced_mcclintock cat /etc/hosts
> prints the contents of the etc/hosts file

***

### Run - attach and detach
By default `docker run [image]` executes containers in attached mode, runs in the forground. Attached to the console/standard out, and you can only view the output untill the container stops.

Alternative: `docker run -d [image]` runs it in the background mode.

<br/>
<br/>
To attach back to the container run :

    docker attach [contianer_name/container_id]
***

## Run - tag

    docker run [image]:[tag]

To specify version of the Image (example: version=4.0 of redis(defaukt_version=latest(version=5.0.5))) 

    Example:
        docker run redis:4.0

---

## Run - STDIN

Docker container wont't wait for the prompt, because it runs in a non-interactive mode. Docker containers can't listen to standard input even though its attached to the console. It doesn't have a terminal to read input from. It runs in a non-inetractive mode.

If you want to provide your input, you must map the standard input of your host to the docker container using the -i parameter (interactive mode).

    docker run -i [image]

To see the prompt message...

    docker run  -it [image]

-t is for pseudo terminal. The combination of -it we are attached to the terminal(see the prompt message), and in an interactive mode(can enter input).

---

## PORT mapping

Map docker host (port) to the container (port).

        docker run -p [host_port]:[container_port] [image]      

        docker run -p 80:5000 test-webapp

multiple containers might have the same port# (instances of the same web app) which you can map to unique host ports.

**Important**: you CAN NOT map to the same host port more than once.

---
## RUN - Volume mapping

    docker run mysql

    docker stop mysql
    docker rm mysql

When you stop and delete the container, you lose all the data stored within it.

If you want to **persist** the data, you want to map a directory outside the container on the docker host to a directory inside the container

    docker run -v [host_directory]:[container_directory] [image]

    Example: docker run -v /opt/datadir:/var/lib/mysql mysql
