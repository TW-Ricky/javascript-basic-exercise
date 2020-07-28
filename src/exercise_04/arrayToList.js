/* eslint-disable no-plusplus */
export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array == null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  const Linklist = new Node(array[0]);
  let p = Linklist;
  for (let i = 1; i < array.length; i++) {
    const s = new Node(array[i]);
    p.next = s;
    p = p.next;
  }
  return Linklist;
}
