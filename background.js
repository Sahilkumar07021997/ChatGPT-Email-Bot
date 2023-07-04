console.log("hello i m using thje service worker");

chrome.runtime.onMessage.addListener(
    function (emailContent, sender, sendresponse) { 
        console.log(emailContent);
        try {
            (async function () {
                const tabs = await chrome.tabs.query({ url: 'https://chat.openai.com/*' });
                 if (tabs.length != 0) {
                     const tab = tabs[0];
                    await chrome.tabs.sendMessage(tab.id, emailContent);
                 }
                 else console.log("chat.openai.com is not available!");
             })(); 
        } catch (error) {
            console.log("error: " + error);
        }
    }
)