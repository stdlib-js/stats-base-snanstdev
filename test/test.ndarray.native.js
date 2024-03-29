/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var floor = require( '@stdlib/math-base-special-floor' );
var abs = require( '@stdlib/math-base-special-abs' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var EPS = require( '@stdlib/constants-float32-eps' );
var sqrt = require( '@stdlib/math-base-special-sqrt' );
var Float32Array = require( '@stdlib/array-float32' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var snanstdev = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( snanstdev instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof snanstdev, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', opts, function test( t ) {
	t.strictEqual( snanstdev.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the population standard deviation of a strided array (ignoring `NaN` values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ] );

	v = snanstdev( x.length, 0, x, 1, 0 );
	expected = float64ToFloat32( sqrt( 53.5/(x.length-1) ) );
	delta = abs( v - expected );
	tol = 1.0 * EPS * abs( expected );
	t.strictEqual( delta <= tol, true, 'within tolerance. Actual: '+v+'. E: '+expected+'. tol: '+tol+'. Δ: '+delta+'.' );

	x = new Float32Array( [ 1.0, NaN, NaN, -2.0, NaN, -4.0, NaN, 5.0, NaN, 0.0, 3.0, NaN ] ); // eslint-disable-line max-len

	v = snanstdev( x.length, 0, x, 1, 0 );
	expected = float64ToFloat32( sqrt( 53.5/(x.length-6) ) );
	delta = abs( v - expected );
	tol = 1.0 * EPS * abs( expected );
	t.strictEqual( delta <= tol, true, 'within tolerance. Actual: '+v+'. E: '+expected+'. tol: '+tol+'. Δ: '+delta+'.' );

	x = new Float32Array( [ -4.0, NaN ] );

	v = snanstdev( x.length, 0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );

	v = snanstdev( x.length, 0, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN ] );
	v = snanstdev( x.length, 0, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ 4.0 ] );
	v = snanstdev( x.length, 0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float32Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = 100.0;
	}
	v = snanstdev( x.length, 0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ] ); // eslint-disable-line max-len
	v = snanstdev( x.length, 0, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = NaN;
	}
	v = snanstdev( x.length, 0, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sample standard deviation of a strided array (ignoring `NaN` values)', opts, function test( t ) {
	var x;
	var v;
	var i;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ] );

	v = snanstdev( x.length, 1, x, 1, 0 );
	t.strictEqual( v, float64ToFloat32( sqrt( 53.5/(x.length-2) ) ), 'returns expected value' );

	x = new Float32Array( [ 1.0, NaN, NaN, -2.0, NaN, -4.0, NaN, 5.0, NaN, 0.0, 3.0, NaN ] ); // eslint-disable-line max-len

	v = snanstdev( x.length, 1, x, 1, 0 );
	t.strictEqual( v, float64ToFloat32( sqrt( 53.5/(x.length-7) ) ), 'returns expected value' );

	x = new Float32Array( [ -4.0, NaN ] );

	v = snanstdev( x.length, 1, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );

	v = snanstdev( x.length, 1, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN ] );
	v = snanstdev( x.length, 1, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ 4.0 ] );
	v = snanstdev( x.length, 1, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = 100.0;
	}
	v = snanstdev( x.length, 1, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ] ); // eslint-disable-line max-len
	v = snanstdev( x.length, 1, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = NaN;
	}
	v = snanstdev( x.length, 1, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = snanstdev( 0, 1, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = snanstdev( -1, 1, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns a population standard deviation of `0` provided the first element is not `NaN`', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = snanstdev( 1, 0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float32Array( [ NaN, 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = snanstdev( 1, 0, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns a sample standard deviation equal to `NaN`', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = snanstdev( 1, 1, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN, 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = snanstdev( 1, 1, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `correction` parameter yielding a correction term less than or equal to `0`, the function returns `NaN`', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = snanstdev( x.length, x.length, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = snanstdev( x.length, x.length+1, x, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', opts, function test( t ) {
	var N;
	var x;
	var v;

	x = new Float32Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0,
		NaN,  // 4
		NaN
	]);

	N = floor( x.length / 2 );
	v = snanstdev( N, 1, x, 2, 0 );

	t.strictEqual( v, 2.5, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', opts, function test( t ) {
	var N;
	var x;
	var v;
	var i;

	x = new Float32Array([
		NaN,  // 4
		NaN,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);
	N = floor( x.length / 2 );

	v = snanstdev( N, 1, x, -2, 8 );
	t.strictEqual( v, 2.5, 'returns expected value' );

	x = new Float32Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = 100.0;
	}
	v = snanstdev( x.length, 1, x, -1, x.length-1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns `0` provided the correction term is not less than `0` and the first element is not `NaN`', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = snanstdev( x.length, 1, x, 0, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float32Array( [ NaN, 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = snanstdev( x.length, 1, x, 0, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = snanstdev( x.length, x.length, x, 0, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter', opts, function test( t ) {
	var N;
	var x;
	var v;

	x = new Float32Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		NaN,
		NaN   // 4
	]);
	N = floor( x.length / 2 );

	v = snanstdev( N, 1, x, 2, 1 );
	t.strictEqual( v, 2.5, 'returns expected value' );

	t.end();
});
