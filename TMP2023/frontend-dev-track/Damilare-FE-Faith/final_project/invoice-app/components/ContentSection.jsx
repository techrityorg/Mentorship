"use client";

import { useContext, useEffect, useState } from "react";
import { DataContext } from "./Provider";
import AddNewInvoice from "./addNewInvoice";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

export const ContentSection = () => {
  // const data = useContext(DataContext);
  const [openModal, setOpenModal] = useState(false);
  const [newData, setNewData] = useState([]);
  // submit handler function
  const handleOnSubmit = async (e, inputData) => {
    e.preventDefault();

    try {
      await axios
        .post("https://invoice-api2.onrender.com/api/invoice/", inputData)
        .then((res) => {
          console.log("Server data", res.data);

          toast.success(res?.data?.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setOpenModal(false);
          fetchInvoice();
        })
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.error("error message", error);
      toast.error("Something went wrong, Please try again!");
    }
  };
  // fetching data handler function
  async function fetchInvoice() {
    try {
      await axios
        .get("https://invoice-api2.onrender.com/api/invoice/")
        .then((response) => response.data)
        .then((data) => setNewData(data))
        .catch((error) => console.error("Error message", error));
    } catch (error) {
      console.error("error message ", error);
    }
  }
  useEffect(() => {
    fetchInvoice();
  }, []);

  const Invoices = newData.allInvoice;
  console.log(Invoices && Invoices.length);
  // motion handler
  const motionEffect = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 10 },
    },
  };
  if (!Invoices) return <h2 className="text-2xl">Loading ... Please wait!</h2>;

  return (
    <>
      {/* header here  */}
      <div className="flex justify-end my-[3rem] items-center h-[65px] w-full mb-[2rem] p-[1rem] md:p-4 ">
        <div className=" left-3 absolute">
          <h2 className="text-4xl font-bold">Invoice</h2>
          <p className="text-gray-500 hidden md:block ">
            There are {Invoices && Invoices.length} invoice
          </p>
          <p className="text-gray-500 md:hidden">
            {" "}
            {Invoices && Invoices.length}invoice
          </p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div className="flex gap-4 items-center justify-center">
            <p className="hidden md:block">Filter by status </p>
            <p className="md:hidden">Filter </p>
            <img src="/icon-arrow-down.svg" alt="dropdown-icon" />
          </div>
          <div
            onClick={() => setOpenModal(true)}
            className=" bg-custom-btn w-[5rem] h-[2rem] md:w-[10rem] md:h-[3rem] rounded-full flex items-center justify-evenly"
          >
            <div className="bg-white w-[20px] h-[20px] md:h-[40px] md:w-[40px] rounded-full  flex items-center justify-center">
              <img src="./icon-plus.svg" alt="" className="" />
            </div>
            New <span className="hidden md:block">invoice</span>
          </div>
        </div>
      </div>

      {Invoices &&
        Invoices.map((val, index) => {
          const { idTag } = val;
          return (
            <Link className="w-full " key={index} href={`/${idTag}`}>
              <motion.div
                className="w-full md:h-[4.5rem]  flex  justify-center items-center  bg-custom-base rounded-lg hover:cursor-pointer hover:border-2 hover:border-purple-600 mb-6"
                variants={motionEffect}
                initial="initial"
                animate="animate"
              >
                {/* desktop view  */}
                <div className="hidden md:block w-full bg-custom-card rounded-lg ">
                  <div className="  flex    items-center justify-between p-3 w-full  ">
                    <div className="flex  flex-col gap-2 md:flex-row items-center justify-start md:gap-6">
                      <p className="font-bold">
                        <span className="text-custom-access1">#</span>
                        {val.id}
                      </p>
                      <p className=" text-sm font-thin text-custom-access1 ">
                        Due {val.paymentDue}
                      </p>
                      <p className="text-sm font-thin">{val.clientName}</p>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                      <p className="font-bold text-2xl">${val.total}</p>
                      <div className="flex items-center justify-end gap-3 bg-custom-paid_1 pl-5 pb-3 pt-3 pr-6 rounded-lg">
                        <p
                          className={
                            val.status === "paid"
                              ? "h-[10px] w-[10px] bg-custom-paid_2 rounded-full"
                              : val.status === "pending"
                              ? "h-[10px] w-[10px] bg-custom-pending_2 rounded-full"
                              : "h-[10px] w-[10px] bg-custom-draft_2 rounded-full"
                          }
                        ></p>
                        <p
                          className={
                            val.status === "paid"
                              ? "text-custom-paid font-light text-sm"
                              : val.status === "pending"
                              ? "text-custom-pending font-light text-sm"
                              : "text-custom-draft font-light text-sm"
                          }
                        >
                          {" "}
                          {val.status}
                        </p>
                      </div>
                      <p>
                        <img src="./icon-arrow-right.svg" alt="" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* mobile view  */}
                <div className="flex md:hidden   items-center justify-between p-5 w-full ">
                  <div className="flex  flex-col gap-2 md:flex-row items-start justify-start md:gap-6">
                    <p className="font-bold">{val.id}</p>
                    <p className="text-sm font-thin text-custom-access1">
                      Due {val.paymentDue}
                    </p>
                    <p className="text-sm font-bold">${val.total}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-5">
                    <p className="text-sm font-thin">{val.clientName}</p>

                    <div className="flex items-center justify-end gap-3 bg-custom-paid_1 pl-5 pb-3 pt-3 pr-6 rounded-lg">
                      <p
                        className={
                          val.status === "paid"
                            ? "h-[10px] w-[10px] bg-custom-paid_2 rounded-full"
                            : val.status === "pending"
                            ? "h-[10px] w-[10px] bg-custom-pending_2 rounded-full"
                            : "h-[10px] w-[10px] bg-custom-draft_2 rounded-full"
                        }
                      ></p>
                      <p
                        className={
                          val.status === "paid"
                            ? "text-custom-paid font-light text-sm"
                            : val.status === "pending"
                            ? "text-custom-pending font-light text-sm"
                            : "text-custom-draft font-light text-sm"
                        }
                      >
                        {" "}
                        {val.status}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      {openModal && (
        <AddNewInvoice
          handleOnSubmit={handleOnSubmit}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </>
  );
};
