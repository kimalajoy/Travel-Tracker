import './css/base.scss';
import './css/variables.scss';

console.log('Traveler!');

// class Traveler {
//   contstructor () {
//     this.id = id;
//     this.name = name;
//     this.travelerType = travelerType;
//   }
// }

let travelerGreeting = document.querySelector('.traveler')

// fetching traveler info
fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers')
  .then(response => response.json())
  .then(data => greetTraveler(data))
  .catch(error => console.log(error.message))



function greetTraveler (travelers) {
  console.log(travelerGreeting)
  let random = Math.floor(Math.random() * travelers.travelers.length);
  let greetHtml = `Welcome Traveler <span class='traveler-name'>${travelers.travelers[random].name}</span>!`;
  console.log(`${travelers.travelers[random].id}`)
  travelerGreeting.innerHTML = greetHtml; 
}

// Match travelers.id to trips.userID
//   to get start date, duration, status, travelers
// (travelers.travelers[random].id = trips.userID)

// then match trips.destinationID to destinations.id
//   to get destination name, flight cost, lodging cost image with alt
//(trips.destination.id = destinations.id)


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