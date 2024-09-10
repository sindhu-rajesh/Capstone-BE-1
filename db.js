const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb+srv://Sindhu:sindhusky07@cluster0.3jqgq.mongodb.net/Cleanease?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URL);

const connection = mongoose.connection;

connection.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

connection.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

module.exports =mongoose