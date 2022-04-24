# PENGUIN-XP PLANNER

## Purpose

An app for polling friends in order to set up an event.

## Requirements

MySQL server if installed locally, or JawsDB if deploying to Heroku.
SendGrid

## Installation and Usage

1. Install node.js

2. Clone or download the source code from GitHub to your local machine:

```shell
git@github.com:stuart-rickard/penguin-xp.git
```

3. Navigate to the root of the downloaded code by typing:

```shell
cd penguin-xp
```

4. Install required dependencies by opening a terminal and on command line type:

```shell
npm init -y (set "main": "server.js", "start": "node server.js")
npm install
```

5. Create the .env file and open the file by typing:

```shell
touch .env
code .env
```

6. Add the following to the .env file (you'll need to provide your own values to the blank strings):

```shell
DB_NAME = 'penguin_db'
DB_USER = ''
DB_PW = ''
SESS_PW = ''
SENDGRID_API_KEY = ''
```

7. Navigate to the MySQL shell and enter:

```shell
mysql -u root -p
```

8. Enter the password for MySQL

9. Create the database, then exit MySQL by typing:

```shell
source db/schema.sql
exit
```

9. To test your routes in Insomnia, seed the database and start the server:

```shell
npm run seed
npm start
```

## Deployed Demo

https://penguin-xp.herokuapp.com/

## Built With

HTML

CSS

Javascript

## Technologies

Node.js

npm

mysql2

Sequelize

SendGrid

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Contribution

This app began as a group project for a coding bootcamp with these team members: Joanne Chun, Chance Crawford, Brian Esparza, Noah Fabric, VJ Mariano, David Reys Santoyo, Stuart Rickard, and Kevin Rivera ([group project repo](https://github.com/stuart-rickard/gp-penguin)).
