
exports.up = function(knex) {
    return knex.schema.createTable("posts", (posts) => {
        posts.increments("id");
        posts.text("title");
        posts.text("body");
        posts.text("author");
        posts.timestamp('created_at').defaultTo(knex.fn.now());
        posts.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
