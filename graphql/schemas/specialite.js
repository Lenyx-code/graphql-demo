module.exports = `
    type Specialite {
        _id : ID!
        nom_specialite : String!
        etudiants: [Etudiant!]
        createdAt : String!
    }

    input SpecialiteInput {
        nom_specialite : String!
    }

    extend type Query {
        specialites: [Specialite!]
    }

    extend type Mutation {
        createSpecialite(specialite: SpecialiteInput): Specialite
    }
`;