import * as React from 'react'
import { Query } from 'react-apollo'
import PlaylistsItem from './PlaylistsItem'
import { PLAYLISTS_QUERY } from '../queries/playlistsQuery'

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
                <PlaylistsItem key={playlist.id} playlist={playlist} />
              ))
            }
          </React.Fragment>
        }
      }
    </Query>
  </React.Fragment>
)
