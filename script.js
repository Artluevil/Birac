
var menuClicked = false

document.querySelector('#burger-options').addEventListener('click', () => {
    if(menuClicked) {
        document.querySelector('#options').classList.remove('options')
        document.querySelector('#options').classList.add('options-hidden')
        document.querySelector('#burger-icon').classList.remove('burger-options-line-clicked')
        document.querySelector('#burger-icon').classList.add('burger-options-line')
        menuClicked = false
    } else {
        document.querySelector('#options').classList.remove('options-hidden')
        document.querySelector('#options').classList.add('options')
        document.querySelector('#burger-icon').classList.remove('burger-options-line')
        document.querySelector('#burger-icon').classList.add('burger-options-line-clicked')
        menuClicked = true
    }
})

document.querySelector('#contact-nav').addEventListener('click', () => {
    console.log('contact clicked')
    window.scrollTo(0,document.body.scrollHeight);
})

document.querySelector('#contact-nav-burger').addEventListener('click', () => {
    console.log('contact clicked')
    window.scrollTo(0,document.body.scrollHeight);
})