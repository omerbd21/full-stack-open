require('dotenv').config()
const config = require('./utils/config')
const logger = require('./utils/logger')
const {PORT} = require("./utils/config");
const {app} = require("./app");

app.listen(process.env.PORT || PORT, () => {
    logger.info(`Server running on port ${PORT}`)
})