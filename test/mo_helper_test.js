const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/mongotube", {useNewUrlParser: true});
mongoose.connection
    .once('open', () => console.log('Connected'))
    .on('error', (error) => {
        console.log("your error",error);

    });