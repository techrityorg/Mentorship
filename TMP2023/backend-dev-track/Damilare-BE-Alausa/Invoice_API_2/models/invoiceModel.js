const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  idTag: String,
  createdAt: { type: Date, default: Date.now },
  paymentDue: String,
  description: String,
  paymentTerms: Number,
  clientName: String,
  clientEmail: String,
  status: String,
  senderAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String,
  },
  clientAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String,
  },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
      total: Number,
    },
  ],
});

const Invoice = mongoose.model("invoice", invoiceSchema);

exports.Invoice = Invoice;
