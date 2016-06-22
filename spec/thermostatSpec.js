'use strict';

describe('Thermostat', function(){

var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('adjust temperature', function(){
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

  describe('Switching between power modes', function() {
  	it('is in power save mode by default', function() {
  		expect(thermostat.inPowerSave()).toBe(true);
  	});
  });


  describe('Set temperature limits', function(){
    it('has a minimum temperature of 10', function(){
      for ( var i = 0; i < 11; i++ ) {
        thermostat.decTemperature();
      }
      expect(thermostat.getTemperature()).toEqual(10);
    });
    it('has a default maximum temperature', function() {
    	for ( var i = 0; i < 6; i++ ) {
    		thermostat.incTemperature();
    	}
    	expect(thermostat.getTemperature()).toEqual(25);
    });
  });
});
