/*
For this exercise you can look up to https://www.learnrxjs.io/

Exercise:
- create an Observable from array of integers'
- filter all even numbers
*/

const { from } = require("rxjs");
const { filter } = require("rxjs/operators");

from([1, 2, 3, 4, 5])
    .pipe(
        filter(x => x % 2 === 0)
    )
    .subscribe(x => console.log(x));
