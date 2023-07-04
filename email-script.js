window.onload = function () {
  window.onhashchange = () => {
    if (window.location.hash && window.location.hash.startsWith("#inbox/")) {
      const spans = Array.from(document.querySelectorAll("span")).filter(
        (span) => span.innerText === "Reply"
      );
      spans.forEach((span) => {
        span.addEventListener("click", function () {
          const msgs = document.querySelector(".adn.ads").innerText;
          console.log("running from vs!");
            (async function() {
                await chrome.runtime.sendMessage(msgs); 
          })();
        });
      });
    }
  };
};

// try { //PROPER WAY TO HANDLE PROMISE!!
//     const response = await new Promise((resolve, reject) => {
//       chrome.runtime.sendMessage(msgs, (response) => {
//         if (chrome.runtime.lastError) {
//           reject(chrome.runtime.lastError);
//         } else {
//           resolve(response);
//         }
//       });
//     });
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// })();

// spans.forEach((span) => {
//   span.addEventListener("click", function () {
//     console.log("reply button clicked!");
//   });
// });
