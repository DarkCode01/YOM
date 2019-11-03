const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yom', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify:false,
})
    .then(db => console.log('Established connection with the database'))
    .catch(err => console.log(`DB error: ${err.message}`));
