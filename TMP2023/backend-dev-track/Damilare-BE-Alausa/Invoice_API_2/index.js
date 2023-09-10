const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const invoiceRouter = require("./routes/InvoiceRouter");
const cors = require("cors")


app.use(express.json());
app.use(cors());


// console.log(data);
if (app.get(`env`) === `development`) {
  app.use(morgan("tiny"));
}

app.use("/api/invoice", invoiceRouter);

mongoose
  .connect(
    "mongodb+srv://dhamilare27:bWprmkOonjfiRavf@cluster0.tapj5de.mongodb.net/invoices?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connnected to database...");
    // createInvoice();
  })
  .catch((err) => console.error("could not connect to database", err));
const port = process.env.PORT || 3088;
app.listen(port, () => console.log(`Listening on port ${port}`));
