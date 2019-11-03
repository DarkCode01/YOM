const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yom', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(db => console.log('Established connection with the database', db))
    .catch(err => console.log(`DB error: ${err.message}`));
