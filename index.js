const express = require("express");
const mysql = require("mysql2");

const http = require("http");
const { CLIENT_RENEG_WINDOW } = require("tls");
const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'db4free.net',
  // host: 'sql.freedb.tech',
  // user: 'myuser',
  user: 'studentsdb',
  // user : 'freedb_js_client',
  password: 'wonderful%World',
  // password: '@cn*p9yJvR&aT63',
  database: 'studentsdb',
  port: 3306,
  // database: 'freedb_student_enrollment',
});

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database");
  }
});

///* for creating 50 random students and inserting them into the
///*  db
// for (let i = 1; i <= 50; i++) {
//   const name = faker.name.findName();
//   const age = faker.datatype.number({ min: 18, max: 30 });
//   const sql = 'INSERT INTO students (id, name, age) VALUES (?, ?, ?)';
//   const values = [i, name, age];

//   connection.query(sql, values, (error, results) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log(`Student ${i} inserted into the database`);
//     }
//   });
// }
// console.log("done, created 50 students  successfully!");

// app.listen(3000, () => {
//   console.log('Server started on port 3000!: http://localhost:3000');
// });

const server = http.createServer((req, res) => {




    setTimeout( function () { 

  if (req.url.startsWith("/login")) {
    const urlWithoutEndpoint = req.url.slice("login/".length + 1);
    const [email, pass] = urlWithoutEndpoint.split("/");

    // Extract the name and password from the URL by splitting it at the slashes

    connection.query(
      "SELECT * FROM students WHERE email = ? AND password = ?",
      [email, pass],
      (err, results) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.write("error fetching records");
          res.end();
        } else {
          if (results.length >= 1) {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.write( JSON.stringify( results[0]));
            res.end();
          } else {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("error fetching records");
            res.end();
          }
        }
      }
    );
  } else if (req.url === "/records") {
    connection.query("SELECT * FROM students", (err, results) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("error fetching records");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(JSON.stringify(results));
        res.end();
      }
    });
  }else if (req.url === "/programs") {
    connection.query("SELECT * FROM programs", (err, results) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("error fetching records");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(JSON.stringify(results));
        res.end();
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
  }
}, 500 );});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
