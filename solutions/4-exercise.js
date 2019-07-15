/*
For this exercise you can look up to https://www.learnrxjs.io/

Exercise:
- create an Observable from array of integers'
- filter and take the three events
*/

const { from } = require("rxjs");
const { take } = require("rxjs/operators");

from([1, 2, 3, 4, 5])
    .pipe(
        take(3)
    )
    .subscribe(x => console.log(x));
