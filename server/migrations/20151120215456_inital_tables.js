
exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('authors', (table) => {
		table.increments();
		table.string('name').notNullable();
	})
	.createTableIfNotExists('courses', (table) => {
		table.increments();
		table.string('title').notNullable();
		table.string('length').notNullable();
		table.string('category').notNullable();
		table.integer('author_id').references('id').inTable('authors').onDelete('CASCADE');
	})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors').dropTableIfExists('courses');
};
