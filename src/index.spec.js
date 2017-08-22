const config = require('./index.js');

describe('babel-preset-immowelt', () => {
	it('should export a valid object structure that contains the flow-strip-types transform.', () => {
		expect(typeof config).toBe('object');
		expect(config.plugins).toBeDefined();
		expect(config.plugins instanceof Array).toBe(true);
		expect(config.plugins[0]).toBe('flow-strip-types');
	});
});
