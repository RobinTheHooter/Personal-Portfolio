const navList = document.querySelector('.nav-list')
const mobileToggle = document.querySelector('.mobile-hamburger-icon')

function toggleButton() {
    const visibility = navList.getAttribute('data-visible')
    
    if (visibility === "false") {
        navList.setAttribute('data-visible', "true")
        mobileToggle.setAttribute('aria-expanded', "true")

    } else {
        navList.setAttribute('data-visible', "false")
        mobileToggle.setAttribute('aria-expanded', "false")
    }
}

mobileToggle.addEventListener('click', toggleButton)