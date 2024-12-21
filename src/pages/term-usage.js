"use client";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms of Use</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>Please read these terms of use carefully before using Our Service.</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Interpretation and Definitions</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. 
                The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Definitions</h3>
              <p>For the purposes of these Terms and Conditions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, 
                  where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote 
                  for election of directors or other managing authority.
                </li>
                <li><strong>Country</strong> refers to: India</li>
                <li>
                  <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to 
                  Lucerno, its subsidiaries and branches.
                </li>
                <li>
                  <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                </li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li>
                  <strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire 
                  agreement between You and the Company regarding the use of the Service.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Acknowledgement</h2>
            <p>
              These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. 
              These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
            </p>
            <p>
              Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. 
              These Terms and Conditions apply to all visitors, users and others who access or use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Links to Other Websites</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
            </p>
            <p>
              The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any 
              third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, 
              directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or 
              reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Termination</h2>
            <p>
              We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, 
              including without limitation if You breach these Terms and Conditions.
            </p>
            <p>Upon termination, Your right to use the Service will cease immediately.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Governing Law</h2>
            <p>
              The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. 
              Your use of the Application may also be subject to other local, state, national, or international laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, You can contact us at{" "}
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

