import * as React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Playlists from './playlists'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends React.Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Playlists />
      </ApolloProvider>
    )
  }
}

export default App
