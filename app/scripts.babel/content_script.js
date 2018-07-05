// window.onload = function() {
setInterval(function() {
	var companyList = $('.job-card-search__company-name-link');
	for (var i = 0; i < companyList.length; i++) {
		if ($(companyList[i]).children()[0].innerText === 'VirtualVocations' || $(companyList[i]).children()[0].innerText === 'CyberCoders') {
			$(companyList[i]).parent().parent().parent().parent().parent().remove();
		}
	}
}, 0000);
// }