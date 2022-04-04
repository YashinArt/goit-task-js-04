// JS V2 block-4  Модуль 4 Перебирающие методы массовов
 
  // Задача 1 Решение --------------------------------------------
  function makePizza() {
    return "Your pizza is being prepared, please wait.";
  }
  // Change code below this line
  
  const result = makePizza();
  const pointer = makePizza;
  
  // Задача 2 Решение --------------------------------------------
  function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }
  
  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }
  
  // Chande code below this line
  function makeMessage(pizzaName, callback) {
    
    return callback(pizzaName);
  }
  
  // Задача 3 Решение --------------------------------------------
  function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
  }
  
  makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
  });
  // Change code below this line
  
  makePizza("Ultracheese", function eatPizza(pizzaName) {
    console.log(`Eating pizza ${pizzaName}.`);
  });
  
  // Задача 4 Решение --------------------------------------------
  const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
      if (pizzaPalace.pizzas.includes(pizzaName)){
        console.log(onSuccess(pizzaName));
        return onSuccess(pizzaName);
      }
      console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));
      return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
    },
  };
  // Change code above this line
  
  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }
  
  // Callback for onError
  function onOrderError(error) {
    return `Error! ${error}`;
  }
  
  // Method calls with callbacks
  pizzaPalace.order('Smoked', makePizza, onOrderError);
  pizzaPalace.order('Four meats', makePizza, onOrderError);
  pizzaPalace.order('Big Mike', makePizza, onOrderError);
  pizzaPalace.order('Vienna', makePizza, onOrderError);
  
  // Задача 5 Решение --------------------------------------------
  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line
  
    // for (let i = 0; i < orderedItems.length; i += 1) {
    //   totalPrice += orderedItems[i];
    // }
    orderedItems.forEach(function(number, index){
    totalPrice += number;
    });
    // Change code above this line
    return totalPrice;
  }
  // Задача 6 Решение --------------------------------------------
  function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line
  
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] > value) {
    //     filteredNumbers.push(numbers[i]);
    //   }
    // }
  numbers.forEach(function(number, index){
    if(number > value){
      filteredNumbers.push(number);
    }
  });
    // Change code above this line
    return filteredNumbers;
  }
  
  // Задача 7 Решение --------------------------------------------
  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line
  
    // for (let i = 0; i < firstArray.length; i += 1) {
    //   if (secondArray.includes(firstArray[i])) {
    //     commonElements.push(firstArray[i]);
    //   }
    // }
    firstArray.forEach(function(namber, index){
      if(secondArray.includes(namber)){
  commonElements.push(namber);
      }
    })
  
    return commonElements;
    // Change code above this line
  }
  
  // Задача 8 Решение --------------------------------------------
// Change code below this line

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

  // Задача 9 Решение --------------------------------------------
// Change code below this line
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Change code above this line

  // Задача 10 Решение --------------------------------------------
// Change code below this line
const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;
  
    orderedItems.forEach((item) => {
      totalPrice += item;
    });
  
    return totalPrice;
  }
  // Change code above this line
  
  // Задача 11 Решение --------------------------------------------
// Change code below this line
const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Change code above this line
    return filteredNumbers;
  }
  
  // Задача 12 Решение --------------------------------------------
// Change code below this line
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Change code above this line
    return commonElements;
  }
  
  // Задача 13 Решение --------------------------------------------
  function changeEven(numbers, value) {
    // Change code below this line
   const a = [];
    numbers.forEach( (number) => 
    {number % 2 === 0 ? a.push(number + value) : a.push(number);}
  
   
  );
    // Change code above this line
    return a;
  }
  
  // Задача 14 Решение --------------------------------------------
  const planets = ["Earth", "Mars", "Venus", "Jupiter"].map(planet => planet);
  // Change code below this line
  // const a = planets.map(planet => planet);
  // console.log(a);
  
  const planetsLengths = [5, 4, 5, 7].map(planet => planet);
  // Задача 15 Решение --------------------------------------------
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  // Change code below this line
  
  const titles = books.map(book => book.title);
  
  // Задача 16 Решение --------------------------------------------
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism"],
    },
  ];
  // Change code below this line
  
  const genres = books.flatMap(book => book.genres);
  
  // Задача 17 Решение --------------------------------------------
