var Newline = {};

document.onreadystatechange = function() {
	if (document.readyState === 'complete') {
		(function(N) {
			N.loginLink = document.getElementById('login-link');
			N.header = document.getElementById('header');
			N.originalZ;
			N.validCreds;
			N.mainNav = document.getElementById('main-nav').children[0];
			
			N.getContent();
			
			N.loginLink.onclick = N.createLoginForm;
			
			N.onNav(N.mainNav, 'moving-out');
		}(Newline));
	}
}