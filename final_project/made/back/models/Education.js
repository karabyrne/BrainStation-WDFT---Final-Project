const mongoose = require('mongoose');

      Schema = mongoose.Schema;
      ObjectId = Schema.Types;

const educationSchema = new Schema({
    education: { type: String, required: true },
    tuition: {type: String, required: true}
});

module.exports = mongoose.model("Education", educationSchema);