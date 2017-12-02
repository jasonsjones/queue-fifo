/* globals describe it beforeEach afterEach */
var chai = require('chai');
var Queue = require('../');

var expect = chai.expect;

describe('Queue data structure', function() {
    var queue;

    beforeEach(function () {
        queue = new Queue();
    });

    afterEach(function () {
        queue = null;
    });

    it('instantiates a queue instance', function () {
        expect(queue).to.exist;
    });

    it('is empty when first instantiated', function () {
        expect(queue.isEmpty()).to.be.true;
        expect(queue.size()).to.equal(0);
    });

    it('queues up data at the back of queue', function () {
        queue.enqueue('some test data');
        queue.enqueue('some more test data');
        queue.enqueue('and yet some more...');
        expect(queue.size()).to.equal(3);
    });

    it('dequeues data from the front of the queue', function () {
        queue.enqueue('some test data');
        queue.enqueue('some more test data');
        queue.enqueue('and yet some more...');
        expect(queue.size()).to.equal(3);

        var first = queue.dequeue();
        expect(first).to.equal('some test data');
        expect(queue.size()).to.equal(2);
        expect(queue.dequeue()).to.equal('some more test data');
        expect(queue.size()).to.equal(1);
    });

    it('peeks at the data at the front of the queue', function () {
        queue.enqueue('some test data');
        queue.enqueue('some more test data');
        queue.enqueue('and yet some more');
        queue.enqueue('and even more data');

        expect(queue.size()).to.equal(4);
        var first = queue.peek();
        expect(first).to.equal('some test data');
        expect(queue.size()).to.equal(4);
    });

    it('clears the queue of all data', function () {
        queue.enqueue('some test data');
        queue.enqueue('some more test data');
        queue.enqueue('and yet some more');
        queue.enqueue('and even more data');

        expect(queue.size()).to.equal(4);
        queue.clear();
        expect(queue.size()).to.equal(0);
        expect(queue.isEmpty()).to.be.true;
    });
});
