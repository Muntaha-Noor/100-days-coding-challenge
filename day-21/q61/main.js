"use strict";
var vehicles;
(function (vehicles) {
    vehicles[vehicles["car"] = 0] = "car";
    vehicles[vehicles["truck"] = 1] = "truck";
    vehicles[vehicles["motorcycle"] = 2] = "motorcycle";
})(vehicles || (vehicles = {}));
console.log(vehicles.car);
