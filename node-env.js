const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(__dirname, '/.env') })

module.exports = {
  PORT: process.env.PORT,
  SESSION_SECRET: process.env.SESSION_SECRET,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
}
