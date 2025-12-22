import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 pt-20">
      <Navbar />
      <main className="container mx-auto px-6 py-12 text-slate-300 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-base leading-relaxed">
          <p className="text-sm text-slate-400">Last updated: December 2025</p>
          
          <p className="text-white font-semibold">Aeuro Aviators respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your data when you visit our website or use our services.</p>

          <p className="text-white font-semibold">By using our website or services, you agree to the practices described in this policy.</p>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">1. Information We Collect</h3>
            <p className="mb-3">We may collect the following types of personal information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full name</li>
              <li>Email address and phone number</li>
              <li>Date of birth</li>
              <li>Academic records and certificates</li>
              <li>Passport and identification details</li>
              <li>Career preferences and training goals</li>
              <li>Communication records (emails, messages, calls)</li>
            </ul>
            <p className="mt-3">We only collect information that is necessary to provide our consultancy services.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">2. How We Collect Information</h3>
            <p className="mb-2">Information is collected when you:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fill out enquiry or application forms</li>
              <li>Contact us via email, WhatsApp, or phone</li>
              <li>Book consultations</li>
              <li>Submit documents voluntarily</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">3. How We Use Your Information</h3>
            <p className="mb-2">Your information is used to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide pilot training and study-abroad consultancy services</li>
              <li>Communicate with you regarding applications and guidance</li>
              <li>Share required details with partner flight schools or institutions (with consent)</li>
              <li>Maintain internal records and improve our services</li>
            </ul>
            <p className="mt-3">We do not use your data for unsolicited marketing.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">4. Data Sharing & Disclosure</h3>
            <p className="mb-3">We do not sell, rent, or trade your personal data.</p>
            <p className="mb-2">Your data may be shared only with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Flight schools or aviation academies</li>
              <li>Educational institutions</li>
              <li>Authorized service partners</li>
              <li>Government or legal authorities if required by law</li>
            </ul>
            <p className="mt-3">Data is shared strictly on a need-to-know basis.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">5. Data Storage & Security</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Data is stored digitally using secure systems</li>
              <li>Access is restricted to authorized personnel only</li>
              <li>Reasonable security measures are in place to prevent unauthorized access, loss, or misuse</li>
            </ul>
            <p className="mt-3">While we take strong precautions, no online system is completely risk-free.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">6. International Data Transfer</h3>
            <p className="mb-3">As we work with institutions outside India, your information may be transferred to and processed in European nations.</p>
            <p>By using our services, you consent to such transfers in accordance with this Privacy Policy.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">7. Your Rights</h3>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">Requests can be made by contacting us at the email below.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">8. Cookies & Website Analytics</h3>
            <p className="mb-2">Our website may use basic cookies and analytics tools to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improve user experience</li>
              <li>Understand website traffic</li>
            </ul>
            <p className="mt-3">You may disable cookies through your browser settings if you prefer.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">9. Data Retention</h3>
            <p className="mb-2">We retain personal information only for as long as necessary to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide our services</li>
              <li>Meet legal, regulatory, or accounting requirements</li>
            </ul>
            <p className="mt-3">Once no longer required, data is securely deleted.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">10. Third-Party Links</h3>
            <p className="mb-2">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external sites.</p>
            <p>We encourage you to review their privacy policies separately.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">11. Policy Updates</h3>
            <p className="mb-2">This Privacy Policy may be updated from time to time. Any changes will be posted on this page with a revised date.</p>
            <p>Continued use of our services after updates indicates acceptance of the revised policy.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">12. Contact Information</h3>
            <p className="mb-2">If you have questions or concerns about this Privacy Policy, contact us at:</p>
            <ul className="space-y-2 ml-4">
              <li>📧 <span className="text-white">aeuroaviator@gmail.com</span></li>
              <li>📍 <span className="text-white">Aeuro Aviators</span></li>
              <li>📍 <span className="text-white">Operating Online from India</span></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
