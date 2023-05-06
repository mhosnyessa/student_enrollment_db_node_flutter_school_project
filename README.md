# Project Overview and Architecture

## Purpose
The purpose of this application is to provide a user-friendly interface for students to view, login, sign up, sign out, and apply for programs offered by an educational institute. Additionally, the app facilitates the management of the application process, including handling payments.

## Architecture Overview
The application follows a client-server architecture with the following components:

1. Flutter App: The frontend of the application built using the Flutter framework. It provides a user interface for students to interact with the system.

2. Blog Provider: A state management solution in the Flutter app, responsible for providing data to the UI and handling application state.

3. Repository Layer: The repository layer acts as an intermediary between the data layer and the business logic layer. It communicates with the web server to fetch data and perform necessary operations.

4. Web Server: A containerized web server hosted on Fly.io. The web server is implemented using JavaScript and connects to the MySQL database to fetch and manipulate data as required.

5. MySQL Database: The database hosted on db4free.net. It stores all the necessary information related to programs, students, enrollments, and application data.

## Database Design
The MySQL database plays a crucial role in the application and is designed to store the following main entities:

1. Students: Contains information about the students using the application, including their names, email addresses, and passwords.

2. Programs: Stores details about the available programs offered by the educational institute, including program names, start dates, and end dates.

3. Enrollment: Represents the enrollment of a student in a specific program. It contains the enrollment ID, student ID, program ID, and enrollment date.

## Repository Layer and Data Flow
The repository layer acts as a bridge between the Flutter app and the web server. It handles the communication with the web server and performs operations such as fetching program data, submitting applications, and retrieving application status.

The data flow in the application follows these steps:

1. The Flutter app makes requests to the repository layer to fetch program data or submit applications.

2. The repository layer communicates with the web server via appropriate APIs to fetch the required data or submit the applications.

3. The web server processes the requests, interacts with the MySQL database on db4free.net, and retrieves or updates the necessary information.

4. The web server sends the response back to the repository layer, which further passes it to the Flutter app for display or processing.

## Diagram
Here's a diagram representing the architecture and data flow of the application:


                                +------------------+
                                |                  |
                      +-------->|    Flutter App   |
                      |         |                  |
                      |         +--------+---------+
                      |                  |
                      |                  |
                      |         +--------v---------+
                      |         |                  |
                      +-------->|   Blog Provider  |
                                |                  |
                                +--------+---------+
                                         |
                                         |
                                         |
                                +--------v---------+
                                |                  |
                                | Repository Layer |
                                |                  |
                                +--------+---------+
                                         |
                                         |
                                         |
                                +--------v---------+
                                |                  |
                                |    Web Server    |
                                |                  |
                                +--------+---------+
                                         |
                                         |
                                         |
                                +--------v---------+
                                |                  |
                                | MySQL Database  |
                                |                  |
                                +------------------+


## Conclusion
The described application follows a client-server architecture, with the Flutter app serving as the frontend, the web server acting as the backend, and the MySQL database hosting the necessary data. The repository layer handles the communication between the app and the web server, facilitating the retrieval and manipulation of program and application data. The database plays a crucial role in storing program information, student details, and enrollment data.

Please support the team by praying for us <3. 


## Setting Up the Application

### Flutter App Setup
1. Make sure you have Flutter installed on your development machine.
2. Clone the Flutter app repository.
3. Open the app in your preferred IDE.
4. Run `flutter pub get` to fetch the app's dependencies.
5. Update the necessary configurations in the app, such as the base URL of the web server.
6. Build and run the app on your desired device or emulator.

### Web Server Setup
1. Clone the web server repository.
2. Install the required dependencies using `npm install`.
3. Update the database connection configurations in the server code to connect to the MySQL database on db4free.net.
4. Deploy the web server to Fly.io or your preferred hosting provider using the provided containerization configuration.
5. Ensure the necessary API endpoints are implemented to handle program data retrieval and application submission.

### MySQL Database Setup
1. Sign up for an account on db4free.net or use your existing credentials.
2. Create a new database for the application.
3. Execute the SQL queries provided earlier in this document to create the necessary tables.
4. Generate sample data or manually insert data into the tables as per your requirements.

## Conclusion

The architecture described above outlines the various components involved in the application, including the Flutter app, the web server, and the MySQL database. The database, hosted on db4free.net, is a critical component responsible for storing program information, student details, and enrollment data.

By following the instructions provided, you can set up and configure the application to run smoothly. Feel free to customize and extend the functionality to meet your specific needs.

Please note that this is a high-level overview, and further implementation details and configurations may be required depending on your specific development environment and requirements.
