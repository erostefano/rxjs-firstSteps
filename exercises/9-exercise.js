/*
For this exercise you can look up to https://www.learnrxjs.io/

Exercise:
- create an Observable with 2000 and 1000 to handle a delay
- transform and combine with concatMap

As you see mergeMap() doesnt wait for an inner Observable to finish. It works parallel.
*/

const { of } = require("rxjs");
const { mergeMap, delay } = require("rxjs/operators");

