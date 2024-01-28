// Define a class called MathHelper with a static property called PI and a static method called square
class MathHelper {
  // Use the static keyword to declare a static property
  static PI = 3.14;

  // Use the static keyword to declare a static method
  static square(x) {
    // Use the return keyword to return the result of the method
    return x * x;
  }
}

// Access the static property using the class name and the dot notation
console.log(MathHelper.PI); // 3.14

// Access the static method using the class name and the dot notation
console.log(MathHelper.square(5)); // 25

// Try to access the static property or method using an instance of the class
let math = new MathHelper();
console.log(math.PI); // undefined
console.log(math.square(5)); // TypeError: math.square is not a function
