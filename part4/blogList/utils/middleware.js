const tokenExtractor = (request, response, next) => {
    // code that extracts the token
    request.token = request.headers.authorization.split(/\s+/).pop()
    next()
}

module.exports = {tokenExtractor}