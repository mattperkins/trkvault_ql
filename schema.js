const axios = require('axios')
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql')

// Playlist Type
const PlaylistType = new GraphQLObjectType({
  name: 'Playlist',
  fields: () => ({
    playlist_number: { type: GraphQLString },
    playlist_title: { type: GraphQLString },
    track: { type: TrackType }
  })
})

// Track Type
const TrackType = new GraphQLObjectType({
  name: 'Track',
  fields: () => ({
    track_number: { type: GraphQLString },
    track_title: { type: GraphQLString },
    duration: { type: GraphQLString },
    genre: { type: GraphQLString },
    composer: { type: GraphQLString },
    year_recorded: { type: GraphQLString },
    instrumental: { type: GraphQLString },
    playlist_title: { type: PlaylistType }
  })
})

// Root Query "Endpoint Resolvers" < resolve data
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    // GraphQL List
    playlists: {
      type: new GraphQLList(PlaylistType),
      resolve (parent, args) {
        return axios.get('https://api.trkvault.libtrig.com/')
          .then(res => res.data)
      }
    },
    playlist: {
      type: PlaylistType,
      args: {
        id: { type: GraphQLString }
      },
      resolve (parent, args) {
        return axios.get(`https://api.trkvault.libtrig.com/${args.id}`)
          .then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
