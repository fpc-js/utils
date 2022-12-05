# @fpc/utils

<div align="center">
  <a href="https://drone.tno.sh/fpc-js/utils" target="_blank">
    <img src="https://drone.tno.sh/api/badges/fpc-js/utils/status.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://snyk.io/test/github/fpc-js/utils?targetFile=package.json">
    <img src="https://snyk.io/test/github/fpc-js/utils/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/fpc-js/utils?targetFile=package.json" style="max-width:100%;">
  </a>
  <a href="https://codecov.io/gh/fpc-js/utils" target="_blank">
    <img src="https://codecov.io/gh/fpc-js/utils/branch/master/graph/badge.svg?token=2UNN6HN74S" alt="Coverage Status">
  </a>
  <a href="https://github.com/semantic-release/semantic-release" target="_blank">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release">
  </a>
</div>

Collection of generic utilities.

## API

### [bound](https://github.com/fpc-js/utils/blob/master/src/bound.js)

Clamps a number within a given range.

```javascript
import { bound } from '@fpc/utils';

bound(1, 4, 6); // 4
bound(5, 4, 6); // 5
bound(7, 4, 6); // 6
```

### [call](https://github.com/fpc-js/utils/blob/master/src/call.js)

Calls an object's method.

`call(obj, 'methodName')` throws a `TypeError` if `obj.methodName` isn't a function.

```javascript
import { call } from '@fpc/utils';

const obj = {
  someMethod: arg => console.log('hello, ' + arg)
};

call(obj, 'someMethod', 'world'); // logs 'hello, world'

// same as '1,2,3'.split(',')
call('1,2,3', 'split', ','); // [ '1', '2', '3' ]
```

### [curry](https://github.com/fpc-js/utils/blob/master/src/curry.js)

