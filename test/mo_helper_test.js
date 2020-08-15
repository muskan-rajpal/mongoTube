const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

before(done => {
    mongoose.connect("mongodb://localhost/mongotube", {useNewUrlParser: true});
    mongoose.connection
        .once("open", () => {
            //console.log('Connected')
            done();
        })
        .on("error", error => {
            console.log("your error", error);
        });
});
beforeEach((done) => {
    mongoose.connection.collections.students.drop(() => {
        done();

    });
});
