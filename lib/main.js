/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isObject = require( '@stdlib/assert-is-object' );
var isFunction = require( '@stdlib/assert-is-function' );
var defineProperty = require( '@stdlib/utils-define-property' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Defines a memoized object property.
*
* @param {Object} obj - object on which to define the property
* @param {(string|symbol)} prop - property name
* @param {Object} desc - property descriptor
* @param {boolean} [desc.configurable=false] - boolean indicating if the property descriptor can be changed and if the property can be deleted from the provided object
* @param {boolean} [desc.enumerable=false] - boolean indicating if the property shows up when enumerating object properties
* @param {boolean} [desc.writable=false] - boolean indicating if the value associated with the property can be changed with an assignment operator
* @param {Function} desc.value - function whose return value will be memoized
* @throws {TypeError} first argument must be an object
* @throws {TypeError} third argument must be an object
* @throws {TypeError} property descriptor `value` property must be a function
*
* @example
* var obj = {};
*
* function foo() {
*     return 'bar';
* }
*
* defineMemoizedProperty( obj, 'foo', {
*     'configurable': false,
*     'enumerable': false,
*     'writable': false,
*     'value': foo
* });
*
* var v = obj.foo;
* // returns 'bar'
*/
function defineMemoizedProperty( obj, prop, desc ) {
	if ( !isObject( obj ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object. Value: `%s`.', obj ) );
	}
	if ( !isObject( desc ) ) {
		throw new TypeError( format( 'invalid argument. Property descriptor must be an object. Value: `%s`.', desc ) );
	}
	if ( !isFunction( desc.value ) ) {
		throw new TypeError( format( 'invalid argument. The `value` property of the property descriptor must be a function. Value: `%s`.', desc.value ) );
	}
	// Copy descriptor properties to a new data descriptor object:
	desc = {
		'configurable': ( desc.configurable === void 0 ) ? false : desc.configurable,
		'enumerable': ( desc.enumerable === void 0 ) ? false : desc.enumerable,
		'writable': ( desc.writable === void 0 ) ? false : desc.writable,
		'value': desc.value
	};

	// Define a configurable (at least temporarily) accessor property:
	defineProperty( obj, prop, {
		'configurable': true,
		'enumerable': desc.enumerable,
		'get': getter,
		'set': ( desc.writable ) ? memoize : void 0
	});

	/**
	* Temporary get accessor.
	*
	* @private
	* @returns {*} property value
	*/
	function getter() {
		var value = desc.value.call( obj );
		memoize( value );
		return value;
	}

	/**
	* Defines a memoized object property.
	*
	* @private
	* @param {*} value - value to set
	*/
	function memoize( value ) {
		desc.value = value;
		defineProperty( obj, prop, desc );
	}
}


// EXPORTS //

module.exports = defineMemoizedProperty;
