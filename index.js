/**
 * @fileOverview Implementation of a queue (FIFO) data structure
 * @author Jason S. Jones
 * @license MIT
 */

(function () {
    'use strict';

    /***********************************************************
     * Queue Data Structure
     *
     * This is a 'queue' data structure that implements the notion
     * of a 'First in First Out', or FIFO, protocol.  The underlying data
     * structure is a doubly linked list.  This linked list data structure
     * does all the heavy lifting, enabling this implementation to be a
     * simple wrapper around the linked list to leverage the applicable
     * methods and properties.  This provides a very clean and simple
     * implementation for this queue data structure.
     *
     ***********************************************************/

    // bring in the one dependency which will be the underlying
    // data structure for this queue implementation
    var LinkedList = require('dbly-linked-list');

    /**
     * Creates a new queue instance and initializes the underlying data
     * structure
     *
     * @constructor
     */
    function Queue() {
        this._list = new LinkedList();
    }

    /* Functions attached to the Queue prototype.  All queue instances
     * will share these methods, meaning there will NOT be copies made for each
     * instance.  This will be a huge memory savings since there may be several
     * different queue instances.
     */
    Queue.prototype = {

        /**
         * Determines if the queue is empty
         *
         * @returns {boolean} true if the queue is empty, false otherwise
         */
        isEmpty: function () {
            return this._list.isEmpty();
        },

        /**
         * Returns the size, or number of items in the queue
         *
         * @returns {number} the number of items in the queue
         */
        size: function () {
            return this._list.getSize();
        },

        /**
         * Clears the queue of all data
         */
        clear: function () {
            return this._list.clear();
        },

        /**
         * Adds a new item containing 'data' to the back of the queue
         *
         * @param {object} data the data to add to the back of the queue
         */
        enqueue: function (data) {
            return this._list.insert(data);
        },

        /**
         * Removes the item from the front of the queue.
         *
         * @returns {object} the item, or data, from the front of the queue.  If
         *                   the list is empty, returns null.
         */
        dequeue: function () {
            if (this.isEmpty()) {
                return null;
            }
            return this._list.removeFirst().getData();
        },

        /**
         * Returns the data of the item at the front of the queue,
         * but does not remove it
         *
         * @returns {object} the item, or data, from the front of the queue.  If
         *                   the list is empty, returns null.
         */
        peek: function () {
            if (this.isEmpty()) {
                return null;
            }
            return this._list.getHeadNode().getData();
        }
    };

    // export the constructor fn to make it available for use outside
    // this file
    module.exports = Queue;
}());
