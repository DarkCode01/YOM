const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const createError = require('http-errors');
const env = require('dotenv').config();
const routes = require('./routes');
const passport = require('./middlewares/passport.middleware');

// App
const app = express();

// settings...
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());


// routes
app.use(`/api/v${process.env.VERSION_API_REST}`, routes.auth);
app.use(`/api/v${process.env.VERSION_API_REST}`, routes.account);
app.use(`/api/v${process.env.VERSION_API_REST}`, routes.product);

// Catch of errors
app.use((req, res, next) => {
    next(createError(404));
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        statusCode: err.status,
        message: err.message,
        error: err
    });
});


app.listen(process.env.PORT || 8000, async () => {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    
    console.log(`Server running on http://localhost:${process.env.PORT || 8000}`);
});
