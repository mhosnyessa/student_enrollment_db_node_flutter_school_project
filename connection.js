const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'sql.freedb.tech',
  user: 'freedb_js_client',
  password: '@cn*p9yJvR&aT63',
  database: 'freedb_student_enrollment'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to database: ', err);
  } else {
    console.log('Connected to database!');
  }
});

module.exports = connection;