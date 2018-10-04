const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Admin';
    const text = 'Hello there';
    const msg = generateMessage(from, text);

    expect(msg).toInclude({from, text});
    expect(msg.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Admin';
    const latitude = 50;
    const longitude = 100;
    const url = 'https://www.google.com/maps?q=50,100';
    const msg = generateLocationMessage(from, latitude, longitude);

    expect(msg).toInclude({from, url});
    expect(msg.createdAt).toBeA('number');
  });
});

