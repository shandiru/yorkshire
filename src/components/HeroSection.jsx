import React, { useState } from "react";
import { Instagram, Facebook, ArrowDown } from "lucide-react";
import { HeroContent } from "../global";

export default function HeroSection({
  instagramLabel = HeroContent.instagramLabel,
  facebookLabel = HeroContent.facebookLabel,
  tagline = HeroContent.tagline,
  title = HeroContent.title,
}) {
  const [showPopup, setShowPopup] = useState(false);

  const handleSocialClick = () => {
    setShowPopup(true);   // Only show popup
  };

  const handleCancel = () => {
    setShowPopup(false);  // Close popup
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Social Media */}
        <div className="absolute left-5 md:left-8 top-[30%] flex flex-col gap-8 md:gap-10 z-20">

          {/* Instagram */}
          <div
            onClick={handleSocialClick}
            className="flex flex-col items-center gap-3 cursor-pointer hover:scale-110 transition"
          >
            <Instagram className="text-white" size={22} />
            <span
              className="text-white text-sm"
              style={{ writingMode: "vertical-rl" }}
            >
              Instagram
            </span>
          </div>

          {/* Facebook */}
          <div
            onClick={handleSocialClick}
            className="flex flex-col items-center gap-3 cursor-pointer hover:scale-110 transition"
          >
            <Facebook className="text-white" size={22} />
            <span
              className="text-white text-sm"
              style={{ writingMode: "vertical-rl" }}
            >
              Facebook
            </span>
          </div>

        </div>

        {/* Main Content */}
        <div className="absolute bottom-[15%] left-8 md:left-16 z-20">
          <p className="text-white text-[11px] md:text-sm tracking-[0.2em] font-semibold mb-6">
            {tagline}
          </p>

          <h1 className="text-primary text-[3.8rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold leading-[0.85]">
            {title}
          </h1>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 right-8 md:right-16 flex items-center gap-3 text-white z-20">
          <span className="text-[10px] md:text-xs tracking-[0.3em]">
            SCROLL DOWN
          </span>
          <ArrowDown className="animate-bounce" size={16} />
        </div>

        {/* Transparent Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/40">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl max-w-md text-center text-white shadow-2xl">
              <p className="mb-6">
                When you click this button, you’ll be redirected to our official
                social media page to see updates, content and customer work.
              </p>

              <button
                onClick={handleCancel}
                className="px-6 py-2 bg-white/20 hover:bg-white/30 transition rounded-xl"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}