(function(N) {
	N.removeElement = function(element) {
				
		if (element) {
			
		var parent = element.parentNode
			,	interval = window.setInterval(function() {
				
				if (window.getComputedStyle(element)
						.getPropertyValue('opacity') === '0') {
					if (window.getComputedStyle(element)
							.getPropertyValue('height') === '0px') {
						
						parent.removeChild(element);
						window.clearInterval(interval);
					}
				}
			}, 250);
			
		element.style.opacity = 0;
		element.className += ' hidden';
		}
	}
}(Newline));