const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const Author = new GraphQLObjectType({
    name: 'Author',
    description: 'Author entity',
    fields: {
        resolve() {
            
        }
    }
});

module.exports = { Author };