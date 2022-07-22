'use strict';

///////////////////////////////////////
// this in Practice

var op = 'ds';

const pp = {
  nuni: 'pp',
  tuni: 'iii',
  cll: function () {
    console.log(this.nuni);

    const mill = () => {
      console.log(this.tuni);
    };
    mill();
  },
};

pp.cll();

const mv = {
  nuni: 'pppppp',
  tuni: 'ooo',
};

mv.cll = pp.cll;

mv.cll();

// primitive & referencec

let age = 30;
let ageo = age;

age = 31;

console.log(age);
console.log(ageo);

const opyo = {};
