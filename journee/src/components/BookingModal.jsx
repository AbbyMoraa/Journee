import React, { useState } from "react";
import { db, auth } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function BookingModal({ hotel, onClose }) {
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName || "",
    email: auth.currentUser?.email || "",
    dates: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Button clicked", { formData, auth: auth.currentUser, hotel });

    if (!auth.currentUser) {
      setMessage("You must be logged in to book a hotel");
      console.log("No user logged in");
      return;
    }

    if (!formData.name || !formData.email || !formData.dates || typeof formData.dates !== "string") {
      setMessage("Please fill all fields");
      console.log("Incomplete form data", formData);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage("Please enter a valid email");
      console.log("Invalid email format", formData.email);
      return;
    }

    const bookingData = {
      hotelId: typeof hotel?.id === "string" && hotel.id ? hotel.id : "pexels-photo-" + Date.now(),
      hotelName: typeof hotel?.name === "string" && hotel.name ? hotel.name : "Pexels Hotel Photo",
      userId: auth.currentUser.uid,
      userEmail: formData.email,
      userName: formData.name,
      travelDates: formData.dates,
      createdAt: serverTimestamp(),
    };

    try {
      console.log("Sending to Firestore", bookingData);
      const docRef = await addDoc(collection(db, "bookings"), bookingData);

      console.log("Booking saved with ID:", docRef.id);

      setMessage(`Booking confirmed for ${bookingData.hotelName}! ✅`);
      setFormData({ name: "", email: "", dates: "" });

      setTimeout(() => {
        setMessage("");
        onClose();
      }, 1500);
    } catch (err) {
      console.error("Firestore Error:", { code: err.code, message: err.message, stack: err.stack, details: err });
      setMessage("Failed to book. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-blue-100 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center">
          Book {hotel?.name || "Hotel"}
        </h2>

        <img
          src={hotel?.image || ""}
          alt={hotel?.name || "Hotel"}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />

        {message && (
          <p className="text-center text-teal-600 mb-3 font-medium">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="text"
            name="dates"
            placeholder="Travel Dates"
            value={formData.dates}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}