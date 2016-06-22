'use strict';

function Thermostat() {
  this.MINIMUM_TEMP = 10
  this.FULL_POWER_MAX = 32
  this.POWER_SAVE_MAX = 25
  this.temp = 20
  this.powerSaveMode = true
}


  Thermostat.prototype.getTemperature = function(){
    return this.temp;
  };
  Thermostat.prototype.incTemperature = function(){
  	if (this.isMaximumTemp()){
  		return
  	}
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
  Thermostat.prototype.isMaximumTemp = function () {
    if(this.isPowerSave() === false) {
     return this.temp === this.FULL_POWER_MAX;
    }
     return this.temp === this.POWER_SAVE_MAX;
  };
  Thermostat.prototype.isPowerSave = function () {
    return this.powerSaveMode === true;
  };
  Thermostat.prototype.switchPsmOff = function (){
    this.powerSaveMode = false;
  };
