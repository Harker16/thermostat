'use strict';

function Thermostat() {
  this.temp = 20
}

  Thermostat.prototype.getTemperature = function(){
    return this.temp
  };
  Thermostat.prototype.incTemperature = function(){
  	return this.temp += 1
  };
  Thermostat.prototype.decTemperature = function(){
  	return this.temp -= 1
  };
