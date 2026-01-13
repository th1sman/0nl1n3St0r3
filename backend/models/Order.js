const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    commerceOrder: { type: String, required: true, unique: true },
    userEmail: String,
    amount: Number,
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
        price: Number,
    }],
    totalAmount: { type: Number, required: true },
    status: {
        type: String,
        enum: ['pending', 'paid', 'failed', 'cancelled'],
        default: 'pending'
    },
    flowToken: String,
    flowOrder: String,
    paymentMethod: String,
    payerEmail: String
}, { timestamps: true})

module.exports = mongoose.model('Order', orderSchema)

