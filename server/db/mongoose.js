var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://Sumanth:<password>@cluster0.opj2j71.mongodb.net/?retryWrites=true&w=majority");

module.exports = {mongoose};
