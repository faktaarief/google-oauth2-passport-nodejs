const GoogleStrategy = require('passport-google-oauth20').Strategy

const { CLIENT_ID, CLIENT_SECRET, PORT } = require('./node-env')

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy({
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: `http://localhost:${PORT}/auth/google/callback`
    },
    async (accessToken, refreshToken, profile, done) => done(null, profile)
    )
  )

  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => done(null, id))
}
