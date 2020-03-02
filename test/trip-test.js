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
  })

  it('should have an ID', () => {
    expect(trip.id).to.equal(1);
  })

  it('should have a user ID number', () => {
    expect(trip.userID).to.equal(44);
  })

  it('should have a destination id number', () => {
    expect(trip.destinationID).to.equal(49)
  })

  it('should list number of travelers', () => {
    expect(trip.travelers).to.equal(1)
  })

  it('should have a start date', () => {
    expect(trip.date).to.equal("2019/09/16")
  })

  it('should know the duraton of the trip', () => {
    expect(trip.duration).to.equal(8)
  })

  it('should have an approval status', () => {
    expect(trip.status).to.equal('approved')
  })

  it('should have suggested activities', () => {
    expect(trip.suggestedActivities).to.equal()
  })
  
});

