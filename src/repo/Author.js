const TABLE_NAME = 'authors';

module.exports = function Author(db) {
    return {
        initialize() {
            return db
                .exec(` 
                    create table if not exists ${TABLE_NAME} (
                        id integer primary key autoincrement,
                        first_name text not null,
                        last_name text not null,
                        born_at datetime default current_timestamp
                   );
                `)
                .catch(err => {
                    console.log(`Author#initilize failed\n`, err);
                    process.exit();
                })
        },

        create({ firstName, lastName, bornAt }) {
            return db.run(`
                insert into ${TABLE_NAME} (first_name, last_name, born_at)
                values (?, ?, ?)
            `, [firstName, lastName, bornAt]);
        },

        async getOne(id) {
            const author = await db.get(`
                select id, first_name, last_name, born_at
                from ${TABLE_NAME}
                where id = ?
            `, [id]);

            return {
                id: author.id,
                firstName: author.first_name,
                lastName: author.last_name,
                bornAt: author.born_at
            };
        }

    }
}