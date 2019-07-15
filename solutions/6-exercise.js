/*
For this exercise you can look up to https://www.learnrxjs.io/

Exercise:
- create an Observable from array of integers'
- transform and map by multiplying by 10
*/

const { from } = require("rxjs");
const { map } = require("rxjs/operators");

from([1, 2, 3, 4, 5])
    .pipe(
        map(x => x * 10)
    )
    .subscribe(x => console.log(x));
