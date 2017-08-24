const mongoose = require('mongoose');

      Schema = mongoose.Schema; 
      ObjectId = Schema.Types; 

const industryProfessionSchema = new Schema({
    // meta Data
    // moment js - use for dates
    created_at: {type: Date, default: new Date()},
    modified: {type: Date, default: new Date()},
    

    title: {type: String, required: true},
    slug: {type: String, required: true},
    industry: {type: ObjectId, ref: "Industry", required: true},
    education: {type: ObjectId, ref: "Education", required: true}
});

const IndustryProfessionModel = mongoose.model('IndustryProfession', industryProfessionSchema);

module.exports = IndustryProfessionModel;