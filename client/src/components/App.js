import * as React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Playlists from './playlists'
import Playlist from './playlist'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends React.Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className='wrapper'>
            <Route exact path='/' component={Playlists} />
            <Route exact path='/playlist/:id' component={Playlist} />
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
