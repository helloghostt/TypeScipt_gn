// var express = require("express")
// var { createHandler } = require("graphql-http/lib/use/express")
// var { buildSchema } = require("graphql")
 
// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `)
 
// // The root provides a resolver function for each API endpoint
// var root = {
//   hello() {
//     return "Hello world!"
//   },
// }
 
// var app = express()
 
// // Create and use the GraphQL handler.
// app.all(
//   "/graphql",
//   createHandler({
//     schema: schema,
//     rootValue: root,
//   })
// )
 
// // Start the server at port
// app.listen(4000)
// console.log("Running a GraphQL API server at http://localhost:4000/graphql")

// var { ruruHTML } = require("ruru/server")
 
// // Serve the GraphiQL IDE.
// app.get("/", (_req, res) => {
//   res.type("html")
//   res.end(ruruHTML({ endpoint: "/graphql" }))
// })



////////////////////////////////

//query가 3개
// var express = require("express")
// var { createHandler } = require("graphql-http/lib/use/express")
// var { buildSchema } = require("graphql")
 
// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     quoteOfTheDay: String
//     random: Float!
//     rollThreeDice: [Int]
//   }
// `)
 
// // The root provides a resolver function for each API endpoint
// var root = {
//   quoteOfTheDay() {
//     return Math.random() < 0.5 ? "Take it easy" : "Salvation lies within"
//   },
//   random() {
//     return Math.random()
//   },
//   rollThreeDice() {
//     return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6))
//   },
// }
 
// var app = express()
// app.all(
//   "/graphql",
//   createHandler({
//     schema: schema,
//     rootValue: root,
//   })
// )
// var { ruruHTML } = require("ruru/server")
 
// // Serve the GraphiQL IDE.
// app.get("/", (_req, res) => {
//   res.type("html")
//   res.end(ruruHTML({ endpoint: "/graphql" }))
// })

// app.listen(4000)
// console.log("Running a GraphQL API server at localhost:4000/graphql")

{/* <img src="image.png" alt= "ruru로 랜덤데이터 받음"> */}





// 3///
// var express = require("express")
// var { createHandler } = require("graphql-http/lib/use/express")
// var { buildSchema } = require("graphql")
 
// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(/* GraphQL */`
//   type Query {
//     rollDice(numDice: Int!, numSides: Int): [Int]
//   }
// `)
 
// // The root provides a resolver function for each API endpoint
// var root = {
//   rollDice({ numDice, numSides }) {
//     var output = []
//     for (var i = 0; i < numDice; i++) {
//       output.push(1 + Math.floor(Math.random() * (numSides || 6)))
//     }
//     return output
//   },
// }
 
// var app = express()
// app.all(
//   "/graphql",
//   createHandler({
//     schema: schema,
//     rootValue: root,
//   })
// )

// var { ruruHTML } = require("ruru/server")
 
// // Serve the GraphiQL IDE.
// app.get("/", (_req, res) => {
//   res.type("html")
//   res.end(ruruHTML({ endpoint: "/graphql" }))
// })
// app.listen(4000)
// console.log("Running a GraphQL API server at localhost:4000/graphql")



///4////
///randomdie getdie 생성자///
// var express = require("express")
// var { createHandler } = require("graphql-http/lib/use/express")
// var { buildSchema } = require("graphql")
 
// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(/* GraphQL */`
//   type RandomDie {
//     numSides: Int!
//     rollOnce: Int!
//     roll(numRolls: Int!): [Int]
//   }
 
//   type Query {
//     getDie(numSides: Int): RandomDie
//   }
// `)
 
// // This class implements the RandomDie GraphQL type
// class RandomDie {
//   constructor(numSides) {
//     this.numSides = numSides
//   }
 
//   rollOnce() {
//     return 1 + Math.floor(Math.random() * this.numSides)
//   }
 
//   roll({ numRolls }) {
//     var output = []
//     for (var i = 0; i < numRolls; i++) {
//       output.push(this.rollOnce())
//     }
//     return output
//   }
// }
 
// // The root provides the top-level API endpoints
// var root = {
//   getDie({ numSides }) {
//     return new RandomDie(numSides || 6)
//   },
// }
 
// var app = express()
// app.all(
//   "/graphql",
//   createHandler({
//     schema: schema,
//     rootValue: root,
//   })
// )
// var { ruruHTML } = require("ruru/server")
 
// // Serve the GraphiQL IDE.
// app.get("/", (_req, res) => {
//   res.type("html")
//   res.end(ruruHTML({ endpoint: "/graphql" }))
// })

// app.listen(4000)
// console.log("Running a GraphQL API server at localhost:4000/graphql")

// image2.png
// 명령어:
// {
//   getDie(numSides:6){
//     rollOnce
//     roll(numRolls:3)
//   }
// }
// 출력:
// {
//   "data": {
//     "getDie": {
//       "rollOnce": 4,
//       "roll": [
//         6,
//         6,
//         4 //랜덤값나옴
//       ]
//     }
//   }
// }



///////5//////////////

var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(/* GraphQL */`
  input MessageInput {
    content: String
    author: String
  }
 
  type Message {
    id: ID!
    content: String
    author: String
  }
 
  type Query {
    getMessage(id: ID!): Message
  }
 
  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`) // mutation에서 값을 받는다
 
// If Message had any complex fields, we'd put them on this object.
class Message {
  constructor(id, { content, author }) {
    this.id = id
    this.content = content
    this.author = author
  }
}
 
// Maps username to content
var fakeDatabase = {}
 
var root = {
  getMessage({ id }) {
    if (!fakeDatabase[id]) {
      throw new Error("no message exists with id " + id)
    }
    return new Message(id, fakeDatabase[id])
  },
  createMessage({ input }) {
    // Create a random id for our "database".
    var id = require("crypto").randomBytes(10).toString("hex")
 
    fakeDatabase[id] = input
    return new Message(id, input)
  },
  updateMessage({ id, input }) {
    if (!fakeDatabase[id]) {
      throw new Error("no message exists with id " + id)
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input
    return new Message(id, input)
  },
}
 
var app = express()
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
)
var { ruruHTML } = require("ruru/server")
 
// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(4000, () => {
  console.log("Running a GraphQL API server at localhost:4000/graphql")
})


// {
//    	getMessage(id: 1) {
//      	author
//    	}
//    }
//    mutation {
//      createMessage(input: {content:"test content", author:"test author"}) {
//        id
//      	author
//      }
//    }
  
//   query {
//     getMessage(id: ""){
//       content
//     }
//   }