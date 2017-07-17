const TABLE_NAME = 'books';

module.exports = function Book(db) {
    return {
        initialize() {
            return db
                .exec(`
                    create table if not exists ${TABLE_NAME} (
                        id integer primary key autoincrement,
                        title text not null,
                        created_at datetime default current_timestamp,
                        author_id int not null
                    );
                `)
                .catch(err => {
                    console.log(`Book#initilize failed\n`, err);
                    process.exit();
                })
        },

        create({ title, created_at, authorId }) {
            return db.run(`
                insert into ${TABLE_NAME} (title, created_at, author_id)
                values (?, ?, ?)
            `, [title, created_at, authorId]);
        },

        async getOne(id) {
            const book = await db.get(`
                select id, title, created_at, author_id
                from ${TABLE_NAME}
                where id = ?
            `, [id]);

            return {
                title: book.title,
                created_at: book.created_at,
                author_id: book.author_id
            };
        }

    }
}