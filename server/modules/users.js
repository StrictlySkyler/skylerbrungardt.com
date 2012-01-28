var Crypto = require('../../shared/js/encryption/crypto.js').Crypto;
var AES = require('../../shared/js/encryption/aes.js');
var blockmodes = require('../../shared/js/encryption/blockmodes.js');
var HMAC = require('../../shared/js/encryption/hmac.js');
var PBKDF2 = require('../../shared/js/encryption/pbkdf2.js');
var SHA1 = require('../../shared/js/encryption/sha1.js');
var fs = require('fs');

var add = function(username, password) {

	var hash = Crypto.AES.encrypt(password, password);
	
	fs.writeFile('./shared/creds/' + username + '.hash', hash, 'utf8', function() {
		console.log('Saved!');
	});
	
};

exports.add = add;