const Writable = require('stream').Writable;
const StringDecoder = require('string_decoder').StringDecoder;
const randomWord = require('./words').randomWord;

const decoder = new StringDecoder('utf-8');
const stream = new Writable({decodeStrings: false});

stream._write = (chunk, enc, next) => {
  console.log(decoder.write(chunk));
  next();
};

stream.write(randomWord());

process.stdin.pipe(stream);

setTimeout(() => {
  stream.end('DONE!');
}, 5000);

stream.on('finish', () => {
  console.log('ALL DONE');
});
