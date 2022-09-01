const { gql } =  require('apollo-server');


exports.typeDefs = gql`
    type Query {
        hello : String
        highlights : [Highlights]

    }
    type Highlights {
        title : String!
        competition : String!
        matchviewUrl : String
        competitionUrl : String
        thumbnail : String!
        data : String!
        videos : [Video!]!    
    }

    type Video {
        id : ID!
        title : String!
        embed : String!
    }

   
`