import chai from 'chai';
import { expect } from 'chai';

import Tip from '../src/trip.js'




describe('Trip', function() {
  let trip;

  beforeEach(function() {
    trip = new Trip()
  })

  it('it should be a function', () => {
    expect(Trip).to.be.a('function');
  })

  it('should be an instance of activity', () => {
    expect(trip).to.be.an.instanceof(Trip);

  
});