"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xb7ebmc", // Replace with your EmailJS service ID
        "template_1bojjxi", // Replace with your EmailJS template ID
        form.current,
        "xx_0QaWBudgUAYWYf" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center mt-4">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Contact Me
        </h2>

        <div className="field">
          <label
            htmlFor="from_name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="field">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-medium text-lg rounded-lg shadow-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
        >
          Send Email
        </button>
      </form>
    </div>
  );
}
