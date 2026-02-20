const Etudiant = require("../../models/etudiant");

module.exports = {
  etudiants: async () => {
    try {
      const etudiantFetch = await Etudiant.find().populate('specialite');
      return etudiantFetch.map(etudiant => ({
        ...etudiant._doc,
        _id: etudiant.id,
        specialite: etudiant.specialite ? {
          ...etudiant.specialite._doc,
          _id: etudiant.specialite.id
        }: null,
        createdAt: new Date(etudiant._doc.createdAt).toISOString()
      }));
    } catch (error) {
      throw error;
    }
  },

  createEtudiant: async (args) => {
  try {
    const { nom, prenom, specialiteId } = args.etudiant; 

    const etudiant = new Etudiant({
      nom,
      prenom,
      specialite: specialiteId,
    });

    const newEtudiant = await etudiant.save();
    
    const populated = await newEtudiant.populate('specialite');

    return {
      ...populated._doc,
      _id: populated.id,
      createdAt: populated.createdAt.toISOString()
    };
  } catch (error) {
    throw error;
  }
}
};
