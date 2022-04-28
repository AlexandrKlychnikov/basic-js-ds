const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.elements = {}
    this.top = -1
  }

  push(element) {
    this.elements[++this.top] = element
  }

  pop() {
    let pop = this.elements[this.top]
    delete this.elements[this.top]
    this.top--
    return pop
  }

  peek() {
    return this.elements[this.top]
  }
}

module.exports = {
  Stack
};
