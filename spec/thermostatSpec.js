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
  		expect(thermostat.isPowerSave()).toBe(true);
  	});
    it('can switch psm off', function(){
      thermostat.switchPsmOff();
      expect(thermostat.isPowerSave()).toBe(false);
    });
    it('can switch psm on', function(){
      thermostat.switchPsmOff();
      expect(thermostat.isPowerSave()).toBe(false);
      thermostat.switchPsmOn();
      expect(thermostat.isPowerSave()).toBe(true);
    });
  });


  describe('Set temperature limits', function(){
    it('has a minimum temperature of 10', function(){
      for ( var i = 0; i < 11; i++ ) {
        thermostat.decTemperature();
      }
      expect(thermostat.getTemperature()).toEqual(10);
    });
    it('has a default maximum temperature of 25', function() {
    	for ( var i = 0; i < 6; i++ ) {
    		thermostat.incTemperature();
    	}
    	expect(thermostat.getTemperature()).toEqual(25);
    });
    it('has a maximum of 32 when psm is off', function(){
      thermostat.switchPsmOff();
      for ( var i = 0; i < 12; i++ ) {
    		thermostat.incTemperature();
    	}
    	expect(thermostat.getTemperature()).toEqual(32);
    });
    it('can be reset to the default temperature', function() {
      for ( var i = 0; i < 5; i++ ) {
        thermostat.incTemperature();
      }
      thermostat.resetTemperature();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });
  describe('displaying usage levels', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.decTemperature();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage')
      });
    });
    describe('when the temperature is between 18 and 25 degrees', function() {
      it('it is considered medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
    describe('when the temperature is anything else', function() {
      it('it is considered high-usage', function() {
        thermostat.switchPsmOff();
        for (var i = 0; i < 6; i++) {
          thermostat.incTemperature();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
