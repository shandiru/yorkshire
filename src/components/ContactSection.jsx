import React, { useState } from 'react';
import { appointmentContent, footerContent } from '../global';

const AppointmentSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        vehicleType: '',
        preferredDate: '',
        preferredTime: '',
        additionalRequests: ''
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        setShowPopup(true); // Trigger popup
        setFormData({
            name: '',
            phoneNumber: '',
            email: '',
            vehicleType: '',
            preferredDate: '',
            preferredTime: '',
            additionalRequests: ''
        }); // Clear form after submit
    };

    const { office } = footerContent;

    // Encode address for Google Maps
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        office.address
    )}`;

    return (
        <>
            <div id='contact' className="bg-[#F3F4F6] dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* Left Side - Form */}
                        <div className="relative">
                            <div className="relative mb-8">
                                <h2
                                    className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none uppercase"
                                    style={{
                                        backgroundImage: `url("${appointmentContent.headingImage}")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center 35%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        color: 'transparent'
                                    }}
                                >
                                    {appointmentContent.heading}
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors"
                                        required
                                    />

                                    <input
                                        type="text"
                                        name="vehicleType"
                                        placeholder="Vehicle type"
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder="Phone number*"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors"
                                        required
                                    />

                                    <input
                                        type="date"
                                        name="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email*"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors"
                                        required
                                    />

                                    <input
                                        type="time"
                                        name="preferredTime"
                                        value={formData.preferredTime}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors"
                                    />
                                </div>

                                <textarea
                                    name="additionalRequests"
                                    placeholder="Any additional requests regarding your car?"
                                    value={formData.additionalRequests}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-6 py-4 rounded-3xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors resize-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="bg-primary bg-secondary-hover text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-sm tracking-wide"
                                >
                                    Submit Message
                                </button>
                            </form>
                        </div>

                        {/* Right Side - Contact Info */}
                        <div className="space-y-8 lg:pl-8 text-[#111827] dark:text-white">
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-black text-primary mb-4">
                                    PHONE
                                </h3>
                                <div className="space-y-2">
                                    <a href={`tel:${office.phone}`} className="hover:underline">
                                        {office.phone}
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl sm:text-4xl font-black text-primary mb-4">
                                    ADDRESS
                                </h3>
                                <p className="text-base sm:text-lg">
                                    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        {office.address}
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl sm:text-4xl font-black text-primary mb-4">
                                    {appointmentContent.hoursTitle}
                                </h3>
                                <div className="space-y-2">
                                    <p className="text-base sm:text-lg">{appointmentContent.hoursTime}</p>
                                    <p className="text-base sm:text-lg">{appointmentContent.hoursDays}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== POPUP STYLE ONLY ===== */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-999">
                    <div className="bg-white rounded-2xl p-6 max-w-md w-[90%] text-center shadow-xl">
                        <h2 className="text-xl font-bold mb-4">Message Sent </h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            This will be connected directly to either your WhatsApp or your email,
                            so you receive enquiries instantly.
                        </p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AppointmentSection;