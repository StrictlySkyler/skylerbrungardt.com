var fs = require('fs');

var load = function(postData, request, response) {
	
	var i;
	var howMany;
	var whatKind;
	var file;
	var content = '';
	var totalFiles;
	
	postData = postData.split(' ');
	
	howMany = parseInt(postData[1], 10);
	whatKind = postData[0];
	
	fs.readdir('./client/content/' +
								whatKind +
								'/', function(error, files) {
		if (error) {
			
			console.log(error);
		
		} else {
			
			console.log(files.length + ' ' + whatKind + ' posts total.');
			
			totalFiles = files.length;
			
			if (howMany > totalFiles) {
				howMany = totalFiles;
			}
			
			getFiles();
			
		}
	});
	
	var getFiles = function() {
		console.log('Grabbing ' + howMany + ' most recent ' + whatKind + ' posts...');
	
		for (i = 0, howMany; i < howMany; i++) {
			
			file = whatKind + '-' + (totalFiles - i);
			
			console.log('...Grabbing post: ' + file);
			
			fs.readFile('./client/content/' +
									whatKind +
									'/' +
									file +
									'.json', 'utf8', function(error, data) {
				if (error) {
					
					console.log(error);
					
				} else {
					
					if (content.split('|split|').length === i) {
						
						content += data;
						
						console.log('Finished grabbing posts, now sending them.');
						
						response.writeHead(200, {
							'Content-Type': 'text/plain'
						});
						response.write(content);
						response.end();
						
					} else if (content.split('|split|').length < i) {
						
						content += data + '|split|';
						
					}
					
				}
			});
		}
	}
}

exports.load = load;