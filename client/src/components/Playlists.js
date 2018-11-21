import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const PLAYLISTS_QUERY = gql`
  query PlaylistQuery {
    playlists {
      playlist_number
      playlist_title
    }
  }
`

export default () => (
  <Query query={PLAYLISTS_QUERY}>
    {
      ({ loading, error, data }) => {
        if (loading) return <h4>Loading...</h4>
        if (error) console.log(error)
        console.log(data)

        return <p>test</p>
      }
    }
  </Query>
)
