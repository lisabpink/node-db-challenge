
exports.seed = function(knex) {
 
  return knex('projects').truncate()
    .then(function () {

      return knex('projects').insert([
        {name: 'create a react app', description: 'How to start a react app from nothing in an empty directory.'},
        {name: 'make a node project', description: 'How to make a node project from nothing in an empty directory.'},
        {name: 'start a knex database', description: 'How to create a knex database from nothing in an empty directory.'}
      ]);
    });
};
