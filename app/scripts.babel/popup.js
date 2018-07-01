'use strict';

var views = chrome.extension.getViews({
	type: 'popup'
});

chrome.tabs.executeScript(tabId, details, function() {
	if (location.href.includes('https://www.linkedin.com/jobs/search/')) {
		for (var i = 0; i < $('.job-card-search__company-name-link').length; i++) {
			if ($($('.job-card-search__company-name-link')[i]).children()[0].innerText === 'VirtualVocations' || $($('.job-card-search__company-name-link')[i]).children()[0].innerText === 'Cybercoders') {
				$('.job-card-search__company-name-link')[i].remove();
			}
		}
	}
});
