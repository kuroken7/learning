const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'learning'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to database!');
  
  const sql = "INSERT INTO user (id, username, password) VALUES (NULL, 'username', 'password')";
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log('1 record inserted');
    
    connection.end();
  });
});
