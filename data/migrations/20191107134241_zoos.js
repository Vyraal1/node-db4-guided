exports.up = function(knex) {
  return knex.schema
    .createTable("species", tbl => {
      // the type of the Primary Key is: integer without negative values, also called unsigned
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("animals", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      // define our Foreign Key
      tbl
        .integer("species_id")
        .unsigned()
        .references("id")
        .inTable("species")
        .onDelete("RESTRICT") // about deleting the record from the primary key table. Could be 'RESTRICT', 'NO ACTION', 'SET NULL'
        .onUpdate("CASCADE"); // about changing the value of the primary key table.
      // we have bears and a few animals that are bears.
    })
    .createTable("zoos", tbl => {
      tbl.increments();
      tbl.intger("id");
      tbl.string("name", 255).notNullable();
      tbl.string("address", 255).notNullable();
    })
    .createTable("animal_zoos", tbl => {
      tbl
        .foreign("zoo_id")
        .references("zoos.id")
        .onUpdate()
        .onDelete().notNullable;
      tbl
        .foreign("animal_id")
        .references("animals.id")
        .onUpdate()
        .onDelete().notNullable;
      tbl.date("from");
      tbl.date("to");
    });
};
exports.down = function(knex) {};
// knex ... command not found: knex -> npx knex ... or install knex globally with npm i -g knex
