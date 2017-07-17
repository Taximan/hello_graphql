const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const { schema, root } = require('./graphql/schema');

const app = new Koa();

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
})));

app.listen(4000, () => {
    console.log('server running @ localhost:4000');
});