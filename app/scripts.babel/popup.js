'use strict';


// if user added company twice, doesn't handle
var companyList = [];
var form = document.getElementById("companyFilter");
form.addEventListener("submit", function(e) {
	e.preventDefault();
	var input = document.getElementById('input-box').value.split(", ");
	console.log(input, 'input')
	if (input !== null) {
		companyList = companyList.concat(input);
		console.log('first list', companyList)
		chrome.storage.sync.get(['key'], function(result) {
			// console.log(typeof result.key)
			if (result.key !== undefined || result.key !== null) {
				companyList = companyList.concat(result.key);
				console.log(companyList)
			}
			chrome.storage.sync.set({key: companyList}, function() {
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {data: result}, function(response) {
						console.log('success');
					});
				});
			});
		});
	}
});
