"use client";
import React from "react";
import Image from "next/image";
export const metadata ={
  title: "Services",
  description: "contact me for use my services"
}
function DataEntry() {
  const whatsappNumber = "9244524565"; // Replace with your WhatsApp number
  const message = "Hi Aditya, I am interested in your services!";

  const handleContact = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Contact Me for Data Entry Excle Services
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Let’s build something amazing together! Feel free to reach out via
        WhatsApp for any type of data entry inquiries.
      </p>
      <button
        onClick={handleContact}
        className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
      >
        
        Message Me on WhatsApp
      </button>
    </div>
  );
}

export default DataEntry;
