import React, { useState } from "react";
import { CircleCheckBig, X } from "lucide-react";
import { Services } from "../global";

const PPFServices = ({ title = "OUR SERVICES", services = Services }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div id="services" className="bg-[#F3F4F6] dark:bg-black py-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4">
            <div className="w-1 h-16 sm:h-20 bg-primary"></div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] dark:text-white">
              {title}
            </h2>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition flex flex-col"
            >
              <div className="w-full h-48 sm:h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-top"
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-5">
                  {service.subtitle}
                </h3>

                <div className="mb-6 grow">
                  <ul className="space-y-2">
                    {service.coverage.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CircleCheckBig className="w-5 h-5 text-primary mr-2 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setShowPopup(true)}
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:scale-105 transition"
                >
                  BOOK TODAY
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= POPUP MODAL ================= */}
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-neutral-900 max-w-lg w-full rounded-2xl p-6 sm:p-8 relative animate-scaleIn">

            {/* Close */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-primary"
            >
              <X size={22} />
            </button>

            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Choose How You’d Like to Book
            </h3>

            <p className="text-gray-500 dark:text-gray-400 text-center mb-6">
              You can book in two ways:
            </p>

            <div className="space-y-5">

              <div className="border rounded-xl p-4 hover:border-primary transition">
                <h4 className="font-semibold text-lg mb-1">
                  Pro Online Booking System
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our automated system manages our live calendar.  
                  Once a slot is booked, it is instantly removed — so no double bookings.
                </p>
              </div>

              <div className="border rounded-xl p-4 hover:border-primary transition">
                <h4 className="font-semibold text-lg mb-1">
                  WhatsApp Booking
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Message us directly and we’ll manually confirm your appointment.
                </p>
              </div>

            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PPFServices;