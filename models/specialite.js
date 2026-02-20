const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SpecialiteSchema = new Schema(
    {
        nom_specialite: {
            type: String,
            required: true
        },
      
    },
    { timestamps:true }
)

module.exports = mongoose.model("Specialite", SpecialiteSchema);