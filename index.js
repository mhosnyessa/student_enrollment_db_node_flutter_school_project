const express = require('express');
const connection = require('./connection');
const faker = require('faker');
const http = require('http');

const app = express();
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



  if (req.url === '/records') {
  connection.query('SELECT * FROM students', (err, results) => {
    if (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.write("error fetching records");
    res.end();
    } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(JSON.stringify(results));
    res.end();
    }
  });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }



//   if(req.url ===  '/records') {


//   connection.query('SELECT * FROM students', (err, results) => {
//   res.statusCode = 200;
//     if (err) {
//       console.log('Error fetching records: ', err);
//       res.status(500).send('Error fetching records');
//     } else {
//   // res.setHeader('Content-Type', 'text/plain');
//   res.send(results);
//       // res.send(results);
//     }
//   });
// }


  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');

  // res.end('Hello, world!');
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// server.get('/records', (req, res) => {
// //   connection.query('USE freedb_student_enrollment', (err, results) => {
//   connection.query('SELECT * FROM students', (err, results) => {
//     if (err) {
//       console.log('Error fetching records: ', err);
//       res.status(500).send('Error fetching records');
//     } else {
//       res.send(results);
//     }
//   });
// });

// base case
// server.get('/', (req, res) => {
//     if (err) {
//       console.log('Error fetching records: ', err);
//     } else {
//       res.send("Hi, everything  is good!!");
//     }
//   });

