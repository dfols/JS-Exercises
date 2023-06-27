let library = [
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    isAvailable: true,
    patron: null,
  },
  {
    name: "1984",
    author: "George Orwell",
    isAvailable: false,
    patron: "John Smith",
  },
  {
    name: "Pride and Prejudice",
    author: "Jane Austen",
    isAvailable: true,
    patron: null,
  },
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isAvailable: true,
    patron: null,
  },
  {
    name: "Moby Dick",
    author: "Herman Melville",
    isAvailable: false,
    patron: "Sarah Johnson",
  },
  {
    name: "To the Lighthouse",
    author: "Virginia Woolf",
    isAvailable: true,
    patron: null,
  },
  {
    name: "Brave New World",
    author: "Aldous Huxley",
    isAvailable: true,
    patron: null,
  },
  {
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isAvailable: false,
    patron: "David Thompson",
  },
  {
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    isAvailable: true,
    patron: null,
  },
  {
    name: "Jane Eyre",
    author: "Charlotte Bronte",
    isAvailable: true,
    patron: null,
  },
];

function addBook(title, author) {
  // create book object with properties for name, author, isAvaiable, and patron (who checked the book out)
  // push book object to the library array
}

function checkOutBook(title, patron) {
  // loop over library array
  // if title of book matches the search title;
  // set isAvailable to false
  // set patron to the given patron
  // return true
  // if title of book doesn't match the search title;
  // return false
}

function returnBook(title) {
  // loop over the library array
  // if book title matches the search title;
  // change isAvaiable to true
  // change patron to null
  // return true;
  // if book title doesn't match the search title;
  // return false
}

function displayStatus() {
  // loop over the library array
  // console.log every property of each book object
  // make the output look "nice" ex. console.log("Name: " + book.name);
}

// **TESTING**
// Remove comments to use

// addBook("1984", "George Orwell");
// addBook("To Kill a Mockingbird", "Harper Lee");
// displayStatus();
// console.log(checkOutBook("1984", "John Doe"));
// console.log(checkOutBook("1984", "Jane Doe"));
// displayStatus();
// console.log(returnBook("1984"));
// displayStatus();
