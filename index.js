const  { ApolloServer } = require('apollo-server');
const {typeDefs} = require('./schema')
const { Query } = require('./resolver/Query')


const server = new ApolloServer({
    typeDefs, 
    resolvers : {
      Query
    },
    csrfPrevention: true,
})

server.listen().then(({url})=>{
  console.log("Server Run on " + url)
})