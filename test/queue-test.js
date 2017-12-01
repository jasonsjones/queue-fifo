/* globals describe it beforeEach afterEach */
var chai = require('chai');
var Queue = require('../');

chai.should();

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

    it('should queue up data at the back of queue', function () {
        queue.enqueue('some test data');
        queue.enqueue('some more test data');
        queue.enqueue('and yet some more...');
        queue.size().should.equal(3);
    });

    it('should dequeue data from the front of the queue', function () {
        queue.enqueue('some test data');
        queue.enqueue('some more test data');
        queue.enqueue('and yet some more...');
        queue.size().should.equal(3);

        var first = queue.dequeue();
        first.should.equal('some test data');

        queue.size().should.equal(2);

        queue.dequeue().should.equal('some more test data');
        queue.size().should.equal(1);
    });

    it('should peek at the data at the front of the queue', function () {
        queue.enqueue('some test data');
        queue.enqueue('some more test data');
        queue.enqueue('and yet some more');
        queue.enqueue('and even more data');
        queue.size().should.equal(4);
        var first = queue.peek();
        first.should.equal('some test data');
        queue.size().should.equal(4);
    });

    it('should clear the queue of all data', function () {
        queue.enqueue('some test data');
        queue.enqueue('some more test data');
        queue.enqueue('and yet some more');
        queue.enqueue('and even more data');
        queue.size().should.equal(4);
        queue.clear();
        queue.size().should.equal(0);
        queue.isEmpty().should.equal(true);
    });
});
