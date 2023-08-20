// import prisma from "@/prisma";
// import { NextResponse } from "next/server";
// // import fastjsonstringify from "fast-json-stringify";
// import serializeJavascript from "serialize-javascript";

// // connection function
// async function main() {
//   try {
//     await prisma.$connect();
//     console.log("working");
//   } catch (error) {
//     return Error("failed to connect to database");
//   }
// }

// export const GET = async (req, res) => {
//   try {
//     await main();
//     const invoice = await prisma.invoice.findMany();
//     return NextResponse.json(
//       { message: "successful", invoice },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "something went wrong", error },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// // export const POST = async (req, res) => {
// //   try {
// //     const body = await req.json();

// //     // Create a new invoice
// //     await main();
// //     const invoice = await prisma.invoice.create({
// //       data: {
// //         idTag: body.idTag,
// //         createdAt: new Date(),
// //         paymentDue: body.paymentDue,
// //         description: body.description,
// //         paymentTerms: body.paymentTerms,
// //         clientName: body.clientName,
// //         clientEmail: body.clientEmail,
// //         status: body.status,
// //         senderAddress: {
// //           street: body.senderAddress.street,
// //           city: body.senderAddress.city,
// //           postCode: body.senderAddress.postCode,
// //           country: body.senderAddress.country,
// //         },
// //         clientAddress: {
// //           street: body.clientAddress.street,
// //           city: body.clientAddress.city,
// //           postCode: body.clientAddress.postCode,
// //           country: body.clientAddress.country,
// //         },
// //         items: [
// //           {
// //             name: body.items[0].name,
// //             quantity: body.items[0].quantity,
// //             price: body.items[0].price,
// //           },
// //         ],
// //         total: body.total,
// //       },
// //     });

// //     return NextResponse.json(
// //       { message: "Invoice creation successful", invoice },
// //       { status: 201 }
// //     );
// //     // Return the newly created invoice
// //     //   console.log(invoice)
// //     //   res.status(201).json(invoice);
// //   } catch (error) {
// //     NextResponse.json(
// //       { message: "Internal server error", error },
// //       { status: 500 }
// //     );
// //   } finally {
// //     await prisma.$disconnect();
// //   }
// // };

// // export const POST = async (req, res) => {
// //   try {
// //     const body = await req.json();
// //     // console.log(body);
// //     await main();
// //     // Create a new invoice
// //     const newInvoice = await prisma.invoice.create({
// //       data: {
// //         idTag: body.idTag,
// //         createdAt: new Date(),
// //         paymentDue: body.paymentDue,
// //         description: body.description,
// //         paymentTerms: body.paymentTerms,
// //         clientName: body.clientName,
// //         clientEmail: body.clientEmail,
// //         status: body.status,
// //         senderAddress: {
// //           street: body.senderAddress.street,
// //           city: body.senderAddress.city,
// //           postCode: body.senderAddress.postCode,
// //           country: body.senderAddress.country,
// //         },
// //         clientAddress: {
// //           street: body.clientAddress.street,
// //           city: body.clientAddress.city,
// //           postCode: body.clientAddress.postCode,
// //           country: body.clientAddress.country,
// //         },
// //         items: {
// //           create: body.items.map((item) => ({
// //             name: item.name,
// //             quantity: item.quantity,
// //             price: item.price,
// //           })),
// //         },
// //         total: body.total,
// //       },
// //     });
// //       console.log(newInvoice)
// //     return NextResponse.json(

// //       { status:200, message: "Invoice creation successful", newInvoice }
// //     );
// //   } catch (error) {
// //     return NextResponse.json(
// //       { message: "Internal server error", error },
// //       { status: 500 }
// //     );
// //   } finally {
// //     await prisma.$disconnect();
// //   }
// // };

// export const POST = async (req, res) => {
//   try {
//     const body = await req.json();
//     // console.log(body);
//       await main();
//       const senderAddress = {
//         street: body.senderAddress.street,
//         city: body.senderAddress.city,
//         postCode: body.senderAddress.postCode,
//         country: body.senderAddress.country,
//       };

//       const clientAddress = {
//         street: body.clientAddress.street,
//         city: body.clientAddress.city,
//         postCode: body.clientAddress.postCode,
//         country: body.clientAddress.country,
//       };

//     const newInvoice = await prisma.invoice.create({
//       data: {
//         idTag: body.idTag,
//         createdAt: new Date(),
//         paymentDue: body.paymentDue,
//         description: body.description,
//         paymentTerms: body.paymentTerms,
//         clientName: body.clientName,
//         clientEmail: body.clientEmail,
//         status: body.status,
//         senderAddress,
//         clientAddress,
//         items: {
//           create: body.items.map((item) => ({
//             name: item.name,
//             quantity: item.quantity,
//             price: item.price,
//           })),
//         },
//         total: body.total,
//       },
//     });
//     const jsonInvoice = serializeJavascript(newInvoice, null, 2);

//     return NextResponse.json({
//       status: 200,
//       message: "Invoice creation successful",
//       jsonInvoice,
//     });
//   } catch (error) {
//    console.log(error)
//   } finally {
//     await prisma.$disconnect();
//   }
// };
