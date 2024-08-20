# About this repository?

This repository contains a very simple application of Binary Search Tree. I have used a BST to
make an events calender where the `value` of each node represents an event entity - an object which
has two main properties - the event `date` and the events on that date in an `events` array.

I have intentionally skipped the UI for this because the sole purpose was to practice the implementation of Binary Search Trees.

# What all features are implemented?

- Constructing a tree from an array of `EventNode`. Simply pass an array of objects, each object containing a date key and an events key.
- Adding an event on a particular date. If a node exists for that date, the new event will be pushed to the events array of that node. If not, a new node will be created.
- Getting the events on a particular date. Simply pass the date and you will get the `EventNode` which will have events on that date. If no events are present, `null` will be returned.
- Deleting an event using `eventDetails`. If multiple events are present on the specified date, the event with the given eventId will be deleted from the array. If only one event is present on the date, the entire node will be deleted.
- Sorting events in chronological order. This returns a sorted array of objects, sorted based on date.

# Other notes:

- The value of each node is an object which has two properties - `date` and `events`. The date property is used primarily to perform BST operations.
- There are some private methods in the `EventsBST` class which are used internally to perform operations.

# Performance Analysis:

## 1. Constructing the tree

**Time Complexity**

- Best/Average case - O(nlogn); n = number of nodes in the tree
- Worst case: When the tree is unbalanced - O(n^2); n = number of nodes in the tree

## 2. Adding a node in the tree

**Time complexity**

- Best/Average case - O(logn); n = number of nodes in the tree
- Worst case (When the tree is unbalanced) - O(n); n = number of nodes in the tree

**Space complexity**

- Best/average case - O(logn); n = number of nodes in the tree
- Worst case - O(n); n = number of nodes in the tree

## 3. Finding events on a given date

**Time complexity**

- Best/Average case - O(logn); n = number of nodes in the tree
- Worst case: When the tree is unbalanced - O(n); n = number of nodes in the tree

**Space complexity**

- Best/average case - O(logn); n = number of nodes in the tree
- Worst case - O(n); n = number of nodes in the tree

## 4. Chronological order

**Time complexity** - O(n); n = number of nodes in the tree
**Space complexity** - O(n); n = number of nodes in the tree

## 5. Deleting a node

**Time complexity**

- Best/Average case - O(logn); n = number of nodes in the tree
- Worst case: When the tree is unbalanced - O(n); n = number of nodes in the tree

**Space complexity**

- Best/average case - O(logn); n = number of nodes in the tree
- Worst case - O(n); n = number of nodes in the tree
