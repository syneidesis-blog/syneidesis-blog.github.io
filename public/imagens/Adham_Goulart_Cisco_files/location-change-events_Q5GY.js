const locationChangeEvent = () => {
    const oldPushState = history.pushState
    history.pushState = function pushState() {
        const result = oldPushState.apply(this, arguments)
        window.dispatchEvent(new Event('pushstate'))
        window.dispatchEvent(new Event('locationchange'))
        return result
    }

    const oldReplaceState = history.replaceState
    history.replaceState = function replaceState() {
        const result = oldReplaceState.apply(this, arguments)
        window.dispatchEvent(new Event('replacestate'))
        window.dispatchEvent(new Event('locationchange'))
        return result
    }

    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'))
    })
}

locationChangeEvent()

window.addEventListener('locationchange', function (event) {
    const pathsArr = ['launch']
    const pathName = event?.target?.location?.pathname
    const currentPathFirstIndex = pathName?.split('/')[1]
    const isTopBar = pathsArr?.includes(currentPathFirstIndex)
    const topBar = document.querySelector('.site-nav-header')

    if (isTopBar) {
        topBar?.classList.add('hide')
    } else {
        topBar?.classList.remove('hide')
    }
})
