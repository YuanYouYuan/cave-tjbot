var str = 'apple banana'
var exec = require('child_process').exec;

exec('espeak' + ' \"'+ str + '\"');
//exec('espeak hello');

