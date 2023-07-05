console.log("hello i m using thje service worker");

chrome.runtime.onMessage.addListener(function (
  emailContent,
  sender,
  sendresponse
) {
  console.log(emailContent);
  try {
    (async function () {
      const tabs = await chrome.tabs.query({
        url: "https://chat.openai.com/*",
      });
      if (tabs.length != 0) {
        const tab = tabs[0];

        const gptResponse = await chrome.tabs.sendMessage(tab.id, emailContent); // sending the emailcontent and wait for the response get from the gpt

        sendresponse(gptResponse); //sending back the gpt response back to the gmail-script.
      } else console.error("chat.openai.com is not available!");
    })();

      return true;  // returning true as response.
      
  } catch (error) {
    console.log("error: " + error);
  }
});
