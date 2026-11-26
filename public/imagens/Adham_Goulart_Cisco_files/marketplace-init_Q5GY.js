let i18nextLng = localStorage['i18nextLng']

if (i18nextLng && i18nextLng?.length <= 2) {
    localStorage.removeItem('i18nextLng')
}

window.onunload = function () {}

const toggleLoader = () => {
    const hash = window.location.hash

    if (hash) {
        const loaderContainer = document.querySelector('#indexPageTopLoader')

        if (loaderContainer) {
            loaderContainer.style.display = 'block'
        }
    }
}

toggleLoader()
