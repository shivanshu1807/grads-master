const mongoose = require('mongoose');
const { Schema } = mongoose;
const JobSchema = new Schema({
    employer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employer'
    },
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        type: [String],
        default: [],
    },
    responsibilities: {
        type: [String],
        default: [],
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employer',
        required: false,
    },
    date: {
        type: Date,
        default: Date.now
    },
});
const Jobs = mongoose.model('jobs', JobSchema);
module.exports = Jobs