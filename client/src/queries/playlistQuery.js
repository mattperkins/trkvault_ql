import { gql } from 'apollo-boost'

export const PLAYLISTS_QUERY = gql`
  query PlaylistQuery {
    playlists {
      id
      playlistNumber
      playlistTitle
    }
  }
`
