const mongoose = require('mongoose');

      Schema = mongoose.Schema;
      ObjectId = Schema.Types;

const industrySchema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: {type: String, required: true},
});

module.exports = mongoose.model("Industry", industrySchema);