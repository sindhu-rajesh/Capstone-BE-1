const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb://127.0.0.1:27017/Sindhu';

mongoose.connect(MONGODB_URL);

const connection = mongoose.connection;

connection.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

connection.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

module.exports =mongoose