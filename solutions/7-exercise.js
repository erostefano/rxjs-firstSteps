/*
For this exercise you can look up to https://www.learnrxjs.io/

Exercise:
- create an Observable from array of integers'
- transform and map by multiplying by 10
- log 'RxJS makes fun!' by tapping
*/

const { from } = require("rxjs");
const { map, tap } = require("rxjs/operators");

from([1, 2, 3, 4, 5])
    .pipe(
        map(x => x * 10),
        tap(x => console.log('RxJS makes fun!')),
    )
    .subscribe(x => console.log(x));
