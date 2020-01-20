
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('posts').del()
        .then(function () {
        // Inserts seed entries
        return knex('posts').insert([
            { title: "Hello, friend", body: "My name is Frank Martinez", author: "le Tanque" }
        ]);
    });
};
