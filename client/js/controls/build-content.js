(function(N) {
	
	var i
		, len
		, targetArea
		, article
		, title
		, body
		, details;
	
	N.buildContent = function(aggregator, contentAreas) {
		
		if (!N.runBuildOnce) {
			
			for (var j in aggregator) {
				if (aggregator.hasOwnProperty(j)) {
					
					aggregator[j].content.sort(function(a, b) {
						return Date.parse(a.date.replace(' at ', '')) -
							Date.parse(b.date.replace(' at ', ''));
					});
					
					for (i = 0, len = aggregator[j].content.length; i < len; i++) {
						article = document.createElement('article');
						title = document.createElement('h3');
						body = document.createElement('div');
						details = document.createElement('p');
						
						article.className = 'article ' + aggregator[j].content[i].name;
						title.className = 'title';
						body.className = 'body';
						details.className = 'details';
						
						contentAreas[j].appendChild(article);
						article.appendChild(title);
						article.appendChild(body);
						article.appendChild(details);
						
						title.innerHTML = aggregator[j].content[i].title;
						body.innerHTML = aggregator[j].content[i].body;
						details.innerHTML = 'Posted by ' +
							aggregator[j].content[i].author +
							' on ' +
							aggregator[j].content[i].date.match(/\d+\/\d+\/\d+/)[0] +
							'.';
						
					}
				}
			}
			
		}
		
		N.checkState();
		
		// Chrome bug: Chrome 16 seems to be a little overzealous, and runs this
		// twice. Firefox 9 doesn't behave that way, so we set a boolean against
		// which to check to ensure that this script is only run once.
		N.runBuildOnce = true;
	}
	
}(Newline));