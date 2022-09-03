const { gql } =  require('apollo-server');


exports.typeDefs = gql`
    type Query {
        hello : String
        highlights : [Highlights]
        players: [player]
        searchPlayer(search : String) : [player]
        getByPlayerId(id : ID) : player

    }
    type Tester {
        hello : String
    }
    type Highlights {
        title : String!
        competition : String!
        matchviewUrl : String
        competitionUrl : String
        thumbnail : String!
        date : String!
        videos : [Video!]!    
    }

    type Video {
        id : ID!
        title : String!
        embed : String!
    }


    type player {
        id: ID
        firstName : String
        lastName : String
        age : Int
        nationality : String
        flag : String
        club : String,
        position : [String]
        photo : String
    }
   
`
