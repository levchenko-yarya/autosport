const graphql = require('graphql')
const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema, GraphQLNonNull} = graphql

const Team = require('../models/team')

const TeamType = new GraphQLObjectType({
    name: 'Team',
    fields: () => ({
        id: {type: GraphQLID},
        teamName: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        team: {
            type: new GraphQLList(TeamType),
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                if (!args.id) {
                    return Team.find({})
                }
                return Team.find({'_id': args.id})
            }
        }
    }
})


const Mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        addTeam: {
            type: TeamType,
            args: {
                teamName: {type: GraphQLString}
            },
            resolve(parent, args) {
                let team = new Team({
                    teamName: args.teamName
                })
                return team.save()
            }
        },
        updateTeam: {
            type: TeamType,
            args: {
                id: {type: GraphQLID},
                teamName: {type: GraphQLString}
            },
            resolve(parent, args) {
                return Team.findByIdAndUpdate(args.id, {
                    teamName: args.teamName
                })
            }
        },
        deleteTeam: {
            type: TeamType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args) {
                return Team.deleteOne({_id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})