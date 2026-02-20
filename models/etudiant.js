const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const etudiantSchema = new Schema(
    {
        nom: { type: String, required: true },
        prenom: { type: String, required: true },
        specialite: {
            type: Schema.Types.ObjectId,
            ref: 'Specialite'
        }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Etudiant", etudiantSchema);
