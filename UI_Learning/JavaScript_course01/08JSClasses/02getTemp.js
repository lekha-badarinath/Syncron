"use strict";
exports.__esModule = true;
var Temperature = /** @class */ (function () {
    function Temperature(temp) {
        this.temp = temp;
    }
    Temperature.prototype.toFahrenheit = function () {
        return (this.temp * (9 / 5)) + 32;
    };
    Temperature.prototype.toCelsius = function () {
        return (this.temp - 32) * (5 / 9);
    };
    return Temperature;
}());
exports.Temperature = Temperature;
// let x = new Temperature()
//this will be exported to the main.js file and executed there.
