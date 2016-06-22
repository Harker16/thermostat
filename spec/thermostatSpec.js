'use strict';

describe('Thermostat', function(){

var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('can increase temperature by pressing up', function(){
  	thermostat.incTemperature();
  	expect(thermostat.getTemperature()).toEqual(21);
  });

  it('can decrease temperture by presssing down', function() {
  	thermostat.decTemperature();
  	expect(thermostat.getTemperature()).toEqual(19);
  });
});
