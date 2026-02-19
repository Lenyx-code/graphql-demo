const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Etudiant {
        _id: ID! 
        nom: String!
        prenom: String!
        createdAt: String!
    }

    input EtudiantInput {
        nom: String!
        prenom: String!
    }
    
    type Query{
        etudiant:[Etudiant!]
    }

    type Mutation {
        createEtudiant(etudiant:EtudiantInput) : Etudiant
    }

    schema{
        query:Query
        mutation:Mutation
    }
`)