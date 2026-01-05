import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-base-200 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-primary">
          Privacy Policy
        </h1>

        <p className="mb-4 text-base-content">
          At <span className="font-semibold">Artify</span>, your privacy is very
          important to us. This Privacy Policy explains how we collect, use, and
          protect your personal information when you use our platform.
        </p>

        <p className="mb-4 text-base-content">
          We collect basic user information such as name, email address, and
          artwork-related data only to provide essential services like account
          creation, authentication, and content management. This data helps us
          improve user experience and platform security.
        </p>

        <p className="mb-4 text-base-content">
          Artify does not sell, rent, or trade your personal information to third
          parties. Your data is used strictly for platform-related purposes and
          may only be disclosed if required by law or to protect users and system
          integrity.
        </p>

        <p className="mb-4 text-base-content">
          We use cookies and similar technologies to analyze usage patterns and
          enhance performance. Cookies help us personalize your experience and
          improve site functionality. You can manage cookies through your
          browser settings.
        </p>

        <p className="text-base-content">
          While we apply reasonable security measures, no online system is
          completely secure. By using Artify, you acknowledge and accept this
          risk. This policy may be updated periodically, and continued use of
          the platform means you accept any changes.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
