# REN3 Cloud Dashboard Backend

## Setting Up the project

Clone this git repo from (https://github.com/edzehoo/Ren3_clouddashboardBE.git)


## To run the app locally (for development purpose)

### `npm install`

Install all the required dependencies for the project

### `npm run build`

Builds the app for production to the `dist` folder.\

### `npm start`

Runs the app in the development mode.\ [http://localhost:3000]

## Local Migrations setup

Create a Model file for all the new entities as needed in the `src/models/` dir

## `npm run migration:generate ${file-name}`

This command will generate a migration file with filename as `${timestamp}-${file-name}.js` in the `src/migrations/` dir.

Make the necessary changes for the migrations and save the file.

NOTE: Execute the command from the `sql/init.sql` file in the DB for local setup only for the first time setup.

## `SEQUELIZE_RC=.sequelizerc.json npx sequelize-cli db:migrate`

Run this command to execute the migration script in the local machine.


## To run the app in docker

Can either run it through Docker run or also docker-compose

For Docker run:

### `docker build -t Ren3_clouddashboardBE .`

Builds a Docker image from the current directory (.) and tags it as Ren3_clouddashboardBE. This command creates a custom image based on the Dockerfile in the current directory, which can later be used to run containers.

### `docker run -p 3000:3000 Ren3_clouddashboardBE`

Runs a Docker container from the Ren3_clouddashboardBE image, mapping port 3000 on the host to port 3000 in the container. This allows you to access the containerized application by navigating to http://localhost:3000 on your local machine.


For Docker compose:

### `docker-compose up --build -d`

Builds images (if necessary) and starts containers in detached mode (-d), running in the background. This command ensures that the latest changes to your code or configuration are included by rebuilding the images before launching the containers.

### `docker-compose down`

Stops and removes all containers, networks, and volumes defined in the docker-compose.yml file. This command effectively shuts down the environment, cleaning up any resources created during docker-compose up.



## Recomanded approcach

1. Clone the github repo (https://github.com/edzehoo/Ren3_clouddashboardBE.git)
2. Run `docker-compose up --build -d` in the terminal
    - This will install dependencies run the DB and execute any migrations that it finds and make the service up and running.
3. Run `docker-compose down` once development is done or in case of any changes and run the Up command again.

