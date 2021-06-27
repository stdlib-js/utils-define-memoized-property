<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Define Memoized Property

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Define][mdn-define-property] a memoized object property.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-define-memoized-property
```

</section>

<section class="usage">

## Usage

```javascript
var defineMemoizedProperty = require( '@stdlib/utils-define-memoized-property' );
```

#### defineMemoizedProperty( obj, prop, descriptor )

[Defines][mdn-define-property] a memoized object property.

```javascript
var obj = {};

function foo() {
    return 'bar';
}

defineMemoizedProperty( obj, 'foo', {
    'configurable': false,
    'enumerable': true,
    'writable': false,
    'value': foo
});

var v = obj.foo;
// returns 'bar'
```

A property `descriptor` has the following required properties:

-   **value**: synchronous function whose return value will be memoized and set as the property value.

A property `descriptor` has the following optional properties:

-   **configurable**: `boolean` indicating if property descriptor can be changed and if the property can be deleted from the provided object. Default: `false`.
-   **enumerable**: `boolean` indicating if the property shows up when enumerating object properties. Default: `false`.
-   **writable**: `boolean` indicating if the value associated with the property can be changed with an assignment operator. Default: `false`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Until deferred evaluation, an object property is **configurable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var fibonacci = require( '@stdlib/math-base-special-fibonacci' );
var defineMemoizedProperty = require( '@stdlib/utils-define-memoized-property' );

function Foo() {
    var self;
    if ( !(this instanceof Foo) ) {
        return new Foo();
    }
    self = this;
    this.count = 0;
    defineMemoizedProperty( this, 'fibo', {
        'value': fibo
    });
    return this;

    function fibo() {
        self.count += 1;
        return fibonacci( 73 );
    }
}

var foo = new Foo();

var i;
for ( i = 0; i < 10; i++ ) {
    console.log( 'F: %d. Count: %d.', foo.fibo, foo.count );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-define-memoized-property.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-define-memoized-property

[test-image]: https://github.com/stdlib-js/utils-define-memoized-property/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-define-memoized-property/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-define-memoized-property/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-define-memoized-property?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-define-memoized-property.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-define-memoized-property/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-define-memoized-property/main/LICENSE

[mdn-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

</section>

<!-- /.links -->
