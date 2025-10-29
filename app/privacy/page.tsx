import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - CamperFix',
  description: 'CamperFix Privacy Policy - How we collect, use, and protect your information',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: October 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              CamperFix ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Account information (name, email address, phone number)</li>
              <li>RV profile information (make, model, year, VIN)</li>
              <li>Technical support requests and communications</li>
              <li>Photos and videos you submit for technical support</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">2.2 Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Device information (device type, operating system, unique identifiers)</li>
              <li>Usage data (app features used, time spent, interaction patterns)</li>
              <li>Location data (with your permission, for service provider matching)</li>
              <li>Log data (IP address, access times, app crashes)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-2">We use collected information to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide technical support services</li>
              <li>Match you with appropriate RV technicians</li>
              <li>Process payments and maintain account security</li>
              <li>Improve our AI-powered diagnostic tools</li>
              <li>Communicate service updates and support responses</li>
              <li>Analyze usage patterns to enhance our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 mb-2">We may share your information with:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>RV Technicians:</strong> Technical details necessary to provide support</li>
              <li><strong>Service Providers:</strong> Third-party vendors who assist our operations (cloud hosting, payment processing, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-2">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Access and review your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable location services (may limit functionality)</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your information as long as your account is active or as needed to provide services. After account deletion, we may retain certain information for legal compliance, dispute resolution, and service improvement purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              CamperFix is not intended for users under 18 years of age. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. International Users</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. By using CamperFix, you consent to such transfers and processing in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of significant changes through the app or via email. Continued use after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> privacy@camperfix.com</p>
              <p className="text-gray-700"><strong>Support:</strong> <a href="/support" className="text-blue-600 hover:underline">Contact Support</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
