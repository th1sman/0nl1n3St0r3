require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessExpiration: process.env.JWT_ACCESS_EXPIRATION || '15m',
    refreshExpiration: process.env.JWT_REFRESH_EXPIRATION || '7d',
  },
  
  flow: {
    apiUrl: process.env.FLOW_API_URL || 'https://sandbox.flow.cl/api',
    apiKey: process.env.FLOW_API_KEY,
    secretKey: process.env.FLOW_SECRET_KEY,
    urlReturn: process.env.FLOW_URL_RETURN || 'http://localhost:5173/payment-status',
    urlConfirmation: process.env.FLOW_URL_CONFIRMATION || 'http://localhost:5000/api/payments/confirm',
  }
};