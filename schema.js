const { gql } =  require('apollo-server');


exports.typeDefs = gql`
    type Query {
        hello : String
        highlights : [Highlights]
        players: [player]
        searchPlayer(search : String) : [player]
        getByPlayerId(id : ID) : playerDetail
        getLeague : [League!]!

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
        id: ID!
        firstName : String
        lastName : String
        age : Int
        nationality : String
        flag : String
        club : String,
        position : [String]
        photo : String
    }



    type leagueType {
        id : ID! 
        name : String
        type : String
        logo : String
    }

    type countryLeague {
        name : String
        code : String
        flag : String
    }

    type League {
        league: leagueType
        country: countryLeague
    }
   



    type birth {
        date : String
        place : String
        country : String
    }

    type player {
        id : ID!
        name :String
        firstname : String
        lastname : String
        age : Int
        birth : birth
        nationality  : String
        photo : String
    }

    type team {
        id : ID!
        name : String
        logo : String
    }

    type league {
        id : ID!
        name : String
        country : String
        logo : String
        flag : String
        season : Int
    }

    type games {
        appearences : Int
        lineup : Int
        minutes : Int
        number: Int,
        position: String,
        rating: Float,
        captain: Boolean
    }
    
    type statistics {
        team : team
        games : games
        league : league
    }

    type playerDetail {
        player: player
        statistics: [statistics]
    }
`
