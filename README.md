# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in JavaScript: stack overflow due to an improperly handled recursive function.

The `bug.js` file contains the buggy code, a recursive function that lacks proper termination conditions leading to infinite recursion.  The `bugSolution.js` provides a corrected version with an appropriate base case to prevent the stack overflow.

## How to Reproduce
1. Clone the repository.
2. Run `bug.js`.  You should see a stack overflow error.
3. Run `bugSolution.js`. You'll see the expected result.

## Problem and Solution
The problem lies in the lack of a proper base case for the recursion. The original code, given a positive `a` value, will recur infinitely.
The solution adds a base case that stops the recursion when `a` reaches 0.