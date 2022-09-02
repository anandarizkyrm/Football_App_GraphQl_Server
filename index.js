const  { ApolloServer } = require('apollo-server');
const {typeDefs} = require('./schema')
const { Query } = require('./resolver/Query')
const { Tester } = require('./resolver/Tester')
const  { db } = require('./db')

const dotenv = require('dotenv')

dotenv.config()


const server = new ApolloServer({
    typeDefs, 
    resolvers : {
      Query,
      Tester
    },
    csrfPrevention: true,
    context : {
      db
    }
})

server.listen().then(({url})=>{
  console.log("Server Run on " + url)
})