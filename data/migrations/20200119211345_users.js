
exports.up = function(knex) {
    return knex.schema.createTable("users", (users) => {
        users.increments("id");
        users.text("username");
        users.text("password");
        users.boolean("admin").defaultTo(false);
        users.timestamp('created_at').defaultTo(knex.fn.now());
        users.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};

