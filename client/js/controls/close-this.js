(function(N) {
	N.closeThis = function(event) {
		event.preventDefault();

		var self = this,
			parent = self.parentNode,
			name = parent.id,
			i,
			len,
			sure,
			contentArea = self.parentNode.parentNode.parentNode,
			article = self.parentNode.parentNode,
			currentTitle = parent.parentNode.querySelectorAll('.title')[0],
			currentBody = parent.parentNode.querySelectorAll('.body')[0],
			newTitle,
			newBody,
			content = [];
		
		if (self.className.match('edit-controls')) {
			
			newTitle = parent.querySelectorAll('.title')[0];
			newBody = parent.querySelectorAll('.body')[0];
			
			content.push(parent.parentNode.querySelectorAll('.edit-post')[0],
								 parent.parentNode.querySelectorAll('.title')[0],
								 parent.parentNode.querySelectorAll('.body')[0],
								 parent.parentNode.querySelectorAll('.details')[0]);
			
			if ((newTitle.value !== currentTitle.innerHTML) ||
					newBody.value !== currentBody.innerHTML) {
				
				sure = confirm('You\'ve made some changes to this content.  ' +
					'Are you sure you want to abandon them?');
				
				if (sure) {
					N.removeElement(parent);
					
					for (i = 0, len = content.length; i < len; i++) {
						content[i].style.display = '';
					}
					
					window.setTimeout(function() {
						for (i = 0, len = content.length; i < len; i++) {
							content[i].style.opacity = 1;
						}
						if (parent.parentNode === contentArea.children[0]) {
							N.createAddContentButton(contentArea);
						}
					}, 250);
				}
				
			} else {
				N.removeElement(parent);
				
				for (i = 0, len = content.length; i < len; i++) {
					content[i].style.display = '';
				}
				
				window.setTimeout(function() {
					for (i = 0, len = content.length; i < len; i++) {
						content[i].style.opacity = 1;
					}
					
					if (parent.parentNode === contentArea.children[0]) {
						N.createAddContentButton(contentArea);
					}
				}, 250);
			}
		} else if (N.checkForContent(self)) {
			
			sure = confirm('You have unsaved content.  ' +
				'Are you sure you want to abadon this new post?');
			
			if (sure) {
				window.setTimeout(function() {
					N.createAddContentButton(contentArea);
					N.removeElement(article);
				}, 250);
			}
			
		} else if (N.validCreds) {
		
			N.createAddContentButton(contentArea);
			N.removeElement(article);
		}
		
	};
}(Newline));