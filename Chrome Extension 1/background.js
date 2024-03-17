
function MyGenericClick(info, tab) {
    console.log("Clicked an image:", info, tab);
    chrome.windows.create({
        "url": "https://www.facebook.com/sharer.php?u=" + info.srcUrl + "&display=popup",
        "type": "popup"
    })
}

function MyQuoteClick(info, tab) {
    console.log("Clicked on page:", info, tab);
    chrome.windows.create({
        "url": "https://www.facebook.com/sharer.php?u=" + info.pageUrl + "&display=popup&quote=" + info.selectionText,
        "type": "popup"
    })
}

chrome.contextMenus.create ({
    "title": "Share Image",
    "contexts": ["image"],
    "onclick": MyImageClick
})

chrome.contextMenus.create({
    "title": "Share Quote",
    "contexts": ["selection"],
    "onclick": MyQuoteClick
})

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    console.log("message", msg)
    sendResponse({
        "text": "Received the links"
    })
})