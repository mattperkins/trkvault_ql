import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PlaylistItem from './PlaylistItem'

const PLAYLISTS_QUERY = gql`
  query PlaylistQuery {
    playlists {
      id
      playlistNumber
      playlistTitle
    }
  }
`

export default () => (
  <React.Fragment>
    <Query query={PLAYLISTS_QUERY}>
      {
        ({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>
          if (error) console.log(error)
          /* console.log(data)  */

          return <React.Fragment>
            {
              data.playlists.map(playlist => (
                <PlaylistItem key={playlist.id} playlist={playlist} />
              ))
            }
          </React.Fragment>
        }
      }
    </Query>
  </React.Fragment>
)
