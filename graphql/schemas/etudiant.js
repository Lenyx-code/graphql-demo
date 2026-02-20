module.exports = `
    type Etudiant {
        _id: ID! 
        nom: String!
        prenom: String!
        specialite: Specialite  # La relation
        createdAt: String!
    }

    input EtudiantInput {
        nom: String!
        prenom: String!
        specialiteId: ID 
    }
    
    extend type Query {
        etudiants: [Etudiant!]
    }

    extend type Mutation {
        createEtudiant(etudiant: EtudiantInput): Etudiant
    }
`;