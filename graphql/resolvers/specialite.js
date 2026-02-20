const Specialite = require("../../models/specialite");

module.exports = {
  specialites: async () => {
    try {
      const specialiteFetch = await Specialite.find();
      return specialiteFetch.map(specialite => ({
        ...specialite._doc,
        _id: specialite.id,
        createdAt: new Date(specialite._doc.createdAt).toISOString()
      }));
    } catch (error) {
      throw error;
    }
  },

  createSpecialite: async (args) => {
    try {
        const { nom_specialite } = args.specialite; 

        const specialite = new Specialite({
            nom_specialite
        });

        const newSpecialite = await specialite.save();

        return {
            ...newSpecialite._doc,
            _id: newSpecialite.id,
            createdAt: newSpecialite.createdAt ? newSpecialite.createdAt.toISOString() : new Date().toISOString()
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}
};
