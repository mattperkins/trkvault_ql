const axios = require('axios')
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql')

// Playlist Type
const PlaylistType = new GraphQLObjectType({
  name: 'Playlist',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    track: { type: TrackType }
  })
})

// Track Type
const TrackType = new GraphQLObjectType({
  name: 'Track',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    year: { type: GraphQLString },
    composer: { type: GraphQLString },
    genre: { type: GraphQLString },
    instrumental: { type: GraphQLString },
    playlist: { type: PlaylistType }
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
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
