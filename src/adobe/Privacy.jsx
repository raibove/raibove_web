import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Introduction</h2>
        <p className="mb-3">
          Welcome to our Privacy Policy. Your privacy is critically important to us. This Privacy Policy document contains types of information that is collected and recorded by our addon and how we use it.
        </p>
        <p className="mb-3">
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
        <p className="mb-3">
          When you use our addon, we may collect the following types of information:
        </p>
        <ul className="list-disc ml-6 mb-3">
          <li className="mb-1">Personal identification information (Name, email address, etc.)</li>
          <li className="mb-1">Usage data (how you interact with our addon)</li>
          <li className="mb-1">Technical data (browser type, IP address, device information)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
        <p className="mb-3">We use the collected data for various purposes:</p>
        <ul className="list-disc ml-6 mb-3">
          <li className="mb-1">To provide and maintain our addon</li>
          <li className="mb-1">To notify you about changes to our addon</li>
          <li className="mb-1">To provide customer support</li>
          <li className="mb-1">To improve our addon</li>
          <li className="mb-1">To monitor the usage of our addon</li>
          <li className="mb-1">To detect, prevent, and address technical issues</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Data Security</h2>
        <p className="mb-3">
          The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
        <p className="mb-3">
          Our addon may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
        </p>
        <p className="mb-3">
          We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
        <p className="mb-3">
          Our addon does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Changes to This Privacy Policy</h2>
        <p className="mb-3">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        <p className="mb-3">
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
        <p className="mb-3">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-disc ml-6 mb-3">
          <li className="mb-1">By email: shwetakale144@gmail.com</li>
        </ul>
      </section>

      <footer className="text-sm text-gray-600 mt-8">
        Last updated: March 17, 2025
      </footer>
    </div>
  );
};

export default PrivacyPolicy;