// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './css/variables.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png';
// import './images/corey-agopian-5y4ljzRrDFA-unsplash.jpg';

console.log('This is the JavaScript entry file - your code begins here.');


let username = document.querySelector('.username');
let loginBtn = document.querySelector('.login-button');
// let travelerGreeting = document.querySelector('.traveler')

// username.addEventListener('input', determineUser);
loginBtn.addEventListener('click', determineUser)

function determineUser () {
  if (username.value === 'agency') {
    window.location = './agent.html'
  } else if (username.value === 'traveler') {
    window.location = './traveler.html'
  }
}

// fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers')
//   .then(response => response.json())
//   .then(console.log(response.json())
//   .then(data => greetTraveler(data))
//   .catch(error => console.log(error.message))


// function greetTraveler (travelers) {
//   console.log(travelerGreeting)
//   let random = Math.floor(Math.random() * travelers.travelers.length);
//   let greetHtml = `Welcome Traveler <span class='traveler-name'>${travelers.travelers[random].name}</span>!`;

//   travelerGreeting.innerHTML = greetHtml; 
// }