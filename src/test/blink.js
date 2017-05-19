var Gpio = require('pigpio').Gpio;
var led = new Gpio(17, {mode: Gpio.OUTPUT});
setInterval(function() {
    led.digitalWrite(led.digitalRead()^1);
}, 100);
