const mongoose = require('mongoose');

      Schema = mongoose.Schema; 
      ObjectId = Schema.Types; 

const professionSchema = new Schema({
    // meta Data
    // moment js - use for dates
    created_at: {type: Date, default: new Date()},
    modified: {type: Date, default: new Date()},
    

    title: {type: String, required: true},
    averageSalary: {type: String, required: true},
    salaryRange: {type: String},
    jobSatisfaction: {type: Number},
    // industry: {type: ObjectId, ref: "Industry", required: true},
    industry: {type: String, required: true},
    education: {type: ObjectId, ref: "Education", required: true},
    slug: {type: String, required: true},
    image: {type: String, required: true},
});

const ProfessionModel = mongoose.model('Profession', professionSchema);

module.exports = ProfessionModel;