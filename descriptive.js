// Define the DescriptiveStats class
class DescriptiveStats {
  // Define the constructor that takes an array of numbers
  constructor(data) {
    this.data = data;
  }

  // Define a static method that validates the input
  static validate(input) {
    // Check if the input is an array
    if (!Array.isArray(input)) {
      throw new Error('Input must be an array');
    }
    // Check if the array is not empty
    if (input.length === 0) {
      throw new Error('Array must not be empty');
    }
    // Check if the array contains only numbers
    if (!input.every(item => typeof item === 'number')) {
      throw new Error('Array must contain only numbers');
    }
  }

  // Define an instance method that computes the mean
  mean() {
    // Validate the input
    DescriptiveStats.validate(this.data);
    // Calculate the sum of the array
    let sum = this.data.reduce((a, b) => a + b, 0);
    // Divide the sum by the length of the array
    let mean = sum / this.data.length;
    // Return the mean
    return mean;
  }

  // Define an instance method that computes the median
  median() {
    // Validate the input
    DescriptiveStats.validate(this.data);
    // Sort the array in ascending order
    let sorted = this.data.slice().sort((a, b) => a - b);
    // Find the middle index of the array
    let middle = Math.floor(sorted.length / 2);
    // Check if the array has an odd or even length
    if (sorted.length % 2 === 0) {
      // If even, return the average of the middle two elements
      return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
      // If odd, return the middle element
      return sorted[middle];
    }
  }

  // Define an instance method that computes the mode
  mode() {
    // Validate the input
    DescriptiveStats.validate(this.data);
    // Create an object to store the frequency of each element
    let frequency = {};
    // Loop through the array and count the occurrences of each element
    for (let item of this.data) {
      frequency[item] = (frequency[item] || 0) + 1;
    }
    // Find the maximum frequency
    let max = Math.max(...Object.values(frequency));
    // Find the elements that have the maximum frequency
    let mode = Object.keys(frequency).filter(item => frequency[item] === max);
    // Convert the mode array to numbers
    mode = mode.map(item => Number(item));
    // Return the mode array
    return mode;
  }

  // Define an instance method that computes the standard deviation
  standardDeviation() {
    // Validate the input
    DescriptiveStats.validate(this.data);
    // Calculate the mean of the array
    let mean = this.mean();
    // Calculate the sum of the squared differences from the mean
    let sum = this.data.reduce((a, b) => a + Math.pow(b - mean, 2), 0);
    // Divide the sum by the length of the array
    let variance = sum / this.data.length;
    // Take the square root of the variance
    let standardDeviation = Math.sqrt(variance);
    // Return the standard deviation
    return standardDeviation;
  }

  // Define an instance method that computes the variance
  variance() {
    // Validate the input
    DescriptiveStats.validate(this.data);
    // Calculate the mean of the array
    let mean = this.mean();
    // Calculate the sum of the squared differences from the mean
    let sum = this.data.reduce((a, b) => a + Math.pow(b - mean, 2), 0);
    // Divide the sum by the length of the array
    let variance = sum / this.data.length;
    // Return the variance
    return variance;
  }

  // You can define more methods for other descriptive statistics here
}

// Create an instance of the DescriptiveStats class with some data
let stats = new DescriptiveStats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Call the methods that you need
console.log(stats.mean()); // 5.5
console.log(stats.median()); // 5.5
console.log(stats.mode()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(stats.standardDeviation()); // 2.8722813232690143
console.log(stats.variance()); // 8.25