import { gql } from 'apollo-boost'

export const PLAYLISTS_QUERY = gql`
  query PlaylistsQuery {
    playlists {
      id
      playlistNumber
      playlistTitle
    }
  }
`
