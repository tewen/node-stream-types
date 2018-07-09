const Duplex = require('stream').Duplex;
const Transform = require('stream').Transform;

const dataSetStream = new Duplex({ objectMode: true });
const transformStream = new Transform({ objectMode: true });

transformStream._transform = (chunk, enc, next) => {
  const payload = {
    ...chunk,
    timestamp: new Date()
  };
  transformStream.push(JSON.stringify(payload) + '\n');
  next();
};

dataSetStream.pipe(transformStream).pipe(process.stdout);

const users = [
  { name: 'Lemmy K.' },
  { name: 'Ronnie J.' },
  { name: 'Ozzy O.' }
];

while (users.length) {
  dataSetStream.push(users.shift());
}

dataSetStream.push(null);
