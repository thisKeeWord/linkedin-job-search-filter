// window.onload = function() {
// setInterval(function() {
// 	var companyList = $('.job-card-search__company-name-link');
// 	console.log("akdfg")
// 	for (var i = 0; i < companyList.length; i++) {
// 		if ($(companyList[i]).children()[0].innerText === 'VirtualVocations' || $(companyList[i]).children()[0].innerText === 'CyberCoders') {
// 			$(companyList[i]).parent().parent().parent().parent().parent().remove();
// 		}
// 	}
// }, 0000);
// }

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	// Handle message.
	// In this example, message === 'whatever value; String, object, whatever'\
	console.log(message.data, sender, 'as;dif')
	// window.onload = function() {
		setInterval(function() {
			var companyList = $('.job-card-search__company-name-link');
			for (var i = 0; i < companyList.length; i++) {
				if ($(companyList[i]).children()[0].innerText === 'VirtualVocations' || $(companyList[i]).children()[0].innerText === 'CyberCoders' || $(companyList[i]).children()[0].innerText === 'Apple') {
					$(companyList[i]).parent().parent().parent().parent().parent().remove();
				}
			}
		}, 0000);
	// }
});

// user types into popup. company gets added to storage and sent 
// to content_script. user sees their option from popupand can remove.
// if user removes company, company should get removed from storage
// and sent to content_script to update dom.
// so content_script should be the communicator to the dom