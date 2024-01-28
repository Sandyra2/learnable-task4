// Movie.js
class Movie {
  constructor(title, genre, year, rating, price, available) {
    this.title = title;
    this.genre = genre;
    this.year = year;
    this.rating = rating;
    this.price = price;
    this.available = available;
  }
}

// User.js
class User {
  constructor(name, email, password, rentals) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.rentals = rentals;
  }

  // A method to check out a movie
  checkOut(movie) {
    // Check if the movie is available
    if (movie.available) {
      // Add the movie to the user's rentals
      this.rentals.push(movie);
      // Set the movie's availability to false
      movie.available = false;
      // Return a success message
      return `You have checked out ${movie.title}`;
    } else {
      // Return an error message
      return `${movie.title} is not available`;
    }
  }

  // A method to watch a movie
  watch(movie) {
    // Check if the movie is in the user's rentals
    if (this.rentals.includes(movie)) {
      // Remove the movie from the user's rentals
      this.rentals.splice(this.rentals.indexOf(movie), 1);
      // Set the movie's availability to true
      movie.available = true;
      // Return a success message
      return `You have watched ${movie.title}`;
    } else {
      // Return an error message
      return `You have not checked out ${movie.title}`;
    }
  }

  // A method to rate a movie
  rate(movie, rating) {
    // Check if the rating is valid
    if (rating >= 1 && rating <= 5) {
      // Set the movie's rating to the given rating
      movie.rating = rating;
      // Return a success message
      return `You have rated ${movie.title} as ${rating}`;
    } else {
      // Return an error message
      return `Invalid rating`;
    }
  }
}

// Rental.js
class Rental {
  constructor(user, movie, date) {
    this.user = user;
    this.movie = movie;
    this.date = date;
  }
}

// Create some movies
let movie1 = new Movie("The Matrix", "Sci-Fi", 1999, 4.5, 10, true);
let movie2 = new Movie("The Lion King", "Animation", 1994, 4.8, 8, true);
let movie3 = new Movie("The Godfather", "Crime", 1972, 4.9, 12, true);

// Create a user
let user1 = new User("Alice", "alice@example.com", "123456", []);

// Test the methods
console.log(user1.checkOut(movie1)); // You have checked out The Matrix
console.log(user1.checkOut(movie2)); // You have checked out The Lion King
console.log(user1.watch(movie1)); // You have watched The Matrix
console.log(user1.rate(movie2, 5)); // You have rated The Lion King as 5
console.log(user1.checkOut(movie3)); // You have checked out The Godfather
console.log(user1.watch(movie3)); // You have watched The Godfather
console.log(user1.rate(movie3, 4)); // You have rated The Godfather as 4