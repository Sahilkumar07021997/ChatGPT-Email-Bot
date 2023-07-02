window.onhashchange = () => {
    if(window.location.hash && window.location.hash.startsWith('#inbox/')){
        const spans = document.querySelectorAll('span')
        for (let span of spans) {
            if(span.innerText === 'Reply'){
                span.addEventListner('click',function () {
                    const email = document.querySelector('.adn.ads');
                    console.log(email.textContent);
                });
            }
        }
    }
}