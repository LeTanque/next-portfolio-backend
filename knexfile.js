const dbConnection = process.env.DATABASE_URL || "localhost";


module.exports = {

    development: {
        client: 'pg',
        connection: dbConnection,
        migrations: {
            directory: './data/migrations',
            tableName: 'knex_migrations',
        },
        seeds: {
            directory: './data/seeds',
        },
        useNullAsDefault: true,
    },

    production: {
        client: 'pg',
        connection: dbConnection,
        migrations: {
            directory: './data/migrations',
            tableName: 'knex_migrations',
        },
        seeds: {
            directory: './data/seeds',
        },
        useNullAsDefault: true,
    }

};
