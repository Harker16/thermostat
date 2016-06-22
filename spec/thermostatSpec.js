'use strict';

var thermostat = new Thermostat();

describe('Thermostat', function(){
  it('starts at 20 degrees', function(){
    expect(thermostat.temp).toEqual(20);
  });
});
