import chai from 'chai';
import { expect } from 'chai';

import Traveler from '../src/traveler.js'




describe('Traveler', function() {
  let traveler;

  beforeEach(function() {
    traveler = new Traveler()
  })

  it('it should be a function', () => {
      expect(Traveler).to.be.a('function');
    })

  it('should be an instance of activity', () => {
    expect(traveler).to.be.an.instanceof(Traveler);

  it('should have an ID', () => {
    expect(traveler.id).to.equal(1)
  })

  it('should have a name', () => {
    expect(traveler.name).to.equal('name')
  })

  it('should have a type', () => {
    expect(traveler.travelerType).to.equal('type')
  })
    

})