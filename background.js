/*Background Script*/

/*Receive Message from content script*/
chrome.extension.onRequest.addListener(function(request, sender, sendResponse)
{
    if(request.message == "loaded")
    {
       var id = parseInt(sender.tab.id,10);
    }
    else if(request.message == "highlightcompleted")
    {
       console.log("highlightcompleted")
    }
    
})

/*To be called when icon clicked*/
chrome.browserAction.onClicked.addListener(function (tab) 
{
     /*Send highlight mrssage to the content script*/
     chrome.tabs.query({active: true,currentWindow: true}, function(tabs){ chrome.tabs.sendMessage(tabs[0].id, {action: "highlight"}, function(response) { }); });
})
