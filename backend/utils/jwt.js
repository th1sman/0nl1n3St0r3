const jwt = require('jsonwebtoken')
const config = require('../config')

const generateAccessToken = (user) => jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    config.jwt.accessSecret,
    { expiresIn: config.jwt.accessExpiration}
)

const generateRefreshToken = (user) => jwt.sign(
    { id: user._id},
    config.jwt.refreshSecret,
    { expiresIn: config.jwt.refreshExpiration}
)

const verifyToken = (token, secret) => jwt.verify(token, secret)

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken: (token) => verifyToken(token, config.jwt.accessSecret),
    verifyRefreshToken: (token) => verifyToken(token, config.jwt.refreshSecret)
}