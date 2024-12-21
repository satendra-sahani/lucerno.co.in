"use client";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            Lucerno, ("We/us"), is committed to protecting and respecting any personal information you share with us.
          </p>

          <p>
            This statement describes what type of information we collect from you, how it is used by us, how we share it with others, how you can manage the information we hold and how you can contact us.
          </p>

          <p>
            The contents of this statement may change from time to time so you may wish to check this page occasionally to ensure that you are still happy to share your information with us. Where possible, we will also contact you directly to notify you of these changes.
          </p>

          <p>
            This version of our Privacy Statement is live from 24 January 2025.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">What information do we collect about you?</h2>
            <p>We collect information about you when you:</p>
            <ul className="list-disc pl-6">
              <li>Register on our web site</li>
              <li>Request samples</li>
              <li>Request a credit application form</li>
              <li>Register your details at one of our trade shows</li>
            </ul>

            <p>We also obtain personal information from other sources as follows:</p>
            <ul className="list-disc pl-6">
              <li>Details sent directly from your head office</li>
              <li>Online or public business directories</li>
              <li>From our share registrars</li>
            </ul>

            <p>The information we collect includes some or all of the following:</p>
            <ul className="list-disc pl-6">
              <li>Name (including title)</li>
              <li>Address</li>
              <li>Telephone number</li>
              <li>Email address</li>
              <li>The internet browser and devices you are using</li>
              <li>Details of any transactions between you and us</li>
              <li>Job title</li>
              <li>Any information within correspondence you send to us</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">How do we use your personal information?</h2>
            <p>
              We will only process information as is necessary for the purpose for which it has been collected. You will always have the option not to receive marketing communications from us (and you can withdraw your consent or object at any time). We will never send you unsolicited email or other communications, or share your personal information with anyone else who might.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Consent</h3>
              <p>
                Where you have provided your consent, we may use and process your information to contact you from time to time about our products, promotions, and events which we think may be of interest to you.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Contractual Performance</h3>
              <p>
                We may use and process your personal information where this is necessary to perform a contract with you and to fulfil and complete your orders.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Who do we share your personal information with?</h2>
            <p>
              We will share personal information with law enforcement or other authorities if required by applicable law.
            </p>
            <p>
              We do not sell your information to third parties. However, we may disclose your information to categories of companies or organisations who fulfil business activities for us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, you can contact us at{" "}
              <a href="mailto:sales.team@lucerno.co.in" className="text-blue-600 hover:text-blue-800">
                sales.team@lucerno.co.in
              </a>
            </p>
          </section>

          <footer className="text-sm text-gray-500 mt-8 pt-8 border-t">
            <p>Last updated: December 22, 2023</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

