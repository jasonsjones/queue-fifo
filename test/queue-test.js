/* globals describe it beforeEach afterEach */

var should = require('should');
var Queue = require('../');

describe('Queue Unit Tests', function() {

    var queue;

    beforeEach(function () {
        queue = new Queue();
    });

    afterEach(function () {
        queue = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should instantiate a queue instance', function () {
        queue.should.be.ok;
    });

    it('should be empty when first instantiated', function () {
        queue.isEmpty().should.equal(true);
        queue.size().should.equal(0);
    });
});
