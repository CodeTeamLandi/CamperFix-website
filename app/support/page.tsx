import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support - CamperFix',
  description: 'Get help with CamperFix - Contact our support team',
};

export default function Support() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-6">Support</h1>
          <p className="text-gray-600 mb-8">
            We're here to help! Get assistance with CamperFix through any of the channels below.
          </p>

          {/* Contact Methods */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Support */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-blue-600 text-3xl mb-3">📧</div>
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">
                  For general inquiries and non-urgent matters
                </p>
                <a
                  href="mailto:support@camperfix.com"
                  className="text-blue-600 hover:underline font-medium"
                >
                  support@camperfix.com
                </a>
                <p className="text-sm text-gray-500 mt-2">Response time: Within 24 hours</p>
              </div>

              {/* App Support */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-blue-600 text-3xl mb-3">📱</div>
                <h3 className="text-xl font-semibold mb-2">In-App Support</h3>
                <p className="text-gray-600 mb-4">
                  Get help directly through the mobile app
                </p>
                <p className="text-gray-700 font-medium">
                  Open CamperFix App → Settings → Help & Support
                </p>
                <p className="text-sm text-gray-500 mt-2">Available once app launches</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold mb-2">When will CamperFix be available?</h3>
                <p className="text-gray-700">
                  CamperFix is currently in development. We're working hard to launch on both iOS and Android platforms. Sign up on our homepage to be notified when we launch.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold mb-2">What types of RVs does CamperFix support?</h3>
                <p className="text-gray-700">
                  CamperFix provides brand-agnostic support for all types of RVs, including motorhomes, travel trailers, fifth wheels, truck campers, and camper vans. Our experts have experience with various makes and models.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold mb-2">How does the 30-minute SOS support work?</h3>
                <p className="text-gray-700">
                  Once launched, our SOS feature will connect you with an RV technician within 30 minutes for urgent technical issues. This service will be available through a premium subscription or pay-per-use model.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold mb-2">Can CamperFix help with warranty-covered repairs?</h3>
                <p className="text-gray-700">
                  CamperFix can help diagnose issues and provide technical guidance, but we recommend consulting your manufacturer or dealer for warranty-covered repairs. We can help you document issues and understand what might be covered.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold mb-2">Do I need technical knowledge to use CamperFix?</h3>
                <p className="text-gray-700">
                  No technical knowledge required! Our app guides you through the process with simple questions and photo/video capture. Our experts will interpret your input and provide clear, step-by-step guidance appropriate for your skill level.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold mb-2">Is CamperFix available internationally?</h3>
                <p className="text-gray-700">
                  At launch, CamperFix will primarily serve North American users. We plan to expand internationally based on demand and technician availability in different regions.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold mb-2">How much will CamperFix cost?</h3>
                <p className="text-gray-700">
                  Pricing details will be announced closer to launch. We're designing flexible pricing options including pay-per-use support sessions, monthly subscriptions, and annual plans to fit different user needs.
                </p>
              </div>
            </div>
          </section>

          {/* Additional Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Privacy Questions</h3>
                <p className="text-gray-600">
                  Review our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> for information about how we handle your data.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Terms and Conditions</h3>
                <p className="text-gray-600">
                  Read our <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> for complete service terms and conditions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Business Inquiries</h3>
                <p className="text-gray-600">
                  For partnership opportunities or business inquiries, email{' '}
                  <a href="mailto:business@camperfix.com" className="text-blue-600 hover:underline">
                    business@camperfix.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Emergency Notice */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="text-red-600 text-2xl mr-3">⚠️</div>
              <div>
                <h3 className="font-semibold text-red-800 mb-2">Emergency Notice</h3>
                <p className="text-red-700">
                  CamperFix is not an emergency service. If you're experiencing a life-threatening emergency, fire, or serious injury, call 911 (or your local emergency number) immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
