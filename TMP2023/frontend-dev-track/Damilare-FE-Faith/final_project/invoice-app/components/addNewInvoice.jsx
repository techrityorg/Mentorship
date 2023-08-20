"use clients";

// import React, { useState } from "react";

import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const AddNewInvoice = ({ closeModal, handleOnSubmit }) => {
  const deliveryPeriod = [
    { text: "Next 1 day", value: 1 },
    { text: "Next 7 day", value: 7 },
    { text: "Next 14 day", value: 14 },
    { text: "Next 30 day", value: 30 },
  ];
  const [inputData, setInputData] = useState({
    paymentDue: "",
    description: "",
    paymentTerms: "",
    clientName: " ",
    clientEmail: "",
    status: "pending",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ],
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    const handleOverlayCLose = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleOverlayCLose);

    return () => {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("click", handleOverlayCLose);
    };
  }, [closeModal]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSender = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      senderAddress: {
        ...prev.senderAddress,
        [name]: value,
      },
    }));
  };

  const handleClient = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      clientAddress: {
        ...prev.clientAddress,
        [name]: value,
      },
    }));
  };
  const initialItem = {
    name: "",
    quantity: 1,
    price: 0,
    total: 0,
  };
  const handleAddItem = () => {
    setInputData((prevData) => ({
      ...prevData,
      items: [...prevData.items, { ...initialItem }],
    }));
  };

  const handleItemChange = (index, field, value) => {
    setInputData((prevData) => {
      const updatedItems = [...prevData.items];
      updatedItems[index][field] = value;
      return { ...prevData, items: updatedItems };
    });
  };

  const handleDelete = (index) => {
    const updatedItem = [...inputData.items];
    updatedItem.splice(index, 1);
    setInputData((prev) => ({
      ...prev,
      items: updatedItem,
    }));
  };
  const newId = uuidv4().substr(0, 4);

  console.log(inputData);
  const leftToRightAnimate = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };
  const { clientName, clientEmail, paymentDue, description, paymentTerm } =
    inputData;

  const validation = () => {
   
  };
  return (
    <div className="fixed inset-0 z-40 bg-opacity-50 bg-[#000005be] flex justify-start md:left-[7rem] top-0 items-start modal-overlay">
      <motion.div
        variants={leftToRightAnimate}
        initial="hidden"
        animate="visible"
        className="bg-custom-base p-6 h-screen scrollbar-hide top-0 rounded-lg md:w-[700px] justify-center items-center flex flex-col w-full "
      >
        <h2 className="font-bold text-3xl mt-8">Invoice</h2>
        <div className="w-full p-4 overflow-y-scroll scrollbar-hide my-14">
          <h1 className="text-[14px] text-purple-400 font-light">Bill Form</h1>
          <form className=" mx-1 space-y-4 ">
            {/* form section one  */}
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-3 flex flex-col mb-3">
                <label htmlFor="" className="text-gray-400 font-light">
                  Street Address
                </label>
                <input
                  name="street"
                  required
                  value={inputData.senderAddress.street}
                  onChange={handleSender}
                  className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px]    "
                />
              </div>
              <div className="col-span-1 flex flex-col gap-1">
                <label htmlFor="" className="text-ray-400 font-light">
                  City
                </label>
                <input
                  name="city"
                  required
                  value={inputData.senderAddress.city}
                  onChange={handleSender}
                  className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.3px] focus:outline-none  "
                />
              </div>
              <div className="col-span-1 flex flex-col gap-1">
                <label htmlFor="" className="text-ray-400 font-light">
                  PostCode
                </label>
                <input
                  required
                  name="postCode"
                  value={inputData.senderAddress.postCode}
                  onChange={handleSender}
                  className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.3px] focus:outline-none  "
                />
              </div>
              <div className="col-span-1 flex flex-col p-1">
                <label htmlFor="" className="text-ray-400 font-light">
                  Country
                </label>
                <input
                  required
                  name="country"
                  value={inputData.senderAddress.country}
                  onChange={handleSender}
                  className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px] focus:outline-none  "
                />
              </div>
            </div>
            {/* from section two  */}
            <h1 className="text- text-purple-400 font-light">Bill To</h1>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-3 flex flex-col mb-3">
                <label htmlFor="" className="text-gray-400 font-light">
                  Client Name
                </label>
                <input
                  required
                  name="clientName"
                  value={inputData.clientName}
                  onChange={handleOnChange}
                  placeholder="Name"
                  className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.3px] focus:outline-none  "
                />
              </div>
              <div className="col-span-3 flex flex-col mb-3">
                <label htmlFor="" className="text-gray-400 font-light">
                  Client email
                </label>
                <input
                  required
                  name="clientEmail"
                  value={inputData.clientEmail}
                  onChange={handleOnChange}
                  placeholder="E-mail"
                  className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.3px] focus:outline-none  "
                />
              </div>
              <div className="col-span-3 flex flex-col mb-3">
                <label htmlFor="" className="text-gray-400 font-light">
                  Client Address
                </label>
                <input
                  required
                  name="street"
                  value={inputData.clientAddress.street}
                  onChange={handleClient}
                  placeholder="Address"
                  className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.3px] focus:outline-none  "
                />
              </div>
              <div className="col-span-1 flex flex-col gap-1">
                <label htmlFor="" className="text-ray-400 font-light">
                  City
                </label>
                <input
                  required
                  name="city"
                  value={inputData.clientAddress.city}
                  onChange={handleClient}
                  className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px] focus:outline-none  "
                />
              </div>
              <div className="col-span-1 flex flex-col gap-1">
                <label htmlFor="" className="text-ray-400 font-light">
                  PostCode
                </label>
                <input
                  required
                  name="postCode"
                  value={inputData.clientAddress.postCode}
                  onChange={handleClient}
                  className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px] focus:outline-none  "
                />
              </div>
              <div className="col-span-1 flex flex-col p-1">
                <label htmlFor="" className="text-gray-400 font-light">
                  Country
                </label>
                <input
                  required
                  className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px] focus:outline-none  "
                />
              </div>
              <div className="col-span-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-1 flex flex-col">
                    <label htmlFor="" className="text-gray-400 font-light">
                      Invoice Date
                    </label>
                    <input
                      required
                      name="paymentDue"
                      value={inputData.paymentDue}
                      onChange={handleOnChange}
                      type="date"
                      className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px] focus:outline-none"
                    />
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <label htmlFor="" className="text-gray-400 font-light">
                      Payments Terms
                    </label>
                    <select
                      required
                      name="paymentTerms"
                      value={inputData.paymentTerms}
                      onChange={handleOnChange}
                      className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.3px] "
                    >
                      {deliveryPeriod.map((period, index) => (
                        <option key={index} value={period.value}>
                          {period.text}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-3 flex flex-col mb-3">
                <label htmlFor="" className="text-gray-400 font-light">
                  Description
                </label>
                <input
                  required="true"
                  name="description"
                  value={inputData.description}
                  onChange={handleOnChange}
                  placeholder="Description"
                  className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px] focus:outline-none  "
                />
              </div>
              {/* Item forms  */}
              <div className="col-span-3 flex flex-col mb-3">
                <h1>Items List</h1>
                {inputData.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-start items-center flex-wrap gap-3 "
                  >
                    <div className="flex flex-col justify-start items-start">
                      <label htmlFor="" className="text-gray-400 font-light ">
                        Item Name
                      </label>
                      <input
                        required
                        value={item.name}
                        onChange={(e) =>
                          handleItemChange(index, "name", e.target.value)
                        }
                        placeholder="Items name"
                        className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px] w-[200px] focus:outline-none  "
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <label htmlFor="" className="text-gray-400 font-light">
                        Qty.
                      </label>
                      <input
                        required
                        type="number"
                        placeholder=""
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemChange(index, "quantity", e.target.value)
                        }
                        className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px] w-[80px] focus:outline-none  "
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <label htmlFor="" className="text-gray-400 font-light">
                        Price
                      </label>
                      <input
                        required
                        type="number"
                        value={item.price}
                        onChange={(e) => {
                          handleItemChange(index, "price", e.target.value);
                          handleItemChange(
                            index,
                            "total",
                            e.target.value * item.quantity
                          );
                        }}
                        placeholder=""
                        className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.3px] w-[100px] focus:outline-none  "
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <label htmlFor="" className="text-gray-400 font-light">
                        Total
                      </label>
                      <input
                        disabled
                        placeholder={item.total}
                        value={item.total}
                        className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.3px] w-[50px] focus:outline-none  "
                      />
                    </div>
                    <div className="flex justify-end items-end pt-8 mx-10  cursor-pointer">
                      <img
                        src="/icon-delete.svg"
                        alt="delete-icon"
                        className="h-[35px] w-[35px] hover:bg-red-500 "
                        onClick={() => handleDelete(index)}
                      />
                    </div>
                  </div>
                ))}
                <div className="col-span-3">
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="mt-4 bg-custom-card text-white px-4 py-2 w-full rounded-md"
                  >
                    Add Items
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="flex justify-center items-center gap-3 w-full ">
          <button
            onClick={closeModal}
            className="mt-4 bg-custom-card py-2 rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              // console.log("final", inputData);
               const requiredFields = [
                 "clientName",
                 "clientEmail",
                 "paymentDue",
                 "description",
                 "paymentDue",
               ];
               for (const field of requiredFields) {
                 if (!inputData[field]) {
                   alert(`Please fill in the ${field} field`);
                   return;
                 }
               }
              handleOnSubmit(e, inputData);
            }}
            className="mt-4 bg-custom-btn  px-7 py-2 rounded-full"
          >
            Save Changes
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AddNewInvoice;
