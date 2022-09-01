import { ApolloServer } from 'apollo-server';

const server = new ApolloServer()

server.listen().then(({url})=>{
  console.log("Server Run on Server" + url)
})