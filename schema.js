import { GraphQLObjectType, GraphQLString } from 'graphql'

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
