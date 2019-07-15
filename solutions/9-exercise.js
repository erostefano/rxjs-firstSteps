/*
For this exercise you can look up to https://www.learnrxjs.io/

Exercise:
- create an Observable with 2000 and 1000 to handle a delay
- transform and combine with concatMap

As you see mergeMap() doesnt wait for an inner Observable to finish. It works parallel.
*/

const { of } = require("rxjs");
const { mergeMap, delay } = require("rxjs/operators");

of(2000, 1000)
    .pipe(
        mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    )
    .subscribe(val =>
        console.log(`With mergeMap: ${val}`)
    );