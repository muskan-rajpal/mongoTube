const Student = require("../app/student");
const assert = require("assert");
const { Mongoose } = require("mongoose");
describe("Create tests", () => {
    it("Create a user in DB", () => {
        //assert(true);
        const sam = new Student({name: "Sam"});
        sam.save()
            .then(() => {
                assert(!sam.isNew)
            })
            .catch(() => {
                console.log("error");
            })

    });

});

// all read tests
describe("Read tests", () => {
    let reader;
    beforeEach((done) => {
        reader = new Student({name: "Reader"})
        reader.save()
            .then(() => {
                done();
            });

    });
    it("Read a user: Reader", (done) => {
        Student.find({name: "Reader"}).then(students => {
            assert(reader._id.toString() === students[0]._id.toString());
            done();

            });

    });
});

//all delete tests
describe("Delete files", () => {
    let deleter;
    beforeEach((done) => {
        deleter = new Student ({name: "Deleter"});
        deleter.save()
            .then(() => {
                done();
            });
    });
    it("A delete test for deleter", (done) => {

        Student.findByIdAndDelete(deleter._id)
            .then(() => Student.findOne({name: "Deleter"}))
            .then((student) => {
                assert(student === null);
                done();
            })
    })
});

//all update tests
describe("Upadte Files", () => {
    let updater;
    beforeEach((done) => {
        updater = new Student ({name: "Updater"});
        updater.save()
            .then(() => {
                done();
            })
    })
    it("Set and save test", (done) => {
        updater.set('name', "UpUpdater");
        updater.save()
            .then(() => Student.find({}))
            .then(students => {
                assert(students[0].name !== 'Updater');
                done();

            })

    })

})
