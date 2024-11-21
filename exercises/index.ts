import {exercise1} from "./src/exercise-1.ts";
import {exercise2} from "./src/exercise-2.ts";
import {exercise3} from "./src/exercise-3.ts";
import {exercise4} from "./src/exercise-4.ts";

let start = performance.now();
await exercise1();
console.log(`Exercise 1 - Execution Time: ${performance.now() - start}ms`);

start = performance.now();
await exercise2();
console.log(`Exercise 2 - Execution Time: ${performance.now() - start}ms`);

start = performance.now();
await exercise3();
console.log(`Exercise 3 - Execution Time: ${performance.now() - start}ms`);

start = performance.now();
await exercise4();
console.log(`Exercise 4 - Execution Time: ${performance.now() - start}ms`);