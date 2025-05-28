"use client";

import type React from "react";
import { useState } from "react";
import { Send } from "lucide-react";

export default function SubscriptionOffer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-3 md:p-8">
      <div className="bg-gray-50 rounded-lg p-3 md:p-8 text-center">
        <p className="text-gray-700 mb-2">Special Offer for Subscription</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-amber-500 leading-tight tracking-wide">
          Get Instant Discount For Membership
        </h2>

        <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
          Subscribe Now & Enjoy Exclusive Discounts on Your Favorite Home
          Essentials - Transform Your Space for Less!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your Mail Here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-4 py-2 rounded-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button
            type="submit"
            className="bg-amber-500 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
          >
            SUBSCRIBE
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
