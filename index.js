const  { ApolloServer } = require('apollo-server-express');
var cors = require('cors')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const express = require('express');
const http = require('http');
const {typeDefs} = require('./schema')
const { Query } = require('./resolver/Query')
const { Tester } = require('./resolver/Tester')
const  { db } = require('./db')

const dotenv = require('dotenv')

dotenv.config()

// const app = express()
// const server = new ApolloServer({
//     typeDefs, 
//     resolvers : {
//       Query,
//       Tester
//     },
//     csrfPrevention: true,
//     cache: "bounded",
//     cors: {
//       origin: ["http://localhost:3000", "https://footballappgraphqlserver-production.up.railway.app"]
//     },
//     // plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
//     context : {
//       db
//     }
// })

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true
// }
// server.start().then(()=>
// {server.applyMiddleware({ app, cors: corsOptions });
// })

// server.listen().then(({url})=>{
//   console.log("Server Run on " + url)
// })



async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const {Query , Tester} = resolvers
  const httpServer = http.createServer(app);
  const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

  const server = new ApolloServer({
    typeDefs, 
    resolvers : {
      Query,
      Tester
    },
    csrfPrevention: true,
    cache: "bounded",
    // cors: {
    //   origin: ["http://localhost:3000", "https://footballappgraphqlserver-production.up.railway.app"]
    // },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context : {
      db
    }
  });
  app.use(cors(corsOptions))

  await server.start();

  server.applyMiddleware({ app , cors : corsOptions});

  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}


startApolloServer(typeDefs, {Query, Tester})