// Change code below this line
const getUserNames = users => {
    
    return users.map(user => user.name);
      };
      // Change code above this line
  // Задача 18 Решение --------------------------------------------
// Change code below this line
const getUserEmails = users => {
    return users.map(user => user.email)
  
    };
    // Change code above this line
  // Задача 19 Решение --------------------------------------------
  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
  // Change code below this line
  
  const evenNumbers = numbers.filter(value => value%2 == 0);
  const oddNumbers = numbers.filter(value => value%2 != 0);
  // Задача 20 Решение --------------------------------------------
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction", "mysticism"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism", "adventure"],
    },
  ];
  // Change code below this line
  const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = books.flatMap(book => book.genres).filter((course, index, array) => array.indexOf(course) === index);
  // Задача 21 Решение --------------------------------------------
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  
  const MIN_RATING = 8;
  const AUTHOR = "Bernard Cornwell";
  // Change code below this line
  
  const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
  const booksByAuthor = books.filter(book => book.author === AUTHOR);
  
  // Задача 22 Решение --------------------------------------------
// Change code below this line
const getUsersWithEyeColor = (users, color) => {
 
    return users.filter(user => user.eyeColor === color);
    };
    // Change code above this line
  // Задача 23 Решение --------------------------------------------
// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(user => user.age >= minAge && user.age <= maxAge )
   
   };
   // Change code above this line
  // Задача 24 Решение --------------------------------------------
// Change code below this line
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
   };
   // Change code above this line
  // Задача 25 Решение --------------------------------------------
// Change code below this line
const getFriends = (users) => {
    const a = users.flatMap (user => user.friends);
 console.log(a)
 const b = a.filter((users, index, array) => { return array.indexOf(users) === index});
 return b;
};
// Change code above this line
  // Задача 26 Решение --------------------------------------------
// Change code below this line
const getActiveUsers = (users) => {
 
    return users.filter((user) => user.isActive
    );
    
  }
  // Change code above this line
  // Задача 27 Решение --------------------------------------------
// Change code below this line
const getInactiveUsers = (users) => {
    return users.filter((user) => !user.isActive
   );
 };
 // Change code above this line
 
  // Задача 28 Решение --------------------------------------------
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  ];
  const BOOK_TITLE = 'The Dream of a Ridiculous Man';
  const AUTHOR = 'Robert Sheckley';
  // Change code below this line
  
  const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
  const bookByAuthor = books.find((book) => book.author === AUTHOR);
  // Задача 29 Решение --------------------------------------------
// Change code below this line
const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email)
  };
  // Change code above this line
  // Задача 30 Решение --------------------------------------------
  const firstArray = [26, 94, 36, 18];
  const secondArray = [17, 61, 23];
  const thirdArray = [17, 26, 94, 61, 36, 23, 18];
  // Change code below this line
  
  const eachElementInFirstIsEven = firstArray.every(value => value/2);
  const eachElementInFirstIsOdd = firstArray.every(value => !value%2);
  
  const eachElementInSecondIsEven = secondArray.every(value => !value);
  const eachElementInSecondIsOdd = secondArray.every(value => value);
  
  const eachElementInThirdIsEven = thirdArray.every(value => value%2);
  const eachElementInThirdIsOdd = thirdArray.every(value => !value/2);
  // Задача 31 Решение --------------------------------------------
// Change code below this line
const isEveryUserActive = (users) => {
    return users.every(user => user.isActive)
  };
  // Change code above this line
  // Задача 32 Решение --------------------------------------------
  const firstArray = [26, 94, 36, 18];
  const secondArray = [17, 61, 23];
  const thirdArray = [17, 26, 94, 61, 36, 23, 18];
  // Change below this line
  
  const anyElementInFirstIsEven = firstArray.some(value => value >= 0);
  const anyElementInFirstIsOdd = firstArray.some(value => !value);
  
  const anyElementInSecondIsEven = secondArray.some(value => !value);
  const anyElementInSecondIsOdd = secondArray.some(value => value);
  
  const anyElementInThirdIsEven = thirdArray.some(value => value);
  const anyElementInThirdIsOdd = thirdArray.some(value => value >= 0);
  
  // Задача 33 Решение --------------------------------------------
