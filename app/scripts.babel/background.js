'use strict';

var views = chrome.extension.getViews({
	type: 'popup'
});
console.log('yo')
if (location.href.includes('https://www.linkedin.com/jobs/search/')) {
  console.log('in url')
	for (var i = 0; i < $('.job-card-search__company-name-link').length; i++) {
		if ($($('.job-card-search__company-name-link')[i]).children()[0].innerText === 'VirtualVocations' || $($('.job-card-search__company-name-link')[i]).children()[0].innerText === 'Cybercoders') {
			$('.job-card-search__company-name-link')[i].remove();
		}
	}
}
