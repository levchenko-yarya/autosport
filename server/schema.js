const graphql = require('graphql')
const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema, GraphQLNonNull} = graphql

const Driver = require('./models/driver')
const Team = require('./models/team')

const DriverType = new GraphQLObjectType({
    name: 'Driver',
    fields: () => ({
        id: {type: GraphQLID},
        fullname: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        driver: {
            type: new GraphQLList(DriverType),
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                if(!args.id) {
                    return Driver.find({})
                }
                return Driver.find({'_id': args.id})
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
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})