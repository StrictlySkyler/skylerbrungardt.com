(function(N) {
	
	N.getContent = function() {
		var i
			, prop
			, len
			, count = /count-\d+/
			, digits = /\d+/
			, howMany
			, whatKind
			, getPosts
			, content
			, aggregator = {}
			, converter
			, assignContent = function() {
				for (var j in aggregator) {
					if (aggregator.hasOwnProperty(j)) {
						aggregator[j].content = aggregator[j].fetch.responseText
							.split('|split|');
						
						for (i = 0, len = aggregator[j].content.length; i < len; i++) {
							aggregator[j].content[i] = JSON.parse(aggregator[j].content[i]);
						}
						
					}
				}
			}
			
		N.contentAreas = document.querySelectorAll('.content');
		
		converter = N.contentAreas;
		
		N.contentAreas = {};
		
		for (i = 0, len = converter.length; i < len; i++) {
			howMany = parseInt(digits.exec(converter[i].className
														.match(count)[0])[0], 10);
			whatKind = converter[i].id;
			
			aggregator[whatKind] = {};
			
			N.contentAreas[whatKind] = converter[i];
			
		}
		
		for (var k in aggregator) {
			if (aggregator.hasOwnProperty(k)) {
				howMany = parseInt(digits.exec(N.contentAreas[k].className
															.match(count)[0])[0], 10);
				whatKind = N.contentAreas[k].id;
				
				aggregator[k].fetch = new XMLHttpRequest();
				
				aggregator[k].fetch.open('POST', '/get-content', true);
				aggregator[k].fetch.setRequestHeader('Content-Type', 'text/plain');
				aggregator[k].fetch.onreadystatechange = function(event) {
					
					if ((aggregator[k].fetch.readyState === 4) &&
									(aggregator[k].fetch.status === 200)) {
						
						assignContent();
						
						N.buildContent(aggregator, N.contentAreas);
					}
				};
				
				aggregator[k].fetch.send(whatKind + ' ' + howMany);
			}
		}
		
	};

}(Newline));