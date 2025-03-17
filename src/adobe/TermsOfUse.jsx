import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      
      <section className="mb-6">
        <p className="mb-3">
          By accessing or using our addon, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this addon.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Use License</h2>
        <ol className="list-decimal ml-6 mb-3">
          <li className="mb-2">
            Permission is granted to temporarily use this addon for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            <ul className="list-disc ml-6 mt-1">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained in this addon;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </li>
          <li className="mb-2">
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
        <p className="mb-3">
          The materials in our addon are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        <p className="mb-3">
          Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on our addon or otherwise relating to such materials or on any sites linked to this addon.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Limitations</h2>
        <p className="mb-3">
          In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our addon, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>
        <p className="mb-3">
          Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Accuracy of Materials</h2>
        <p className="mb-3">
          The materials appearing in our addon could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our addon are accurate, complete, or current. We may make changes to the materials contained on our addon at any time without notice. However, we do not make any commitment to update the materials.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Links</h2>
        <p className="mb-3">
          We have not reviewed all of the sites linked to our addon and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Modifications</h2>
        <p className="mb-3">
          We may revise these terms of use for our addon at any time without notice. By using this addon, you are agreeing to be bound by the then current version of these terms of service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
        <p className="mb-3">
          These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
        <p className="mb-3">
          If you have any questions about these Terms of Use, please contact us:
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

export default TermsOfUse;