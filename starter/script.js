'use strict';

///////////////////////////////////////
// this in Practice

var op = 'ds';

const pp = {
  nuni: 'pp',
  cll: function () {
    console.log(this.nuni);
  },
};

pp.cll();

const mv = {
  nuni: 'pppppp',
};

mv.cll = pp.cll;

mv.cll();
