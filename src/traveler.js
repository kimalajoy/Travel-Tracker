import './css/base.scss';
import './css/variables.scss';
var moment = require('moment');

console.log('Traveler!');

// class Traveler {
//   contstructor () {
//     this.id = id;
//     this.name = name;
//     this.travelerType = travelerType;
//   }
// }
let travelerId = Number(localStorage.getItem('session'));

let travelerGreeting = document.querySelector('.traveler');


let travelerInfoPromise = getTravelerInfo(travelerId);
let tripsPromise = getTrips();

Promise.all([travelerInfoPromise, tripsPromise]).then(response => {
  let traveler = response[0];
  greetTraveler(traveler);

  let trips = response[1]['trips'].filter(trip => trip.userID === travelerId);
  console.log(trips);
});

function getTravelerInfo(travelerId) {
  // fetching traveler info
  return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers/${travelerId}`)
  .then(response => response.json())
  .catch(error => console.log(error.message));
}

function getTrips() {
  //fetch trips info
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips')
  .then(response => response.json())
  .catch(error => console.log(error.message))
}

function greetTraveler (traveler) {
  let greetHtml = `Welcome Traveler <span class='traveler-name'>${traveler.name}</span>!`;
  console.log(`${traveler.name}`)
  travelerGreeting.innerHTML = greetHtml; 
}

function confirmedTrips (travelers) {

}

// Match travelers.id to trips.userID
//   to get start date, duration, status, travelers
// (travelers.travelers[random].id = trips.userID)

// then match trips.destinationID to destinations.id
//   to get destination name, flight cost, lodging cost image with alt
//(trips.destination.id = destinations.id)

// Your Trips
// Current Trip - checks date to see if they are currently on a trip?
// Confirmed Upcoming Trip - checks trips.date and trips.status
// Pending Trips - checks trips.status for pending or approved
// Past Trips - checks trips.date for past trips


// trips
// {
// "id": 117,
// "userID": 1,
// "destinationID": 28,
// "travelers": 3,
// "date": "2021/01/09",
// "duration": 15,
// "status": "approved",
// "suggestedActivities": []
// },

// destinations
// {
// "id": 28,
// "destination": "San Juan, Puerto Rico",
// "estimatedLodgingCostPerDay": 70,
// "estimatedFlightCostPerPerson": 900,
// "image": "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
// "alt": "white and brown concrete buildings near sea under white clouds during daytime"
// },