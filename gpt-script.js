console.log("i m in GPT-script!");

chrome.runtime.onMessage.addListener(
    function (emailContent, sender, sendresponse) { 
        console.log(emailContent);
    }
)