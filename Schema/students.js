const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    name: String,
    class: String,
    mobile: Number,
    email: String,
    address: String,
});
const StudentModel = mongoose.model('students', StudentSchema);
module.exports = StudentModel;