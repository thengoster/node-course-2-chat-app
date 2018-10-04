const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Admin';
    const text = 'Hello there';
    const msg = generateMessage(from, text);

    expect(msg).toInclude({from, text});
    expect(msg.createdAt).toBeA('number');
  });
});
