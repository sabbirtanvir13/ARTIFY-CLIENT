import React from "react";
import {
  FaEnvelope,
  FaClock,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaHeadset,
} from "react-icons/fa";

const Help = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-base-200 p-8 rounded-2xl shadow-lg">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <FaHeadset className="text-3xl text-primary" />
          <h1 className="text-3xl font-bold text-primary">
            Help & Support
          </h1>
        </div>

        <p className="mb-8 text-base-content">
          Need assistance with Artify? Our support team is always ready to help
          you with account issues, artwork management, or general platform
          questions.
        </p>

        {/* Help Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          
          <div className="flex items-start gap-4 p-5 rounded-xl bg-base-100 shadow">
            <FaEnvelope className="text-2xl text-secondary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Email Support</h3>
              <p className="text-sm text-base-content">
                Reach us anytime at <span className="font-medium">support@artify.com</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-base-100 shadow">
            <FaClock className="text-2xl text-secondary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Support Hours</h3>
              <p className="text-sm text-base-content">
                Available from 9:00 AM – 6:00 PM (GMT+6)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-base-100 shadow">
            <FaQuestionCircle className="text-2xl text-secondary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">FAQs</h3>
              <p className="text-sm text-base-content">
                Visit our FAQ section for quick answers to common questions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-base-100 shadow">
            <FaExclamationTriangle className="text-2xl text-secondary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Report an Issue</h3>
              <p className="text-sm text-base-content">
                Report inappropriate or problematic artwork at any time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Help;
