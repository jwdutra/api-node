const mongoose = require('mongoose');

/**
 *
 *
 * @class baseSchema
 * @extends {mongoose.Schema}
 */
class baseSchema extends mongoose.Schema {

	constructor(obj, options) {
		super(obj, options);
		this.add({
			createdAt: { type: Date, select: false },
			updatedAt: { type: Date, select: false },
		});

		this.set('timestamps', true);
		this.set('toJson', { virtuals: true, getters: true, });
		this.set('toObject', { virtuals: true, getters: true, });

	}

};

module.exports = baseSchema;
