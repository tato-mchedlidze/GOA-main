// cw1
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function listener(data) {
  console.log(data);
}

myEmitter.on("welcome", listener);

myEmitter.emit("welcome", "Hello! Welcome event was triggered.");


// cw2
const nameBuffer = Buffer.from("Z");

const userInput = "Hello ";

const userBuffer = Buffer.from(userInput);

const newBuffer = Buffer.concat([userBuffer, nameBuffer]);

const text = newBuffer.toString();

process.stdout.write(text);
