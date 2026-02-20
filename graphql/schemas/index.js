const { buildSchema } = require('graphql');
const etudiantSchema = require('./etudiant'); 
const specialiteSchema = require('./specialite');

module.exports = buildSchema(`
    # On définit les types de base vides ou avec une requête de santé
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }

    # On inclut les extensions
    ${etudiantSchema}
    ${specialiteSchema}

    schema {
        query: Query
        mutation: Mutation
    }
`);