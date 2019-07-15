/*
For this exercise you can look up to https://www.learnrxjs.io/

Exercise:
- create an Observable from array of integers'
- filter the first event
*/

const { from } = require("rxjs");
const { first } = require("rxjs/operators");

from([1, 2, 3, 4, 5])
    .pipe(
        first()
    )
    .subscribe(x => console.log(x));
