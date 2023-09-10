const express = require("express");
const route = express.Router();
const data = require("../data");
const { Invoice } = require("../models/invoiceModel");
const generateRandom = require("../lib");
const { v4: uuidv4 } = require("uuid");
route.get("/", async (request, response) => {
  try {
    const allInvoice = await Invoice.find();
    return response.json({ message: "success", allInvoice }).status(200);
  } catch (error) {}
});

route.get("/:id", async (request, response) => {
  const { idTag } = request.body;
  try {
    const invoice = await Invoice.findOne({ _id: request.params.id });

    if (invoice) {
      if (idTag === invoice.idTag) {
        return response.json({ message: "success", invoice }).status(200);
      } else {
        return response.json({ message: "resources not-found" }).status(404);
      }
    } else {
      return response.json({ message: "invoice not found" }).status(404);
    }
  } catch (error) {
    response.json({ message: "internal server error", error }).status(500);
  }
});

route.post("/", async (request, response) => {
  const newInvoice = new Invoice(request.body);
  const idTag = uuidv4().substr(0, 5);
  newInvoice.idTag = idTag; //
  try {
    const saveInvoice = await newInvoice.save();
    return response
      .json({ message: "New Invoice successfully created", saveInvoice })
      .status(201);
  } catch (error) {
    response.json({ message: "Internal server error", error }).status(500);
  }
});

//update function

route.put("/:id", async (request, response) => {
  try {
    const invoice = await Invoice.findById(request.params.id);
    if (!invoice) {
      return response.status(404).json({ message: "Record not found" });
    }

    const updatedInvoice = await Invoice.findByIdAndUpdate(
      request.params.id,
      { $set: { status: "paid" } },
      { new: true } // This option returns the updated document
    );

    return response.status(200).json({
      message: "Status updated to 'paid'",
      updatedInvoice,
    });
  } catch (error) {
    console.error("Error message", error);
    response.status(500).json({ message: "Internal server error" });
  }
});

route.delete("/:id", async (request, response) => {
  try {
    const invoice = await Invoice.findByIdAndRemove(request.params.id);
    if (!invoice) {
      return response.status(404).json({ message: "Resource not found" });
    }
    return response.status(200).json({
      message: "Successfully deleted an invoice",
      deletedInvoice: invoice,
    });
  } catch (error) {
    console.error("Error message", error);
    response.status(500).json({ message: "Internal server error" });
  }
});

module.exports = route;
