import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-base-200 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-primary">
          Terms of Service
        </h1>

        <p className="mb-4 text-base-content">
          Welcome to <span className="font-semibold">Artify</span>, a creative
          digital platform designed to showcase, share, and explore artworks
          from artists around the world. By accessing or using our platform, you
          agree to comply with these Terms of Service.
        </p>

        <p className="mb-4 text-base-content">
          Users are fully responsible for the content they upload or publish on
          Artify. All artworks, images, and descriptions must respect copyright
          laws and intellectual property rights. Any content that is illegal,
          offensive, misleading, or violates platform rules may be removed
          without notice.
        </p>

        <p className="mb-4 text-base-content">
          You agree not to misuse the platform in any way, including spamming,
          hacking, impersonation, or attempting to disrupt the normal operation
          of the website. Violations may result in account suspension or
          permanent termination.
        </p>

        <p className="mb-4 text-base-content">
          Artify is provided on an “as is” basis. We do not guarantee uninterrupted
          access, error-free performance, or complete accuracy of content. We
          are not responsible for data loss, downtime, or technical issues beyond
          our control.
        </p>

        <p className="text-base-content">
          We reserve the right to update or modify these terms at any time.
          Continued use of Artify after changes are posted means you accept the
          revised Terms of Service.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