// Change code below this line
const isAnyUserActive = users => {
    return users.some(user => user.isActive)
 };
 // Change code above this line
  // Задача 34 Решение --------------------------------------------
  const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244
  };
  const playtimes = Object.values(players); // [1270, 468, 710, 244]
  // Change code below this line
  
  const totalPlayTime = playtimes.reduce((acc, item) => {return acc + item}, 0 );
  
  // Change code above this line
  const averagePlayTime = totalPlayTime / playtimes.length;
  // Задача 35 Решение --------------------------------------------
  const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
  ];
  // Change code below this line
  
  const totalAveragePlaytimePerGame = players.reduce((total, player) => {
    return (total + player.playtime / player.gamesPlayed)
  },0);
  // Задача 36 Решение --------------------------------------------
// Change code below this line
const calculateTotalBalance = users => {
    const a = users
     .map(value => value.balance)
     .reduce((acc, item) => {
   
       console.log (acc + item)
       return acc + item;
   
   }, 0)
     return a;
   };
   // Change code above this line
  // Задача 37 Решение --------------------------------------------
// Change code below this line
const getTotalFriendCount = users => {
    return users.reduce((acc, item) => {
         return acc + item.friends.length
            }, 0);
  };
  // Change code above this line
  // Задача 38 Решение --------------------------------------------
  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
  const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
  ];
  // Change code below this line
  
  const ascendingReleaseDates = [...releaseDates].sort();
  
  const alphabeticalAuthors = [...authors].sort();
  // Задача 39 Решение --------------------------------------------
  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
  // Change code below this line
  
  const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
  
  const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
  // Задача 40 Решение --------------------------------------------
  const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
    "Howard Lovecraft",
  ];
  // Change code below this line
  
  const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));;
  
  const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
  
  // Задача 41 Решение --------------------------------------------
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  // Change code below this line
  
  const sortedByAuthorName = [...books].sort((firstStudent, secondStudent) =>
    firstStudent.author.localeCompare(secondStudent.author)
  );
  
  const sortedByReversedAuthorName = [...books].sort((firstStudent, secondStudent) =>
    secondStudent.author.localeCompare(firstStudent.author)
  );
  
  const sortedByAscendingRating = [...books].sort(
    (firstStudent, secondStudent) => firstStudent.rating - secondStudent.rating
  );
  
  const sortedByDescentingRating = [...books].sort(
    (firstStudent, secondStudent) => secondStudent.rating - firstStudent.rating
  );
  
  // Задача 42 Решение --------------------------------------------
   // Change code below this line
const sortByAscendingBalance = users => {
    return [...users].sort((firstStudent, secondStudent) =>
    firstStudent.balance - secondStudent.balance)
  ;
  };
  // Change code above this line
  // Задача 43 Решение --------------------------------------------
// Change code below this line
const sortByDescendingFriendCount = users => {
    return [...users].sort((a,b) => b.friends.length - a.friends.length);
  };
  // Change code above this line
  // Задача 44 Решение --------------------------------------------
// Change code below this line
const sortByName = users => {
    return [...users].sort((a,b) => a.name.localeCompare(b.name))
  };
  // Change code above this line
  // Задача 45 Решение --------------------------------------------
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
      title: "The Dreams in the Witch House",
      author: "Howard Lovecraft",
      rating: 8.67,
    },
  ];
  const MIN_BOOK_RATING = 8;
  // Change code below this line
  
  const names = books
  .filter(value => value.rating > MIN_BOOK_RATING)
  .map(user => user.author)
  .sort((a,b) => a.localeCompare(b))
  ;
  
  // Задача 46 Решение --------------------------------------------
// Change code below this line
const getNamesSortedByFriendCount = users => {
   
    return [...users]
    .sort((a,b) => a.friends.length - b.friends.length)
    .map(user => user.name)
    ;;
  };
  // Change code above this line
  // Задача 47 Решение --------------------------------------------
// Change code below this line
const getSortedFriends = users => {
    return users.flatMap (user => user.friends)
     .filter((course, index, array) => array.indexOf(course) === index)
     .sort((a,b) => a.localeCompare(b));
   };
   // Change code above this line
  // Задача 48 Решение --------------------------------------------
  // Change code below this line
const getTotalBalanceByGender = (users, gender) => {
    return users
   .filter ( user => user.gender === gender) 
   .reduce((acc, item) => acc+item.balance,0)
 };
 // Change code above this line