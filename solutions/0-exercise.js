/*
For this exercise you can look up to https://www.learnrxjs.io/

Exercise:
- create an Observable of 1,2,3     -1-2-3-
- create an Observable of 4,5,6     -4-5-6
- concat both Observable            -1-2-3-4-5-6
*/

const { of, concat } = require("rxjs");

const obs1$ = of(1, 2, 3);
const obs2$ = of(4, 5, 6);

concat(obs1$, obs2$).subscribe(x => console.log(x));
