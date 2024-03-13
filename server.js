const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb+srv://mounabenbrahem:mounamouna@cluster0.jnxpjay.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
