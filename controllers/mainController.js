const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
});

// Add data to the table
exports.addData = (req, res) => {
  const { name, email, phone, address } = req.body;

  // Perform input validation
  if (!name || !email || !phone || !address) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const query = 'INSERT INTO your_table_name (name, email, phone, address) VALUES (?, ?, ?, ?)';
  const values = [name, email, phone, address];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error adding data: ', err);
      res.sendStatus(500);
      return;
    }
    console.log('Data added successfully');
    res.sendStatus(200);
  });
};

// Edit data in the table
exports.editData = (req, res) => {
  const { id, name, email, phone, address } = req.body;

  // Perform input validation
  if (!id || !name || !email || !phone || !address) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const query = 'UPDATE your_table_name SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?';
  const values = [name, email, phone, address, id];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error updating data: ', err);
      res.sendStatus(500);
      return;
    }
    console.log('Data updated successfully');
    res.sendStatus(200);
  });
};

// View data from the table
exports.viewData = (req, res) => {
  const id = req.params.id;

  // Perform input validation
  if (!id) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const query = 'SELECT * FROM your_table_name WHERE id = ?';
  const values = [id];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error retrieving data: ', err);
      res.sendStatus(500);
      return;
    }
    if (result.length === 0) {
      res.sendStatus(404);
      return;
    }
    console.log('Data retrieved successfully');
    res.json(result[0]);
  });
};

// Delete data from the table
exports.deleteData = (req, res) => {
  const id = req.params.id;

  // Perform input validation
  if (!id) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const query = 'DELETE FROM your_table_name WHERE id = ?';
  const values = [id];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error deleting data: ', err);
      res.sendStatus(500);
      return;
    }
    console.log('Data deleted successfully');
    res.sendStatus(200);
  });
};