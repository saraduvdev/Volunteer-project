
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Importing routes
const volunteersRouter = require('./router/volunteersRouter');
const helpRequestsRouter = require('./router/helpRequestsRouter');
//const dbURI = 'mongodb+srv://saraduvdev:sara2114@projectnodejs.xzmzrb7.mongodb.net/saraduvdev?retryWrites=true&w=majority';
const dbURI = 'mongodb+srv://saraduvdev:sara2114@projectnodejs.xzmzrb7.mongodb.net/saraduvdev?retryWrites=true&w=majority&appName=projectNodeJS'

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// התחברות למסד נתונים
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log(`MongoDB connected to: ${dbURI}`);
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/volunteers', volunteersRouter);
app.use('/api/help-requests', helpRequestsRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


