 ## Car Assignment Fronted Application
 
  This is a simple Angular application that connects to a backend API and displays cars and users in lists that are sortable and filterable.
  
## Getting Started
  To get started, you will need to have the following installed:
  
  * [Node.js](https://nodejs.org/en/)
  * [Angular CLI](https://cli.angular.io/)
  
  Once you have those installed, you can run the following commands to get started:
  
  * `npm install` - Installs all dependencies
  * `ng serve` - Runs the application in development mode
  * `ng build` - Builds the application for production
  
  The application will be available at `http://localhost:4200/`.
  ### Please note that the backend API must be running for the application to work.
  The application expects the backend API to be available at `http://localhost:8080/`.

## How to use the application
  The application has two pages, one for displaying cars and one for displaying users.
  The pages are accessible through the navigation bar at the top of the page.

  ### Cars
  The cars page displays a list of cars that are sortable and filterable.
  The list can be filtered by make by typing in the make in the text box on the top left.  
  The list can be sorted by selecting a sorting method from the drop down on the top right.
  It's also possible to filter and sort by using url parameters. 
  E.g: `http://localhost:4200/cars?find=lada&sort=id_des` will display a list of cars that have "lada" in their make and are sorted by id in descending order.

  ### Users
  The users page displays a list of users that are sortable and filterable.
  The list can be filtered by name by typing in the name in the text box on the top left.
  The list can be sorted by selecting a sorting method from the drop down on the top right.
  It's also possible to filter and sort by using url parameters.
  E.g: `http://localhost:4200/users?find=teet&sort=id_des` will display a list of users that have "teet" in their name and are sorted by id in descending order.
