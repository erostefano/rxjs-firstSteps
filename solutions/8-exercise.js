/*
For this exercise you can look up to https://www.learnrxjs.io/

Exercise:
- create an Observable with 2000 and 1000 to handle a delay
- transform and combine with concatMap

As you see concatMap() waits for an inner Observable to finish. It works sequential.
*/

const { of } = require("rxjs");
const { concatMap, delay } = require("rxjs/operators");

of(2000, 1000)
    .pipe(
        concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    )
    .subscribe(val =>
        console.log(`With concatMap: ${val}`)
    );
