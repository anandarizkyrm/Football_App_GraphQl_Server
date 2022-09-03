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

    getByPlayerId: (parent, { id }, { db }) => {
      return db.playersDb.find((player) => player.id == id);
    },

 
}