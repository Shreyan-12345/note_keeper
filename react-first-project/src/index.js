/*import React from 'react';
import ReactDOM from 'react-dom/client';*/
import './index.css';
/*import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>gggg</h1>
  <React.StrictMode>        //in render(WHAT TO SHOW, WHERE TO SHOW)
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

/*import Heading from "./Heading.jsx";
import List from "./List";
import App from "./App.jsx";*/

/*var React = require("react");
var ReactDOM = require("react-dom");*/


/*ReactDOM.render(<div><h1>Hello World!</h1><p>This is a paragraph</p></div>, document.getElementById("root"));

var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);*/

/*
const fname = "shreyan";
const lname = "majumdar";
const num = 6;
const currentDate = new Date();
const year = currentDate.getFullYear();
const img = "https://picsum.photos/200"

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
}

customStyle.color="blue"

const date = new Date(2024,1,1,15);
const currentTime = date.getHours();

let greeting;

const customStyle2 = {
  color: ""
  }

if(currentTime<12)
  {
    greeting="good morning";
    customStyle2.color="red";
  }
else if(currentTime<18)
  {
    greeting="good afternoon";
    customStyle2.color="blue";
  }
else
  {
    greeting="good night";
    customStyle2.color="green";
  }
*/

/*function Heading(){
  return <h1>My Favourite Foods</h1>;
}*/

/*ReactDOM.render(
<div>
  <h1 class="heading" contentEditable="true" spellCheck="false">Hello World!</h1>

  <ul>
    <li>my name is {`${fname} ${lname}`}</li>
    <li>my name is {fname + " " + lname}</li>
    <li>my roll is {num}</li>
    <li>c</li>
  </ul>

  <p>Year is {year}</p>

  <img class="food-img" src={img+"?grayscale"} alt="a"></img>
  <img class="food-img" src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg" alt="b"></img>
  <img class="food-img" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg" alt="c"></img>

  <h1 style={{color: "red"}}>Hello Babe!</h1>
  <h1 style={customStyle}>Hello Babe2!</h1>

  <h1 class="heading" style={customStyle2} >{greeting}</h1>

  <Heading></Heading>
  <Heading/>

  <List/>

  <App/>

</div>, 
document.getElementById("root"));*/

//ReactDOM.render(<App />, document.getElementById("root"));

/*
import React from "react";
import ReactDOM from "react-dom";
import PI, { doublePi, triplePi } from "./math.js";     //default one's can be called using any name bugt the braces one's must be called using the exact name

ReactDOM.render(
  <ul>
    <li>{PI}</li>
    <li>{doublePi()}</li>    
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
// () used bcoz it is function
*/

/*
import React from "react";
import ReactDOM from "react-dom";
import * as p from "./math.js";

ReactDOM.render(
  <ul>
    <li>{p.default}</li>
    <li>{p.doublePi()}</li>
    <li>{p.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
*/

/*import React from "react";
import ReactDOM from "react-dom";
import { add, subtract, multiply, divide } from "./calculator";     // order of import may not be exact as that of export, but the names should be precisely same

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);*/

/*import React from "react";
import ReactDOM from "react-dom";
import * as calc from "./calculator";     // order of import may not be exact as that of export, but the names should be precisely same

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{calc.add(1, 2)}</li>
    <li>{calc.multiply(2, 3)}</li>
    <li>{calc.subtract(7, 2)}</li>
    <li>{calc.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);*/

/*
import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+7387384587"
      email="jack@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);*/

/*import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));*/

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card.
//4. Use the contacts.js file to create card components.



/*var numbers=[1,2,3,4,5]
function double(x)
{
  return x*2;
}
const newNumbers=numbers.map(double);
console.log(newNumbers);

var numbers2=[]
function double2(x)
{
  newNumbers.push(x*2);
}
const newNumbers2=numbers2.forEach(double2);
console.log(newNumbers2);

var newNumbers = [];
numbers.forEach(function (x) {
newNumbers.push(x * 2);
});*/



/*var numbers=[3,6,10,15,17];

const newNumbers = numbers.filter(function(num) {
  return num < 10;
});

var newNumbers2 = [];
numbers.forEach(function(num) {
  if (num < 10) {
     newNumbers2.push(num);
   }
 });*/



/*var newNumber = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
    return accumulator + currentNumber;
});

var newNumber = 0;
numbers.forEach(function (currentNumber) {
  newNumber += currentNumber
});*/ 



/*const newNumber = numbers.find(function (num) {
  return num > 10;
});

console.log(newNumber);*/



/*const newNumber = numbers.findIndex(function (num) {     //finds 1st index satisfying the condition
  return num > 10;
 });

console.log(newNumber);*/



/*import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function(emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);*/



/*
var numbers = [3, 56, 2, 48, 5];

numbers = numbers.map(x => x * x);

//Map - Create a new array by doing something with each item in an array.
numbers = numbers.map( x => x * 2);

//Filter - Create a new array by keeping the items that return true.
numbers = numbers.filter(num => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
numbers = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

//Find - find the first item that matches from an array.
//numbers = numbers.find(num => num > 10);

//FindIndex - find the index of the first item that matches.
//numbers = numbers.findIndex(num => num > 10);

console.log(numbers);
*/

/*
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));*/

// import animals, { useAnimals } from "./data";

// //Destructuring Arrays
// // console.log(animals);
// const [cat, dog] = animals;
// // console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
// // const { name, sound} = cat;
// // const { name: catName, sound: catSound } = cat;    // can't be accessed with name maust be accessed with "catName"
// // const { name = "Fluffy", sound = "Purr" } = cat;     // If no value for name then "fluffy" will be automatically assigned
// // const {feedingRequirements: {food, water} } = cat;
// // console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
/*import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
*/

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));
