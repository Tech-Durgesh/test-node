const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/school');
const StudentSchema = new mongoose.Schema({
    name: String,
    class: String,
    mobile: Number,
    email: String,
    address: String,
});
const StudentModel = mongoose.model('students', StudentSchema);

const Create = async () => {
    let record = new StudentModel({
        name : "Kamlesh Vaishnav",
        class : "9th",
        mobile : "8888888888",
        email : "kamlesh@test.comsss",
    });
    let result = await record.save();
    console.log(result);
}

const Read = async () => {
    let record = await StudentModel.find({name : "Kamlesh Vaishnav"});
    console.log(record);
}

const Update = async () => {
    let record = await StudentModel.updateOne(
        { name : "Kamlesh Vaishnav"},
        {$set:{email : "kamlesh@test.com", address: "Khera"}}
        );
    console.log(record);
}

const Delete = async () => {
    let record = await StudentModel.deleteOne({name : "Kamlesh Vaishnav"});
    console.log(record);
}
