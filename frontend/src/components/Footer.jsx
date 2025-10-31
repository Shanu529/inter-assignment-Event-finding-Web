import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-linear-to-b from-black via-gray-900 to-black border-t border-gray-800 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
            FindMyEvent
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Your gateway to discovering amazing events and connecting with your
            community. From tech meetups to music fests — find it all here.
          </p>

          <div className="flex justify-center gap-6 text-gray-400 text-sm mb-6">
            <a href="#" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Contact
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Terms
            </a>
          </div>

          <div className="flex justify-center gap-5 mb-4 text-cyan-400 text-lg">
            <i className="fa-brands fa-instagram hover:text-white transition"></i>
            <i className="fa-brands fa-twitter hover:text-white transition"></i>
            <i className="fa-brands fa-linkedin hover:text-white transition"></i>
            <i className="fa-brands fa-github hover:text-white transition"></i>
          </div>

          <p className="text-gray-500 text-sm">
            © FindMyEvent. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
