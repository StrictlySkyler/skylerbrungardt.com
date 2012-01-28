var Newline = {};

(function(N) {
	
	N.loginLink = document.getElementById('login-link');
	N.header = document.getElementById('header');
	N.originalZ;
	N.validCreds;
	N.mainNav = document.getElementById('main-nav').children[0];
	
	var firstScript = document.getElementsByTagName('script')[0];
	var controlsPath = '/client/js/controls/';
	var src;
	var scriptElements = [];
	var scriptNames = [
		// Newline scripts
		'remove-element.js',
		'create-login-form.js',
		'close-this.js',
		'check-for-content.js',
		'save-this.js',
		'submit-login.js',
		'get-creds.js',
		'login.js',
		'get-input-type.js',
		'check-for-empty.js',
		'error-check.js',
		'create-add-content-button.js',
		'create-edit-content-button.js',
		'logout.js',
		'create-post-form.js',
		'check-state.js',
		'get-content.js',
		'build-content.js',
		'edit-this.js',
		'update-this.js',
		// Custom scripts
		'on-nav.js'
	];
	
	for (var i = 0; i < scriptNames.length; i++) {
		
		src = controlsPath + scriptNames[i];
		scriptElements.push(document.createElement('script'));
		scriptElements[i].src = src;
		
		firstScript.parentNode.insertBefore(scriptElements[i], firstScript);
	}
	
	document.onreadystatechange = function() {
		if (document.readyState === 'complete') {
			N.getContent();
			
			N.loginLink.onclick = N.createLoginForm;
			
			N.onNav(N.mainNav, 'moving-out');
			
		}
	};
	
}(Newline));