/// <reference path="./test.d.ts"/>
'use strict';
import chai = require('chai');
var expect = chai.expect;
import libaries = require('../lib/Greeter');
var Greeter = libaries.Greeter




describe('The Greeter Class', () => {
	it('gives me a friendly greeting', () => {
		var greeter = new Greeter('developer');
		var message = greeter.greet();
		expect(message).to.equal('Hello, developer');
	});
});