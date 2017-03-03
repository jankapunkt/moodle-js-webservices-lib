/*
	
	Summary: 

	NodeJS build script to support babel build on windows and OSX/Linux in one script
	Run this file in your npm script (e.g. prepublish) via "node babel_build.js"
*/


const os = require('os');
const exec = require('child_process').exec;

console.log("-----------------------------");
console.log("BABEL BUILDING FOR PLATFORM " + os.platform());
console.log("-----------------------------");

if (os.platform() === "win32"){
	exec('if exist %cd%\dist rmdir %cd%\dist else echo "dist does not exist, continue with build" ', function (err, stdout, stderr) {
		if (err)
			throw err;
		if (stderr)
			throw stderr;
		else {
			console.log(stdout)
			exec('babel lib --out-dir dist --ignore *.tests.js,testHelpers/*', function (err, stdout, stderr) {
				if (err) 
					throw err;
				if (stderr)
					throw stderr;
				else
					console.log(stdout);
			});
		}
	});
}else{
	exec('rm -rf dist/** && babel lib --out-dir dist --ignore *.tests.js,testHelpers/*', function (err, stdout, stderr) {
		if (err) 
			throw err;
		if (stderr)
			throw stderr;
		else
			console.log(stdout);
	});
}