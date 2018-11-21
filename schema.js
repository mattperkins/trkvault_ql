const axios = require('axios')
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql')

// Playlist Type
const PlaylistType = new GraphQLObjectType({
  name: 'Playlist',
  fields: () => ({
    id: { type: GraphQLString },
    playlistNumber: { type: GraphQLString },
    playlistTitle: { type: GraphQLString },
    track: { type: TrackType }
  })
})

// Track Type
const TrackType = new GraphQLObjectType({
  name: 'Track',
  fields: () => ({
    id: { type: GraphQLString },
    trackNumber: { type: GraphQLString },
    trackTitle: { type: GraphQLString },
    duration: { type: GraphQLString },
    genre: { type: GraphQLString },
    composer: { type: GraphQLString },
    yearRecorded: { type: GraphQLString },
    instrumental: { type: GraphQLString },
    playlist: { type: PlaylistType }
  })
})

// Root Query "Endpoint Resolvers" < resolve data
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    playlists: {
      type: new GraphQLList(PlaylistType),
      resolve (parent, args) {
        return axios.get('http://localhost:2000/playlists')
          .then(res => res.data)
      }
    },
    playlist: {
      type: PlaylistType,
      args: {
        playlistNumber: { type: GraphQLString }
      },
      resolve (parent, args) {
        return axios.get(`http://localhost:2000/playlists/${args.playlistNumber}`)
          .then(res => res.data)
      }
    },
    tracks: {
      type: new GraphQLList(TrackType),
      resolve (parent, args) {
        return axios.get('http://localhost:2000/tracks')
          .then(res => res.data)
      }
    },
    track: {
      type: TrackType,
      args: {
        trackNumber: { type: GraphQLString }
      },
      resolve (parent, args) {
        return axios.get(`http://localhost:2000/tracks/${args.trackNumber}`)
          .then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
