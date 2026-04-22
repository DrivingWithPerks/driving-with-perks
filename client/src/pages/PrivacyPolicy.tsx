import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 container max-w-4xl">
        <h1 className="font-display text-5xl font-bold text-[var(--navy-dark)] mb-2">Privacy Policy</h1>
        <p className="text-[var(--muted-foreground)] mb-12">
          Last Updated: April 22, 2026 | Effective Date: April 22, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">1. Introduction</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              Perks Ventures Ltd. ("Company," "we," "us," or "our"), a corporation registered in British Columbia, Canada, operates the website and automotive financing services. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, submit applications, and use our services.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              We are committed to protecting your privacy and complying with the Personal Information Protection and Electronic Documents Act (PIPEDA), the British Columbia Personal Information Protection Act (PIPA), and all applicable Canadian privacy legislation.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services. By accessing and using our website, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Personal Information You Provide</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed mb-3">
                  When you submit an application or contact us, we collect:
                </p>
                <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-1 ml-2">
                  <li>Full name, date of birth, and contact information (email, phone, address)</li>
                  <li>Employment history and income information</li>
                  <li>Credit score range and credit history details</li>
                  <li>Vehicle preferences and budget information</li>
                  <li>Bankruptcy, repossession, and other credit situation details</li>
                  <li>Driver's license number and province of issuance</li>
                  <li>Bank account and financial information (for loan processing)</li>
                  <li>Social Insurance Number (SIN) for credit verification purposes</li>
                </ul>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Automatically Collected Information</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  When you visit our website, we automatically collect certain information about your device and browsing activity, including IP address, browser type, operating system, referring URLs, pages visited, time spent on pages, and click patterns. This information is collected via cookies and similar tracking technologies.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Information from Third Parties</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  We may receive information about you from Canadian credit reporting agencies (Equifax Canada, Experian Canada, TransUnion Canada), financial institutions, and other third-party sources to verify your information and assess creditworthiness.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">3. Legal Basis for Collection</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              Under PIPEDA and PIPA, we collect personal information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Processing your loan application and determining eligibility</li>
              <li>Verifying your identity and preventing fraud</li>
              <li>Communicating with you about your application status and financing options</li>
              <li>Complying with legal and regulatory requirements (PIPEDA, PIPA, lending regulations)</li>
              <li>Improving our website, services, and customer experience</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Analyzing website usage and trends</li>
              <li>Protecting against fraudulent transactions and security threats</li>
            </ul>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">4. How We Use Your Information</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              We use your personal information only for the purposes for which it was collected, unless we obtain your consent for additional uses. Your personal information will not be used for any purpose other than those identified in this Privacy Policy without your express written consent.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              We will not use your personal information for direct marketing purposes unless you have provided your express consent to receive such communications.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">5. Disclosure of Your Information</h2>
            <div className="space-y-4">
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                We may disclose your personal information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
                <li><strong>Lenders and Financial Partners:</strong> To process your loan application and provide financing</li>
                <li><strong>Canadian Credit Reporting Agencies:</strong> To verify credit information and report loan activity</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and providing services (subject to confidentiality agreements and data processing agreements)</li>
                <li><strong>Legal Authorities:</strong> When required by law, court order, or to protect our legal rights</li>
                <li><strong>Insurance Companies:</strong> To obtain insurance quotes and coverage information</li>
              </ul>
              <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
                We do not sell your personal information to third parties for marketing purposes. We will not disclose your information without your consent except as required by law or as described in this Privacy Policy.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">6. Data Security and Protection</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              We implement comprehensive security measures to protect your personal information, including:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>SSL/TLS encryption for all data transmitted over the internet</li>
              <li>Secure password protection and multi-factor authentication protocols</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Compliance with industry security standards (PCI DSS, etc.)</li>
              <li>Employee training on privacy and data protection practices</li>
            </ul>
            <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. You acknowledge that you provide your information at your own risk.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">7. Your Privacy Rights Under Canadian Law</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Access</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  You have the right to request access to your personal information held by Perks Ventures Ltd. We will provide you with a copy of your personal information within 30 days of receiving your written request.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Correction</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  You have the right to request correction of inaccurate, incomplete, or outdated personal information. We will correct your information and notify you of the changes within 30 days.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Deletion</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  You have the right to request deletion of your personal information, subject to legal retention requirements. We will delete your information within 30 days unless we are required to retain it for legal or regulatory purposes.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Withdraw Consent</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  You have the right to withdraw your consent to the collection, use, or disclosure of your personal information at any time by contacting us in writing. We will cease using your information for marketing purposes upon receipt of your withdrawal.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Lodge a Complaint</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  If you believe we have violated your privacy rights, you have the right to lodge a complaint with the Office of the Privacy Commissioner of Canada (OPC).
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience, remember your preferences, and analyze website usage. You can control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              We comply with Canada's Anti-Spam Legislation (CASL) and will not send unsolicited commercial electronic messages without your express consent.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">9. Data Retention</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Typically, we retain application data for 7 years to comply with lending regulations. You may request deletion of your information at any time, subject to legal retention requirements.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">10. Children's Privacy</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              Our website and services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will delete such information promptly.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">11. Third-Party Links</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites before providing your personal information.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our website following the posting of changes constitutes your acceptance of those changes.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">13. Contact Us</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              If you have questions about this Privacy Policy, wish to access your personal information, or have privacy concerns, please contact us:
            </p>
            <div className="text-[var(--muted-foreground)] space-y-2">
              <p><strong>Privacy Officer:</strong> Perks Ventures Ltd.</p>
              <p><strong>Email:</strong> privacy@drivinwithperks.com</p>
              <p><strong>Phone:</strong> (800) 555-DRIVE</p>
              <p><strong>Mailing Address:</strong> Perks Ventures Ltd., Attn: Privacy Officer, British Columbia, Canada</p>
            </div>
            <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
              We will respond to your inquiry within 30 days. If you are not satisfied with our response, you may lodge a complaint with the Office of the Privacy Commissioner of Canada at www.priv.gc.ca.
            </p>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
