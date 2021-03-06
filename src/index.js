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


let usernameInput = document.querySelector('.username');
let loginBtn = document.querySelector('.login-button');
// let travelerGreeting = document.querySelector('.traveler')

// username.addEventListener('input', determineUser);
loginBtn.addEventListener('click', determineUser)

function determineUser () {
  let username = usernameInput.value;
  if (username === 'agency') {
    window.location = './agent.html'
  } else if (username.includes('traveler')) {
    let travelerId = Number(username.replace('traveler', ''));

    localStorage.setItem('session', travelerId.toString());
    window.location = './traveler.html'
  }
}
