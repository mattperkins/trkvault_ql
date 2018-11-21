const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const app = express()

// Allow cross origin resources
// Communcation between Graphql Server and React Client
app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on ${PORT}`)
)
