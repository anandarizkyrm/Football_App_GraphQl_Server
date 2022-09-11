const fetch = require("node-fetch");

exports.Query = {
    hello : () => {return "This Is Graphql Server" },
    highlights: async () => {
        const data = await fetch(`https://www.scorebat.com/video-api/v3/feed/?token=${process.env.KEY_VIDEO}`);
        const result = await data.json()
        return result.response;
      },
    players : (_, args, { db })=>{
      return db.playersDb
    },
    searchPlayer : (_, {search}, {db})=>{
      if(!search){
        return null
      }
      let filterData = db.playersDb
          
      filterData = db.playersDb.filter((data)=>{
                      return Object.values(data).some((x)=>{
                            return x.toString().toLowerCase().includes(search.toLowerCase())
                        })
                   })
      return filterData
    },

    getByPlayerId : async(_, { id }) => {
      const currentYear = new Date().getFullYear()
      const url = `https://v3.football.api-sports.io/players?id=${id}&season=${currentYear}`
      
      const response = await fetch( url, {
      	  headers: {
      	    'Content-Type': 'application/json',
      	    'x-rapidapi-key' : process.env.RAPID_API_KEY,
      	    'x-rapidapi-host' : process.env.RAPID_API_HOST
      	  },
      	})
      const responseJson = await response.json()
      return responseJson.response[0] 
  
    },

    getLeague : async () =>{
      const response = await fetch( "https://v3.football.api-sports.io/leagues", {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-key' : process.env.RAPID_API_KEY,
          'x-rapidapi-host' : process.env.RAPID_API_HOST
        },
      })
      const responseJson = await response.json()
      return responseJson.response 
    }

 
}
