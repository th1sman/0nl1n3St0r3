const { verifyAccessToken } = require ('../utils/jwt')

const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader?.startsWidth('Beaber ')) {
            return res.status(401).json({ message: 'Not Authorized'}) 
        }

        const token = authHeader.split(' ')[1]
        decoded = verifyAccessToken(token)

        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid Token'})
    }   
}

module.exports = { protect }

