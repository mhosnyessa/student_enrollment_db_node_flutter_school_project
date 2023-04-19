const express = require('express');
const connection = require('./index');
const faker = require('faker');

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
console.log("done, created 50 students  successfully!");

app.listen(3000, () => {
  console.log('Server started on port 3000!: http://localhost:3000');
});

app.get('/records', (req, res) => {
//   connection.query('USE freedb_student_enrollment', (err, results) => {
  connection.query('SELECT * FROM students', (err, results) => {
    if (err) {
      console.error('Error fetching records: ', err);
      res.status(500).send('Error fetching records');
    } else {
      res.send(results);
    }
  });
});

