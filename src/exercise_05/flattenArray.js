/* eslint-disable no-plusplus */
export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array == null) {
    throw new Error('Flatten undefined or null array');
  }
  const numbers = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i].constructor === Array) {
  //     const inarray = flattenArray(array[i]);
  //     for (let j = 0; j < inarray.length; j++) {
  //       numbers.push(inarray[j]);
  //     }
  //   } else {
  //     numbers.push(array[i]);
  //   }
  // }
  for (let i = 0; i < array.length; i++) {
    if (array[i].constructor === Array) {
      const inarray = array[i];
      for (let j = 0; j < inarray.length; j++) {
        numbers.push(inarray[j]);
      }
    } else {
      numbers.push(array[i]);
    }
  }
  // console.log(numbers);
  return numbers;
}
