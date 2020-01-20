
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
      .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          { username: "letanque", password: "$2a$05$HJZ3wx.RNVOJkJypier9OOyNVanY3XmTab1h1xJf6gGgI6y3xO9Nq", admin: true }
      ]);
  });
};
