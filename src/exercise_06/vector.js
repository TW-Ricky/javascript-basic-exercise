/* eslint-disable class-methods-use-this */
export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.
  constructor(x, y) {
    this.xx = x;
    this.yy = y;
  }

  static plus(a, b) {
    return new Vector(a.x + b.x, a.y + b.y);
  }

  static minus(a, b) {
    return new Vector(a.x - b.x, a.y - b.y);
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  get x() {
    return this.xx;
  }

  get y() {
    return this.yy;
  }

  set x(value) {
    if (this.xx == null) {
      this.xx = value;
    } else {
      throw new Error();
    }
  }

  set y(value) {
    if (this.yy == null) {
      this.yy = value;
    } else {
      throw new Error();
    }
  }

}
