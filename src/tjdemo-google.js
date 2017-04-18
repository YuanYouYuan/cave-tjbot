var watson = require('watson-developer-cloud');
var config = require('./config');  // gets our username and passwords from the config.js files
var speech_to_text = watson.speech_to_text({
    username: config.username,
    password: config.password,
    version: config.version
});

// Initiate Microphone Instance to Get audio samples
var mic = require('mic');
var micInstance = mic({ 'rate': '44100', 'channels': '2', 'debug': false, 'exitOnSilence': 6 });
var micInputStream = micInstance.getAudioStream();

micInputStream.on('data', function(data) {
    //console.log("Recieved Input Stream: " + data.length);
});

micInputStream.on('error', function(err) {
    console.log("Error in Input Stream: " + err);
});

micInputStream.on('silence', function() {
    // detect silence.
});
micInstance.start();
console.log("TJBot is listening, you may speak now.");

// Setup the GPIO to contorl led light
var Gpio = require('pigpio').Gpio;
var led = new Gpio(17, {mode: Gpio.OUTPUT});
var servo = new Gpio(18, {mode: Gpio.OUTPUT});
var sleep = require('sleep');

var say = require('./google-tts');

var recognizeparams = {
  content_type: 'audio/l16; rate=44100; channels=2',
  model: 'zh-CN_BroadbandModel'  // Specify your language model here
};
var textStream = micInputStream.pipe(
    speech_to_text.createRecognizeStream(recognizeparams)
);



textStream.setEncoding('utf8');
textStream.on('data', function(str) {
    console.log(' ===== Speech to Text ===== : ' + str); // print each text we receive
    parseText(str);
});

textStream.on('error', function(err) {
  console.log(' === Watson Speech to Text : An Error has occurred =====') ; // handle errors
  console.log(err) ;
  console.log("Press <ctrl>+C to exit.") ;
});


function parseText(str) {
    if (containsText(str, "开")) {
        console.log("開燈");
        led.digitalWrite(1);
        say("我開燈囉");
    } else if (containsText(str, "关")) {
        console.log("關燈");
        led.digitalWrite(0);
        say("我關燈囉")
    } else if (containsText(str, "谁") || (containsText(str, "你好"))) {
        console.log("自我介紹");
        say("你好，我是T J bot, 你可以跟我說說話喔");
    } else if (containsText(str, "冷")) {
        console.log("天氣冷");
        say("你可以躲去牆角，那邊有九十度, 很暖和喔")
    } else if (containsText(str, "手")) {
        console.log("揮手");
        say("哈囉哈囉");
        wave();
    } else {
        console.log("我不懂你在說什麼");
        say("我不懂你在說什麼");
    }
}

function containsText(str, keyword) {
    return str.indexOf(keyword) >= 0;
}

function wave() {
    servo.servoWrite(1000);
    sleep.sleep(1);
    servo.servoWrite(2000);
    sleep.sleep(1);
}

