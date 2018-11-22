import { gql } from 'apollo-boost'

export const PLAYLIST_QUERY = gql`
  query PlaylistQuery($id: String!) {
    playlist(id: $id) {
      id
      playlistNumber
      playlistTitle
      track {
        trackNumber
        trackTitle
        duration
        genre
        composer
        yearRecorded
        instrumental
      }
    }
  }
`
