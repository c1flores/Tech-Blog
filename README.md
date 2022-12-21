# Table of Contents
  - [Overview](#overview)
  - [Why does an MVC paradigm matter?](#why-does-an-mvc-paradigm-matter)
  - [Screen Capture](#screen-capture)
  - [Deployment Link](#deployment-link)
  - [Installation](#installation)
  - [Usage](#usage)
  
## Overview
 This repository is an exhibition of a CMS-style tech blog, where developers can publish their blog posts and comment on other developers' posts as well. The user can consult the repo to learn how to create a blog site similar to a Wordpress site from scratch using the MVC paradigm in its architecture. The project makes use of <a href="https://nodejs.org/en/" target="_blank">Node.js</a> to work with a back end, the <a href="https://www.npmjs.com/package/mysql2" target="_blank">MySQL2</a> as well as the <a href="https://www.npmjs.com/package/sequelize" target="_blank">Sequelize</a> packages to manage and interact with the database, the <a href="https://www.npmjs.com/package/dotenv" target="_blank">dotenv package</a> to classify environmental variables, the <a href="https://www.npmjs.com/package/bcrypt" target="_blank">bcrypt package</a> to hash passwords,  and the <a href="https://www.npmjs.com/package/express-session" target="_blank">Express Session package</a> as well as the <a href="https://www.npmjs.com/package/connect-session-sequelize" target="_blank">Connect Session Sequelize package</a> to add authentication.   Lastly, the project utilizes the <a href="https://www.npmjs.com/package/express-handlebars" target="_blank">Express Handlebars package</a> to serve as a powerful template engine.


## Why does an MVC paradigm matter?
 MVC, short for Model, View, and Controller, is an architectural pattern used for efficiently relating the user interfaces to underlying data models and organizing to relate the application code. This methodology easily organizes large-size web applications, supports asynchronicity, and the modular components allow for faster development processes. 

## Screen Capture
![](https://user-images.githubusercontent.com/81927296/204045176-ddfad56b-1681-4e56-9b09-8f625fd65e98.gif)

## Heroku Application Deployment
[Application Deployment Link](https://techh-bloggg.herokuapp.com/)

## Installation

  1. Fork and clone repository to local machine.
  2. Run ```npm i``` to install dependencies in local project directory. 
  
## Usage

  1. Open integrated terminal in personal IDE.
  2. Run ```node server.js```.
  3. Open app in local host port.
