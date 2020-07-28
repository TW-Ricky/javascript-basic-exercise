export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  if (string === undefined || string === null) return 0;
  if (prediction !== undefined) {
    // eslint-disable-next-line no-unused-vars
    let cnt = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < string.length; i++) {
      if (prediction(string[i])) {
        // eslint-disable-next-line no-plusplus
        cnt++;
      }
    }
    return cnt;
  }
  return string.length;
}
