var path = require('path');
var should = require("chai").should();
var Winter = require(path.join(process.cwd(), '/lib/Winter'));


describe('Mocha + Chai', function () {
    it('truthyness', function () {
    	true.should.be.true;
    	false.should.be.false;
    });
  });

describe('Winter', function () {
	it('should be coming', function () {
		var winter = new Winter; 
		winter.isComing.should.be.true;
	});
});
