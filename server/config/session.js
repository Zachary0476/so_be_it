const session = require('express-session')
const uid = require('uid-safe')
const RedisStore = require('connect-redis')(session)
const client = require('./redis')

module.exports = session({
    genid: req => uid.sync(18) + req.body.name,
    secret: 'zacahry',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        secure: false,
        maxAge: 5 * 60 * 1000,
        httpOnly: true,
        sameSite: true
    },
    store: new RedisStore({
        client: client,
        host: "0.0.0.0",
        port: 27017
    })
})