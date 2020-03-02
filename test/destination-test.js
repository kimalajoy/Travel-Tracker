import chai from 'chai';
import { expect } from 'chai';

import Destination from '../src/destination.js'



describe('Destionation', function() {
  let destination;

  beforeEach(function() {
    destination = new Destination()
  })

  it('it should be a function', () => {
    expect(Destination).to.be.a('function');
  })

  it('should be an instance of activity', () => {
    expect(destination).to.be.an.instanceof(Destination)
  });

  it('should have an id', () => {
    expect(destination.id).to.equal(1);
  })

  it('should have a destination', () => {
    expect(destination.destination).to.equal("Lima, Peru")
  })

  it('should list the estimated lodging cost per day', () => {
    expect(destination.estimatedLodgingCostPerDay).to.equal(70)
  })

  it('should know the estimated cost for flights per person', () => {
    expect(destination.estimatedFlightCostPerPerson).to.equal(400)
  })

  it('should have an image', () => {
    expect(destination.image).to.be.an.instanceof('url')
  })

  it('should have alt text', () => {
    expect(destination.alt).to.equal("overview of city buildings with a clear sky")
  })

 
});

