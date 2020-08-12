const mongoose = require('mongoose');
const Schema = new mongoose.Schema;
const StudentSchema = new Schema({
    name: String
});
const Student = mongoose.model('student', StudentSchema);
module.exports = Student;