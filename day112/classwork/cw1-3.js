import { square } from "./cw1-1.js";
import { isEven } from "./cw1-2.js";

const number = 5;

const squared = square(number);

const result = isEven(squared);

console.log(`Is the number ${squared} even? → ${result}`);
