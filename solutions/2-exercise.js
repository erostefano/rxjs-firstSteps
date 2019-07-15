/*
For this exercise you can look up to https://www.learnrxjs.io/

Exercise:
- create an Observable from array of integers'
*/

const { from } = require("rxjs");

from([1, 2, 3, 4, 5]).subscribe(x => console.log(x));
