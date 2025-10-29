import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - CamperFix',
  description: 'CamperFix Terms of Service - Agreement for using our motorhome technical support services',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: October 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the CamperFix mobile application and services ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CamperFix provides technical support services for motorhome and caravan owners, connecting users with expert technicians through our mobile application. Our services include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Remote technical diagnostics and troubleshooting</li>
              <li>AI-powered issue analysis and recommendations</li>
              <li>Connection with qualified camper specialists</li>
              <li>Access to technical documentation and guides</li>
              <li>Case management and support tracking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <h3 className="text-xl font-semibold mb-2">3.1 Account Security</h3>
            <p className="text-gray-700 mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized access.
            </p>

            <h3 className="text-xl font-semibold mb-2">3.2 Accurate Information</h3>
            <p className="text-gray-700 mb-4">
              You agree to provide accurate, current, and complete information about your motorhome and technical issues. Inaccurate information may result in inappropriate advice or delayed support.
            </p>

            <h3 className="text-xl font-semibold mb-2">3.3 Prohibited Activities</h3>
            <p className="text-gray-700 mb-2">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Use the Service for any illegal purpose</li>
              <li>Impersonate others or provide false information</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Use automated systems to access the Service</li>
              <li>Resell or commercially exploit the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Service Limitations and Disclaimers</h2>

            <h3 className="text-xl font-semibold mb-2">4.1 Not Emergency Services</h3>
            <p className="text-gray-700 mb-4">
              <strong className="text-red-600">IMPORTANT:</strong> CamperFix is not an emergency service. In case of immediate danger, fire, or serious injury, contact emergency services (911 in the US) immediately.
            </p>

            <h3 className="text-xl font-semibold mb-2">4.2 Professional Judgment Required</h3>
            <p className="text-gray-700 mb-4">
              Our Service provides guidance and recommendations, but you are responsible for determining whether to follow any advice. Always use professional judgment and consider safety implications before performing any repairs or modifications.
            </p>

            <h3 className="text-xl font-semibold mb-2">4.3 No Guarantees</h3>
            <p className="text-gray-700 mb-4">
              While we strive for accuracy, we do not guarantee that our advice will resolve your issue or that any recommendations are suitable for your specific situation. Technical support is provided on an "as-is" basis.
            </p>

            <h3 className="text-xl font-semibold mb-2">4.4 AI Limitations</h3>
            <p className="text-gray-700">
              Our AI-powered analysis tools are designed to assist human experts but may not always provide accurate diagnoses. All AI-generated recommendations should be reviewed by qualified technicians before implementation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p className="text-gray-700 mb-2">
              Payment terms will be clearly disclosed before purchase. By subscribing or purchasing services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Pay all fees as described at the time of purchase</li>
              <li>Provide valid payment information</li>
              <li>Authorize recurring charges for subscription services</li>
              <li>Be responsible for any applicable taxes</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Refund policies will be provided at the time of purchase and may vary by service type.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, features, and functionality of the Service are owned by CamperFix and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express permission.
            </p>
            <p className="text-gray-700">
              You retain ownership of content you submit (photos, videos, descriptions) but grant us a license to use this content to provide and improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, CAMPERFIX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
            </p>
            <p className="text-gray-700">
              Our total liability for any claims related to the Service shall not exceed the amount you paid to CamperFix in the 12 months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify and hold harmless CamperFix, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of the Service, violation of these Terms, or infringement of any rights of others.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to suspend or terminate your access to the Service at any time, with or without cause or notice, for any reason including violation of these Terms.
            </p>
            <p className="text-gray-700">
              You may terminate your account at any time through the app settings. Upon termination, your right to use the Service ceases immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700">
              We may modify these Terms at any time. We will notify you of material changes through the app or via email. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where CamperFix is incorporated, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              Any disputes arising from these Terms or your use of the Service shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes may be subject to binding arbitration or court proceedings as specified in supplementary dispute resolution terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Severability</h2>
            <p className="text-gray-700">
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> legal@camperfix.com</p>
              <p className="text-gray-700"><strong>Support:</strong> <a href="/support" className="text-blue-600 hover:underline">Contact Support</a></p>
            </div>
          </section>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              By using CamperFix, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
