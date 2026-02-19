const Etudiant = require("../../models/etudiant");

module.exports = {
  etudiant: async () => {
    try {
      const etudiantFetch = await Etudiant.find();
      return etudiantFetch.map(etudiant => ({
        ...etudiant._doc,
        _id: etudiant.id,
        createdAt: new Date(etudiant._doc.createdAt).toISOString()
      }));
    } catch (error) {
      throw error;
    }
  },

  createEtudiant: async (args) => {
    try {
      const { nom, prenom } = args.etudiant;

      const etudiant = new Etudiant({
        nom,
        prenom,
        createAt: new Date()
      });

      const newEtudiant = await etudiant.save();

      return {
        ...newEtudiant._doc,
        _id: newEtudiant.id,
        createdAt: newEtudiant.createdAt.toISOString()
      };

    } catch (error) {
      throw error;
    }
  }
};
