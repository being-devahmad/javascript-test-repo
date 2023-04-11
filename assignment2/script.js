// Q-1
// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function addNumber(num) {
    return function(value) {
      return num + value;
    };
  }
  const addFive = addNumber(5);
  console.log(addFive(10));


// Q-2
// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function searchArray(arr, value) {
    if (arr.length === 0) {
      return false;
    }
    
    if (arr[0] === value) {
      return true;
    } else {
      return searchArray(arr.slice(1), value);
    }
  }
  
const myArray = [1, 2, 3, 4, 5];
console.log(searchArray(myArray, 3)); 
console.log(searchArray(myArray, 6)); 


// Q3
// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

function addParagraph(text) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    document.body.appendChild(newParagraph);
  }
  addParagraph('This is a new paragraph!');

  

// Q-4
// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function addListItem(text) {
    const newListItem = document.createElement('li');
    newListItem.textContent = text;
    const unorderedList = document.querySelector('ul');
    unorderedList.appendChild(newListItem);
  }
  addListItem('This is a new list item!');
  


// Q-5
// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color


let myHeading = document.getElementById("heading1")
function chnageBackgroundColor(heading , color){
    heading.style.backgroundColor = color
}
chnageBackgroundColor(myHeading , 'red');




// Q-6
// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.
function saveObjectToLocalStorage(key, object) {
    const objectString = JSON.stringify(object);
    localStorage.setItem(key, objectString);
  }
  const myObject = { name: 'John', age: 25, city: 'New York' };
  saveObjectToLocalStorage('myKey', myObject);
    


// Q-7
// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.
function getObjectFromLocalStorage(key) {
    const objectString = localStorage.getItem(key);
    const object = JSON.parse(objectString);
    return object;
}
const myObject1 = getObjectFromLocalStorage('myKey');
console.log(myObject1.name);
console.log(myObject1.age);
console.log(myObject1.city);



// Q-8
// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

function saveObjectToLocalStorage(obj) {
    for (let prop in obj) {
      localStorage.setItem(prop, obj[prop]);
    }
    let newObj = {};
  
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      newObj[key] = localStorage.getItem(key);
    }
    return newObj;
  }
  let myObj = { name: "John", age: 30, city: "New York" };
  let newObj = saveObjectToLocalStorage(myObj);
  console.log(newObj);
    