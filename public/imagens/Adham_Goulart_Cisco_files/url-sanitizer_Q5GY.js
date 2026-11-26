const unsupportedCharacters = ['^']
const queryParam = location.search

try {
    decodeURI(location.href)
    for (const unsupportedCharacter of unsupportedCharacters) {
        if (queryParam.includes(unsupportedCharacter)) {
            throw new Error(`Unsupported Character in queryParam ${unsupportedCharacter}`)
        }
    }
} catch (error) {
    const { origin } = location
    console.log('Invalid character present in the URL ' + window.location.href, error)
    location.href = origin
}
