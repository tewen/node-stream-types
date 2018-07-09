const Duplex = require('stream').Duplex;
const StringDecoder = require('string_decoder').StringDecoder;
const randomWord = require('./words').randomWord;

const decoder = new StringDecoder('utf-8');
const stream = new Duplex({decodeStrings: false});

stream._write = (chunk, enc, next) => {
  stream.push(`ECHO: ${decoder.write(chunk)}`);
  next();
};

stream._read = () => {

};

process.stdin.pipe(stream).pipe(process.stdout);
