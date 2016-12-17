chrome.browserAction.onClicked.addListener(function(tab)
{
	chrome.tabs.executeScript(tab.id, {
		file: '/node_modules/underscore/underscore-min.js'
});
	chrome.tabs.executeScript(tab.id, {
		file: 'inject.js'
});
});
