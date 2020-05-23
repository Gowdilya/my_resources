#  Docker Notes - Gowdilya Jeyakumar
>These notes can be useful once you already have docker installed and setup on your computer

* Image: Is a package or a template used to create one or more containers
* Containers: Are running instances of images, that are isolated and have their own environments and set of processes

## Docker Commands

**Important:** When entering any docker command with a `[container_id]` you can enter just the first few charecters. It will execute on the specfied container as long as entered prefix is unique from the other `containers_id's`.

`docker images`
* use to see a **list** of **images** available, and there sizes

`docker run [image]`
 * used to **run** a docker **container** from an **image**

Example:
        
>`docker run nginx`

> will run an instance of the nginx application on the docker host if it already exists. If the image is not present on the host, it will go to **docker hub** and pull the image
<br/>
<br/>

`docker pull [image]`
* Can be used if you want to download the image from **docker hub** and not run a container

`docker rmi [image]`
* to **remove** an image you no longer plan to use (and no containers are running off of that image)

`docker ps`

* list all running containers and its basic information: Container ID, Name of Image, STATUS, NAME of Container
<br/>
<br/>
   
`docker ps -a`

* Lists all running or non-running(previously exited) containers.
<br/>
<br/>

`docker stop [container name/container id]`
>you can verify the states of the stopped containers with `docker ps -a`

`docker rm [container name/container id]`
* used to **remove** a stopped container permenantly


## Image of OS will Exit
`docker run ubuntu` will stop right away and be in an exited state.
Because unlike virtual machines containers are not meant to host an operating system. Containers are meant to host an instance of a specific task or process, like a host server, application server or database, or carry some computation. Once the task completes, the container exits. A container only lives as long as the process inside it is alive. If a WebService inside a container crashes or is stopped, the container exits.

If the image is'nt running any process, you can instruct docker to run a command.

        docker run ubuntu
        docker run ubuntu sleep 5

What if we want to run a command on a running container?

    docker exec distraced_mcclintock cat /etc/hosts
> prints the contents of the etc/hosts file

## Run - attach and detach
By default `docker run [image]` executes containers in attached mode, runs in the forground. Attached to the console/standard out, and you can only view the output untill the container stops.

Alternative: `docker run -d [image]` runs it in the background mode
to attach back to the container run 

    docker attach [contianer_name/container_id]