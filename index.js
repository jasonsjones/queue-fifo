/**
 * @fileOverview Implementation of a queue (FIFO) data structure
 * @author Jason S. Jones
 * @version 0.1.0
 * @license MIT
 */

(function() {
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

    module.exports = Queue;
})();