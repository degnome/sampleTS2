/// <reference path="./test.d.ts"/>
'use strict';
var chai = require('chai');
var expect = chai.expect;
var libaries = require('../lib/Greeter');
var Greeter = libaries.Greeter;
describe('The Greeter Class', function () {
    it('gives me a friendly greeting', function () {
        var greeter = new Greeter('developer');
        var message = greeter.greet();
        expect(message).to.equal('Hello, developer');
    });
});

//# sourceMappingURL=../test/Greeter.spec.js.map