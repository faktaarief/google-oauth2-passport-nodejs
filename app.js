const cors = require('cors')
const express = require('express')
const passport = require('passport')
const session = require('express-session')

const { SESSION_SECRET, PORT } = require('./node-env')

const app = express()
const router = express.Router()

require('./passport-config')(passport)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(session({ 
  secret: SESSION_SECRET,
  name: 'login-session',
  resave: false,
  saveUninitialized: false,
}))

app.use(passport.initialize())
app.use(passport.session())

const isLoggedIn = (req, res, next) => req.user ? next() : res.redirect('/failed')

app.get('/', (req, res) => res.json({ message: 'Hello World!' }))
app.get('/success', isLoggedIn, (req, res) => res.json({ message: 'Login Successfully!' }))
app.get('/failed', (req, res) => res.status(401).json({ message: 'Unauthorized' }))

// Routing Group Auth
app.use('/auth/google', [
  router.get('/login', passport.authenticate('google', { scope: ['profile'] })),
  router.get('/callback', passport.authenticate('google', { failureRedirect: '/failed', successRedirect: '/success' })),
  router.get('/logout', (req, res) => { req.logout(), res.json({ message: 'Goodbye!' }) })
])

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))
