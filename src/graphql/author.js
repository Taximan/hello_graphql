const { authorRepository } = require('../db')

async function author({ id }) {
    const author = await authorRepository.getOne(id);

    return {
        id: () => author.id,
        firstName: () => author.firstName,
        lastName: () => author.lastName
    };
}

module.exports = { author };