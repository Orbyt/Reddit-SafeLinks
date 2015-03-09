chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
     // Inspect whether the place where user clicked matches with our list of URL
        chrome.tabs.executeScript(tab.id, {
            "file": "jquery-2.1.3.min.js"
            
        }, function () { // Execute your code
        	
            chrome.tabs.executeScript(tab.id, {"file": "alert.js"});

           console.log("Script Executed .. "); // Notification on Completion
        });
});