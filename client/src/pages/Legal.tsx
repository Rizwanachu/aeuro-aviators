import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Legal() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 pt-20">
      <Navbar />
      <main className="container mx-auto px-6 py-12 text-slate-300 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Legal & Policies</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Terms & Conditions</h2>
          
          <div className="space-y-6 text-base leading-relaxed">
            <p className="text-sm text-slate-400">Last updated: December 2025</p>
            
            <p className="text-white font-semibold">Welcome to Aeuro Aviators. By accessing or using our website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.</p>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">1. About Our Services</h3>
              <p className="mb-3">Aeuro Aviators provides online consultancy and guidance services related to pilot training and aviation education abroad.</p>
              <p className="font-semibold mb-2">We offer:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Career counselling and guidance</li>
                <li>Information about flight schools and training programs</li>
                <li>Application and documentation guidance</li>
                <li>Pre-departure advisory support</li>
              </ul>
              <p className="mt-3">We do not guarantee admissions, visas, medical clearances, training completion, or employment outcomes.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">2. Eligibility</h3>
              <p className="mb-2">By using our website or services, you confirm that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are at least 18 years old (or using the service with parental consent)</li>
                <li>The information you provide is accurate and complete</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">3. Use of Website</h3>
              <p className="mb-2">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use this website only for lawful purposes</li>
                <li>Not misuse, copy, scrape, or attempt to harm the website or its content</li>
                <li>Not submit false or misleading information</li>
              </ul>
              <p className="mt-3">We reserve the right to restrict or terminate access if misuse is detected.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">4. No Professional or Legal Guarantee</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The information provided on this website is for general guidance purposes only</li>
                <li>We are not immigration authorities, airlines, aviation regulators, or government bodies</li>
                <li>Final decisions are made by flight schools, universities, aviation authorities, and embassies</li>
                <li>Regulations, fees, and requirements may change without notice</li>
                <li>You are responsible for verifying final requirements independently</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">5. Fees & Payments</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Consultancy fees are communicated clearly before engagement</li>
                <li>All payments must be made through approved payment methods</li>
                <li>Fees are non-refundable, unless explicitly stated in writing</li>
                <li>Any third-party fees (flight schools, embassies, medical exams, licenses) are paid directly by the client and are not included unless specified</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">6. Intellectual Property</h3>
              <p className="mb-2">All content on this website, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Text</li>
                <li>Logos</li>
                <li>Graphics</li>
                <li>Layout and design</li>
              </ul>
              <p className="mt-3">is the property of Aeuro Aviators and may not be copied, reused, or distributed without written permission.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">7. Third-Party Links</h3>
              <p className="mb-2">Our website may contain links to third-party websites or institutions. We are not responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Content accuracy</li>
                <li>Policies or practices of external websites</li>
                <li>Services provided by third parties</li>
              </ul>
              <p className="mt-3">Accessing third-party links is at your own risk.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">8. Limitation of Liability</h3>
              <p className="mb-2">To the maximum extent permitted by law, Aeuro Aviators shall not be liable for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Admission or visa rejections</li>
                <li>Delays or losses caused by third parties</li>
                <li>Changes in laws, regulations, or training requirements</li>
                <li>Financial, personal, or career-related losses</li>
              </ul>
              <p className="mt-3">Our liability, if any, is limited to the amount paid for our consultancy services.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">9. Privacy & Data Protection</h3>
              <p>Your use of this website is also governed by our Privacy Policy, which explains how we collect, use, and protect your data.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">10. Service Modification or Termination</h3>
              <p className="mb-2">We reserve the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or discontinue any service</li>
                <li>Update website content</li>
                <li>Refuse service where required</li>
              </ul>
              <p className="mt-3">Without prior notice, if misuse or violation of these terms is identified.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">11. Changes to Terms</h3>
              <p>We may update these Terms & Conditions at any time. Continued use of the website after updates constitutes acceptance of the revised terms.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">12. Contact Information</h3>
              <p className="mb-2">For any questions regarding these Terms & Conditions, contact:</p>
              <ul className="space-y-2 ml-4">
                <li>📧 <span className="text-white">aeuroaviator@gmail.com</span></li>
                <li>📍 <span className="text-white">Operating Online from India</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Privacy Policy</h2>
          
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
