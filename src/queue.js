const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = null;
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head
  }
  
    get size() {
      return this.length;
    }
  
    enqueue(element) {
      const node = new ListNode(element);
      node.value = element;
      if (!this.tail) {
        this.tail = node;
        this.head = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.length += 1;
    }
  
    dequeue() {
      if (!this.head) return null;
      const removed = this.head;
      if (this.head === this.tail) {
        this.tail = null;
      }
      this.head = this.head.next;
      this.length -= 1;
      return removed.value;
    }
  }


module.exports = {
  Queue
};