Creates a copy of a function that supports [partial application](https://en.wikipedia.org/wiki/Partial_application).

```javascript
import { curry } from '@fpc/utils';

const sum = curry((x, y) => x + y);
sum(1, 2); // 3

const add2 = sum(2);
add2(3); // 5
```

`curry` assumes the given function has exactly [Function.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
parameters. This behavior can be changed via the second argument:

```javascript
import { curry } from '@fpc/utils';

const concatArrays = (...arrays) =>
  arrays.reduce((acc, array) => acc.concat(array), []);

concatArrays([ 1, 2 ], [ 3 ], [ 4, 5 ]); // [ 1, 2, 3, 4, 5 ]

curry(concatArrays); // TypeError: Expected positive integer, got 0
curry(concatArrays, 3)([ 1, 2 ], [ 3 ])([ 4 ]); // [ 1, 2, 3, 4 ]
```

### [deferred](https://github.com/fpc-js/utils/blob/master/src/deferred.js)

Returns a deferred object, like the obsolete [Promise.defer](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred).

It should be used with caution when a promise is created in a function and
have to be resolved or rejected in a different function.

### [delay](https://github.com/fpc-js/utils/blob/master/src/delay.js)

Postpones the execution of a function. Takes an [executor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#Syntax)
as argument and returns a promise just like the `Promise` constructor.

```javascript
import { delay } from '@fpc/utils';

delay(resolve => resolve('hello')).then(console.log); // logs 'hello'
```

The executor always runs asynchronously (during the next event cycle):

```javascript
new Promise((resolve, reject) => {
	console.log(1);
	resolve();
});

console.log(2);

// logs `1` then `2`
```

```javascript
delay((resolve, reject) => {
  console.log(1);
  resolve();
});

console.log(2);

// logs `2` then `1`
```

Takes the delay in number of milliseconds as second argument (default to `0`):

```javascript
delay(resolve => resolve(1), 1000)
  .then(res => console.log(`After a whole second the result is ${res}`));
```

### [failWith](https://github.com/fpc-js/utils/blob/master/src/failWith.js)

Throws an error but, unlike [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
), it's an expression.

Wraps its input in an `Error` if it doesn't contain a `stack` and a `message`.

```javascript
import { failWith } from '@fpc/utils';

const someFn = (...args) =>
  args.length > 0 || failWith(new Error('No args'));
```

### [first](https://github.com/fpc-js/utils/blob/master/src/first.js)

Takes an [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)
and returns the first element.

```javascript
import { first } from '@fpc/utils';

first('abc'); // 'a'
first([ 1, 2, 3 ]); // 1

const iterable = {
  [Symbol.iterator]: () => ({
    next: () => ({
      done: false,
      value: 5,
    })
  })
};

first(iterable); // 5
```

### [flip](https://github.com/fpc-js/utils/blob/master/src/flip.js)

Creates a copy of a function that takes its arguments in reversed order.

```javascript
import { flip } from '@fpc/utils';

const cat = (...args) => args.reduce((acc, arg) => acc + arg, '');
const revCat = flip(cat);

revCat(1, 2, 3) === cat(3, 2, 1);
```

### [hasOwnProperty](https://github.com/fpc-js/utils/blob/master/src/hasOwnProperty.js)

Works like [Object.prototype.hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty).
This function exists to cover some edge-cases:

```javascript
const obj = { prop: 'value', hasOwnProperty: '' };
obj.hasOwnProperty('value'); // TypeError: obj.hasOwnProperty is not a function
```

```javascript
Object.create(null).hasOwnProperty('any'); // throws TypeError
```

See also [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins
).

```javascript
import { hasOwnProperty } from '@fpc/utils';

hasOwnProperty(null, 'lang'); // false
hasOwnProperty({}, 'lang'); // false
hasOwnProperty({ lang: 'it' }, 'lang'); // true

hasOwnProperty({}, 'toString'); // false
```

### [identity](https://github.com/fpc-js/utils/blob/master/src/identity.js)

Shortcut for `x => x`.

### [last](https://github.com/fpc-js/utils/blob/master/src/last.js)

Takes an [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)
and returns the last element.

```javascript
import { last } from '@fpc/utils';

last('abc'); // 'c'
last([ 1, 2, 3 ]); // 3
```

### [lazy](https://github.com/fpc-js/utils/blob/master/src/lazy.js)

Returns a memoized version of a function.

```javascript
import { lazy } from '@fpc/utils';

const counter = (() => {
  let count = 0;

  return () => count++;
})();

const lazyCounter = lazy(counter);

lazyCounter(); // 0
lazyCounter(); // 0
lazyCounter.update(); // 1
```

### [log](https://github.com/fpc-js/utils/blob/master/src/log.js)

Logs its arguments to console, then returns the first one.

If global object [console](https://developer.mozilla.org/en-US/docs/Web/API/console
)
doesn't exist, acts like `identity` function without rising errors.


### [negate](https://github.com/fpc-js/utils/blob/master/src/negate.js)

```javascript
import { negate } from '@fpc/utils';

const isOdd = x => x % 2 !== 0;
[1, 2, 3, 4].filter(negate(isOdd)); // [ 2, 4 ]
```

### [prop](https://github.com/fpc-js/utils/blob/master/src/prop.js)

Returns an object property value, or [undefined][Glob-undefined].
Doesn't throw errors.

```javascript
import { prop } from '@fpc/utils';

prop({ propertyName: 'val' }, 'propertyName'); // 'val'
prop(null, 'propertyName'); // undefined
```

### [range](https://github.com/fpc-js/utils/blob/master/src/range.js)

```javascript
import { range } from '@fpc/utils';

range(1, 3); // [ 1, 2, 3 ]
range(-1, 1); // [ -1, 0, 1 ]
range(2, 10, 2); // [ 2, 4, 6, 8, 10 ]
```

### [second](https://github.com/fpc-js/utils/blob/master/src/second.js)

Takes an [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)
and returns the second element.

```javascript
import { second } from '@fpc/utils';

second('abc'); // 'b'
second([ 1, 2, 3 ]); // 2

const iterable = {
  [Symbol.iterator]: () => ({
    next: () => ({
      done: false,
      value: 5,
    })
  })
};

second(iterable); // 5
```
