// This file, index.js, is the entry point to the app, catching the flags passed
// to it at the command line when initialized.

// The server.js file does the bulk of the rest of the work for this CMS.

'use strict';

var start = require('./server/modules/server.js').start
	, browser = require('zombie')
	, fs = require('fs')
	, debug = require('./server/modules/logger.js').debug
	, errlog = require('./server/modules/logger.js').error

	, portPassed;	// nooline defaults to port 8080 if no port is passed.

// Catch the CLI flags.
if (process.argv.length > 2) {
	
	portPassed = process.argv[2];
	
}

// Start the server.
start(portPassed);

browser.visit('http://localhost', function(e, browser) {
	
	fs.writeFile('index.html', browser.html(), function(error) {
		
		if (error) {
			
			errlog(__filename, error);
			
		} else {
			
			debug(__filename, 'HTML snapshot taken!');
			
		}
	});
});