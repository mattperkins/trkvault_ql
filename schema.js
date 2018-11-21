const axios = require('axios')
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql')

// Playlist Type
const PlaylistType = new GraphQLObjectType({
  name: 'Playlist',
  fields: () => ({
    id: { type: GraphQLString },
    playlist_number: { type: GraphQLString },
    playlist_title: { type: GraphQLString },
    track: { type: TrackType }
  })
})

// Track Type
const TrackType = new GraphQLObjectType({
  name: 'Track',
  fields: () => ({
    id: { type: GraphQLString },
    track_number: { type: GraphQLString },
    track_title: { type: GraphQLString },
    duration: { type: GraphQLString },
    genre: { type: GraphQLString },
    composer: { type: GraphQLString },
    year_recorded: { type: GraphQLString },
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
        return axios.get('http://localhost:6000/playlists')
          .then(res => res.data)
      }
    },
    playlist: {
      type: PlaylistType,
      args: {
        playlist_number: { type: GraphQLString }
      },
      resolve (parent, args) {
        return axios.get(`http://localhost:6000/playlists/${args.playlist_number}`)
          .then(res => res.data)
      }
    },
    tracks: {
      type: new GraphQLList(TrackType),
      resolve (parent, args) {
        return axios.get('http://localhost:6000/tracks')
          .then(res => res.data)
      }
    },
    track: {
      type: TrackType,
      args: {
        track_number: { type: GraphQLString }
      },
      resolve (parent, args) {
        return axios.get(`http://localhost:6000/tracks/${args.track_number}`)
          .then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
