var Gpio = require('pigpio').Gpio;
var sleep = require('sleep')
var led = new Gpio(17, {mode: Gpio.OUTPUT});
var ledStatus = true;
for(var i = 0; i < 10; i++)
{
    led.digitalWrite(ledStatus ? 1 : 0);
    ledStatus = !ledStatus;
    sleep.sleep(1);
}
