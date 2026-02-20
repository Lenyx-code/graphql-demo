const etudiantResolvers = require('./etudiant');
const specialiteResolvers = require('./specialite');

const rootResolver = {
    ...etudiantResolvers,
    ...specialiteResolvers
};

module.exports = rootResolver;