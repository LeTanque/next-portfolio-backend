

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/portfolio.db3',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations',
        },
        seeds: {
            directory: './data/seeds',
        }
    },

    production: {
        client: 'sqlite3',
        connection: {
            filename: './data/portfolio.db3',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations',
        },
        seeds: {
            directory: './data/seeds',
        }
    }

};
