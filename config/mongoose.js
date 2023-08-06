
const mongoose = require('mongoose');

// create connection
mongoose.connect('mongodb://localhost/Expense');

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// error

db.on('error', console.error.bind(console, 'connection error:'));

// up and running then print the message

db.once('open', function() {
    console.log("we are connected to the database");
}
);

module.exports = db;
