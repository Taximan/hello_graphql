const { buildSchema } = require('graphql');
const path = require('path')
const fs = require('fs');

const schemaLocalization = path.join(__dirname, './schema.gql');
const schemaTxt = fs.readFileSync(schemaLocalization, 'utf-8');

const schema = buildSchema(schemaTxt);

const root =  {
    hello() {
        return 'bye world';
    }
};

module.exports = { schema, root };