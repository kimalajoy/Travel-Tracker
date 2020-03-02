import chai from 'chai';
import { expect } from 'chai';

import Agent from '../src/agent.js'



describe('Agent', function() {
  let agent;

  beforeEach(function() {
    agent = new Agent()
  })

  it('it should be a function', () => {
    expect(Agent).to.be.a('function');
  })

  it('should be an instance of activity', () => {
    expect(agent).to.be.an.instanceof(Agent);
  })

  it('should be able to calculate annual income', () => {
    expect()
  })
  
  it('should be able to calculate travelers today', () => {

  })

  it('should be able to approve trip requests', () => {

  })

  it('should be able to deny trip requests', () => {

  })

  it('should be able to search traveler by name', () => {

  })

  it('should be able to view traveler by name', () => {

  })
  
  it('should be able to view a list of a specific travelers trips', () => {

  })

  it('should be able to veiw the total amount spent', () => {

  })

  it('should be able to delete an upcoming trip for a user', () => {
    
  })

});
