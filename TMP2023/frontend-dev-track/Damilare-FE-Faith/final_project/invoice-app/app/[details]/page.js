"use client";

import { DataContext } from "@/components/Provider";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

export default function Details({ params }) {
  const { details } = params;
  // const data = useContext(DataContext);
  // console.log(data)
  const router = useRouter();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  async function fetchInvoice() {
    try {
      await axios
        .get("https://invoice-api2.onrender.com/api/invoice/")
        .then((response) => response.data)
        .then((data) => setData(data.allInvoice))
        .catch((error) => console.error("Error message", error));
    } catch (error) {
      console.error("error message ", error);
    }
  }

  useEffect(() => {
    fetchInvoice();
  }, []);

  const invoice = data.find((item) => item.idTag === details);
  if (!invoice) return <h2 className="text-2xl">Loading... Please wait!!!</h2>;
  console.log(invoice);
  const amount = invoice.items.reduce((acc, item) => acc + item.total, 0);
  const { _id } = invoice;
  console.log("id modifies", _id);

  // Delete function
  async function handleDelete() {
    const confirm = window.confirm(
      `Are you sure you want to delete ${invoice.clientName} invoice?`
    );
    if (!confirm) return;
    try {
      await axios
        .delete(`https://invoice-api2.onrender.com/api/invoice/${_id}`)
        .then((response) => response.data)
        .then((data) => {
          console.log(data.message);
          toast.success(data?.message, {
            position: toast.POSITION.TOP_RIGHT,
          });

          router.push("/");
        })
        .catch((error) => console.error("error", error));
    } catch (error) {}
  }

  async function handleMarkedPaid() {
    const confirm = window.confirm(
      `Are you sure you want to make ${invoice.clientName} invoice paid?`
    );
    if (!confirm) return;
    try {
      await axios
        .put(`https://invoice-api2.onrender.com/api/invoice//${_id}`)
        .then((response) => response.data)
        .then((data) => {
          // console.log(data.message)
          // alert(data.message);
          toast.success(data?.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          fetchInvoice();
        });
    } catch (error) {
      console.error("error from server", error);
    }
  }

  const motionEffect = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 12 },
    },
  };
  // console.log(data)

  return (
    <motion.div
      variants={motionEffect}
      initial="initial"
      animate="animate"
      className=" min-h-screen   flex items-start md:w-[60%] justify-center mx-auto "
    >
      <div className="md:mt-[3rem] gap-3 flex flex-col justify-center items-center w-full relative">
        <Link href="/" className="flex justify-center items-center gap-2 ">
          {" "}
          <img src="./icon-arrow-left.svg" /> Back
        </Link>
        <div className="w-full md:h-[4.5rem]  flex  justify-center items-center  bg-custom-base rounded-lg ">
          <div className="flex justify-between w-full items-center mx-4">
            <div className="flex  items-center gap-3">
              <h2>status</h2>
              <div className="flex items-center justify-end gap-3 bg-custom-paid_1 pl-5 pb-3 pt-3 pr-6 rounded-lg">
                <p
                  className={
                    invoice.status === "paid"
                      ? "h-[10px] w-[10px] bg-custom-paid_2 rounded-full"
                      : invoice.status === "pending"
                      ? "h-[10px] w-[10px] bg-custom-pending_2 rounded-full"
                      : "h-[10px] w-[10px] bg-custom-draft_2 rounded-full"
                  }
                ></p>
                <p
                  className={
                    invoice.status === "paid"
                      ? "text-custom-paid font-light text-sm"
                      : invoice.status === "pending"
                      ? "text-custom-pending font-light text-sm"
                      : "text-custom-draft font-light text-sm"
                  }
                >
                  {" "}
                  {invoice.status}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-gray-500 bg-custom-nav px-3 py-1 rounded-full ">
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 px-3 py-1 text-white rounded-full "
              >
                Delete
              </button>
              <button
                onClick={handleMarkedPaid}
                className="bg-purple-400 py-1 px-3 text-white hidden md:block rounded-full "
              >
                Mark as paid
              </button>
            </div>
          </div>
        </div>

        <div className="w-full p-8  flex  justify-center relative items-center mb-8  bg-custom-base rounded-lg ">
          <div className="flex w-full flex-col justify-end mx-4 pt-6 pb-7 ">
            {/* section one  */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-start justify-start">
                <h2 className="font-bold">
                  {" "}
                  <span className="text-gray-400">#</span>{" "}
                  {invoice.idTag.toUpperCase()}
                </h2>
                <p className="text-gray-400"> {invoice.clientName}</p>
              </div>
              <div className="flex flex-col  text-gray-400 justify-end items-end">
                <p>{invoice.senderAddress.street}</p>
                <p>{invoice.senderAddress.city}</p>
                <p>{invoice.senderAddress.postCode}</p>
                <p>{invoice.senderAddress.country}</p>
              </div>
            </div>
            {/* section two  */}
            <div className="grid grid-cols-4 md:grid-cols-6 w-full items-start justify-start mt-10">
              <div className="col-span-2 w-full grid grid-rows-5">
                <div className="text-gray-400 font-light ">invoice Date</div>
                <div className="font-bold text-[1.2rem]">
                  {invoice.createdAt.substr(0, 10)}
                </div>
                <div></div>
                <div className="text-gray-400 font-light ">payment Due</div>
                <div className="font-bold text-[1.2rem]">
                  {invoice.paymentDue}
                </div>
              </div>
              <div className="col-span-2 w-full grid grid-row-5">
                <div className="text-gray-400 font-light">Bill to</div>
                <div className=" text-[1.2rem]">{invoice.clientName}</div>
                <div className="text-gray-400 font-thin">
                  {invoice.clientAddress.street}
                </div>
                <div className="text-gray-400 font-thin">
                  {invoice.clientAddress.city}
                </div>
                <div className="text-gray-400 font-thin">
                  {invoice.clientAddress.postCode}
                </div>
                <div className="text-gray-400 font-thin">
                  {invoice.clientAddress.country}
                </div>
              </div>
              <div className="col-span-2 w-full grid grid-row-5">
                <div className="text-gray-400 font-light"> Sent to</div>
                <div className="col-span-5">{invoice.clientEmail}</div>
              </div>
            </div>
            {/* section three  */}

            <div className="grid bg-custom-card  w-full items-center pt-6 rounded-t-lg rounded-b-lg mt-20 ">
              {invoice.items.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 md:grid-cols-8  bg-custom-card   mx-auto w-full pb-7"
                >
                  <div className=" col-span-2 flex  flex-col items-center text-start w-full justify-start">
                    <h3 className="text-gray-400 text-start">Item name</h3>
                    <p className="text-center">{item.clientName}</p>
                  </div>
                  <div className=" hidden col-span-2 md:flex md:flex-col md:items-center md:justify-start">
                    <h3 className="text-gray-400">Qty</h3>
                    <p>{item.quantity}</p>
                  </div>
                  <div className=" hidden col-span-2 md:flex md:flex-col md:items-center md:justify-start">
                    <h3 className="text-gray-400">Item price</h3>
                    <p>{item.price}</p>
                  </div>
                  <div className="  flex  flex-col items-center justify-start">
                    <h3 className="text-gray-400">Total</h3>
                    <p>£{item.total}</p>
                  </div>
                </div>
              ))}
              <div className="bg-custom-total rounded-b-lg h-[6rem] w-full mt-8">
                <div className="flex justify-between items-start p-10 rounded-lg rounded-t-none ">
                  <h2 className="text-white font-semibold text-2xl">Amount</h2>
                  <h2 className="text-white font-semibold text-2xl">
                    {" "}
                    £{amount}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
