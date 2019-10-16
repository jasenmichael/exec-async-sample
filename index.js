var spawn = require('child_process').spawn;
var child = spawn('./test.sh');

// You can also use a variable to save the output 
// for when the script closes later
var scriptOutput = "";

child.stdout.setEncoding('utf8');
child.stdout.on('data', function(data) {
    //Here is where the output goes

    console.log('stdout: ' + data.trim());

    data=data.toString();
    scriptOutput+=data;
});

child.stderr.setEncoding('utf8');
child.stderr.on('data', function(data) {
    //Here is where the error output goes

    console.log('stderr: ' + data);

    data=data.toString();
    scriptOutput+=data;
});

child.on('close', function(code) {
    //Here you can get the exit code of the script

    console.log('closing code: ' + code);

    console.log('Full output of script: ');
    console.log(scriptOutput);
});