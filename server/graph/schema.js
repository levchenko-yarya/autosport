const graphql = require('graphql')
const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema, GraphQLNonNull} = graphql

const Driver = require('../models/driver')
const Team = require('../models/team')

const DriverType = new GraphQLObjectType({
    name: 'Driver',
    fields: () => ({
        id: {type: GraphQLID},
        fullname: {type: GraphQLString}
    })
})
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
        driver: {
            type: new GraphQLList(DriverType),
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                if (!args.id) {
                    return Driver.find({})
                }
                return Driver.find({'_id': args.id})
            }
        },
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
        addDriver: {
            type: DriverType,
            args: {
                fullname: {type: GraphQLString}
            },
            resolve(parent, args) {
                let driver = new Driver({
                    fullname: args.fullname
                })
                return driver.save()
            }
        },
        updateDriver: {
            type: DriverType,
            args: {
                id: {type: GraphQLID},
                fullname: {type: GraphQLString}
            },
            resolve(parent, args) {
                return Driver.findByIdAndUpdate(args.id, {
                    fullname: args.fullname
                })
            }
        },
        deleteDriver: {
            type: DriverType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args) {
                return Driver.deleteOne({_id: args.id})
            }
        },

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