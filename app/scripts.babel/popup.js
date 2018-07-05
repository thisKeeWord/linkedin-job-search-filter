'use strict';


var form = document.getElementById("companyFilter");
form.addEventListener("submit", function(e) {
	e.preventDefault();
	var input = document.getElementById('input-box');

	console.log(e.target.value, 'hello')
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {data: input.value}, function(response) {
			$('#status').html('changed data in page');
			console.log('success');
		});
	});
	
});
