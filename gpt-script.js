console.log("i m in GPT-script!");

chrome.runtime.onMessage.addListener(function (
  emailContent,
  sender,
  sendresponse
) {
  // console.log(emailContent);
  const textArea = document.querySelector("textarea");
  textArea.value =
    "Respond to the most recent email in a professional tone and brief about 100-150 words and sign off with my name (Sahil kumar) at the end: \n" +
    emailContent;
  const button = textArea.nextElementSibling;

  button.click(); //click the button to send the response to the mail
  

  const callback = function (mutationList, observer) {
    for (const mutation of mutationList) {
      if (mutation.attributeName === "disabled") {
        if (button.disabled === false) {
          //console.log('GPT response is finished');
          const responses = document.querySelector(
            "#__next > div.overflow-hidden.w-full.h-full.relative.flex.z-0 > div.relative.flex.h-full.max-w-full.flex-1.overflow-hidden > div > main > div.flex-1.overflow-hidden > div > div > div"
          );
          const childNodes = Array.from(responses.childNodes);
          const lastResponseText = childNodes[childNodes.length - 2].innerText;
          sendresponse(lastResponseText);
        }
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(button, { attributes: true });

  return true; // return true as response.
});
