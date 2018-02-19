const Readable = require('stream').Readable;
const randomWord = require('./words').randomWord;

const stream = new Readable();

let idx = 0;
stream._read = () => {
  setTimeout(() => {
    if (idx < 10) {
      stream.push(randomWord());
      idx++
    } else {
      stream.push(null);
    }
  }, 500);
};

stream.pipe(process.stdout);

// stream.on('data', (chunk) => {
//   console.log(`DATA: ${chunk}`);
// });

stream.on('end', () => {
  console.log('We\'re over');
});
