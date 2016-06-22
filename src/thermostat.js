'use strict';

function Thermostat() {
  this.MINIMUM_TEMP = 10
  this.temp = 20
}


  Thermostat.prototype.getTemperature = function(){
    return this.temp;
  };
  Thermostat.prototype.incTemperature = function(){
  	return this.temp += 1;
  };
  Thermostat.prototype.decTemperature = function(){
    if (this.isMinimumTemp()) {
      return;
    }
    return this.temp -= 1;
  };
  Thermostat.prototype.isMinimumTemp = function () {
    return this.temp === this.MINIMUM_TEMP;
  };
