const scriptTag = document.currentScript
const marketoId = scriptTag.dataset.marketoId
const marketoUrl = scriptTag.dataset.marketoUrl

;(function (c, h, a, f, i, l, e) {
    c[a] =
        c[a] ||
        function () {
            ;(c[a].q = c[a].q || []).push(arguments)
        }
    c[a].a = i
    c[a].l = l
    c[a].e = e
    var g = h.createElement('script')
    g.async = true
    g.type = 'text/javascript'
    g.src = f + '?aid=' + i
    var b = h.getElementsByTagName('script')[0]
    b.parentNode.insertBefore(g, b)
})(window, document, 'rtp', marketoUrl, marketoId)
window.rtp('send', 'view')
window.rtp('get', 'campaign', true)
