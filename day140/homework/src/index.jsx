import events from "events";
import process from "process";

// hw1
const emitter = new events.EventEmitter();
emitter.on("greet", () => {
  console.log("Hello from hw1!");
});
emitter.emit("greet");

// hw2
const emitter2 = new events.EventEmitter();
emitter2.on("message", (msg, num) => {
  console.log(`Message: ${msg}, Number: ${num}`);
});
emitter2.emit("message", "Hi there", 42);

// hw3
process.stdin.setEncoding("utf8");
console.log("Type something for hw3:");
process.stdin.once("data", (data) => {
  console.log("You typed:", data);
});

// hw4
process.stdin.once("data", (input) => {
  const trimmed = input.trim().toUpperCase();
  console.log("Formatted input (hw4):", trimmed);
});

// hw5
const buffer1 = Buffer.alloc(5);
buffer1.fill("A");
console.log("hw5 buffer:", buffer1);

// hw6
const str = "Hello";
const buffer2 = Buffer.from(str);
console.log("hw6 buffer:", buffer2);

// hw7
const buffer3 = Buffer.from("NodeJS");
const decoded = buffer3.toString();
console.log("hw7 decoded:", decoded);

// hw8
const buffer4 = Buffer.from("ABCDEFG");
buffer4[2] = 90; // ASCII 'Z'
console.log("hw8 modified buffer:", buffer4.toString());
