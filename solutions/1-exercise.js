/*
For this exercise you can look up to https://www.learnrxjs.io/

Exercise:
- create an Observable which emits after an interval of 2000 ms'
- create an Observable which emits after an interval of 1000 ms'
- merge to display
*/

const { interval, merge } = require("rxjs");

const obs1$ = interval(2000);
const obs2$ = interval(1000);

merge(obs1$, obs2$).subscribe(x => console.log(x));
