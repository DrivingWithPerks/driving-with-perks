import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 container max-w-4xl">
        <h1 className="font-display text-5xl font-bold text-[var(--navy-dark)] mb-2">Terms of Service</h1>
        <p className="text-[var(--muted-foreground)] mb-12">
          Last Updated: April 22, 2026 | Effective Date: April 22, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">1. Acceptance of Terms</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              By accessing and using this website and services provided by Driving with Perks ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our website or services. We reserve the right to modify these terms at any time, and your continued use of our website constitutes acceptance of any changes.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">2. Use License</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable license to access and use our website for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Reproduce, duplicate, copy, or sell any portion of our website or services</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Transmit viruses, malware, or any code of destructive nature</li>
              <li>Engage in any form of harassment, abuse, or threatening behavior</li>
              <li>Use automated tools (bots, scrapers) to access our website without permission</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">3. Application Process and Accuracy</h2>
            <div className="space-y-4">
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                When you submit an application through our website, you certify that:
              </p>
              <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
                <li>You are at least 18 years of age and a legal resident of the United States</li>
                <li>All information provided is true, accurate, and complete</li>
                <li>You have the authority to enter into a binding agreement</li>
                <li>You authorize us to verify your information with credit bureaus and financial institutions</li>
                <li>You understand that providing false information may result in criminal penalties</li>
              </ul>
              <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
                We reserve the right to deny any application or terminate services if we discover fraudulent or inaccurate information.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">4. Loan Terms and Conditions</h2>
            <div className="space-y-4">
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Any financing provided through our services is subject to:
              </p>
              <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
                <li>Approval by our lending partners and compliance with all applicable laws</li>
                <li>A separate loan agreement that will be provided upon approval</li>
                <li>Verification of employment, income, and creditworthiness</li>
                <li>Proof of insurance and valid driver's license</li>
                <li>A security interest in the financed vehicle</li>
              </ul>
              <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
                Interest rates, terms, and conditions are determined by our lending partners based on your creditworthiness and are subject to change without notice.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              Our website and services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied. We disclaim all warranties, including:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
              <li>Warranties that our website will be uninterrupted, error-free, or secure</li>
              <li>Warranties regarding the accuracy or completeness of information provided</li>
            </ul>
            <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
              We do not warrant that defects will be corrected or that our website will meet your expectations.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">6. Limitation of Liability</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              To the fullest extent permitted by law, Driving with Perks shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Loss of use or enjoyment of our services</li>
              <li>Unauthorized access to your information</li>
              <li>Third-party conduct or content</li>
            </ul>
            <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
              Our total liability for any claim arising from your use of our website or services shall not exceed $100 or the amount you paid us, whichever is greater.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">7. Indemnification</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              You agree to indemnify, defend, and hold harmless Driving with Perks and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising from: (1) your use of our website or services; (2) your violation of these Terms of Service; (3) your violation of any applicable law or regulation; or (4) your infringement of any third-party rights.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">8. Third-Party Links and Content</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              Our website may contain links to third-party websites and services. We are not responsible for:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>The accuracy, completeness, or legality of third-party content</li>
              <li>The privacy practices or terms of service of third-party websites</li>
              <li>Any transactions or interactions with third parties</li>
              <li>Any damages or losses resulting from your use of third-party services</li>
            </ul>
            <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
              Your use of third-party websites is at your own risk and subject to their terms and conditions.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">9. Intellectual Property Rights</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of Driving with Perks or our content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Reproduce, modify, or distribute our content without permission</li>
              <li>Use our trademarks or logos without written consent</li>
              <li>Reverse engineer or decompile our software</li>
              <li>Remove copyright or proprietary notices</li>
            </ul>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">10. Termination</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              We reserve the right to terminate or suspend your access to our website and services at any time, without notice or liability, for any reason, including: (1) violation of these Terms of Service; (2) fraudulent or illegal activity; (3) non-payment of fees; or (4) any conduct we deem inappropriate or harmful.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">11. Governing Law and Dispute Resolution</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              These Terms of Service are governed by and construed in accordance with the laws of the United States and applicable state laws, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved through:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Binding arbitration under the American Arbitration Association (AAA) rules</li>
              <li>Arbitration shall take place in the state where you reside</li>
              <li>Each party shall bear its own costs and attorney's fees</li>
              <li>You waive the right to a jury trial and class action lawsuit</li>
            </ul>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">12. Severability</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. We will modify the invalid provision to the minimum extent necessary to make it valid and enforceable.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">13. Entire Agreement</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              These Terms of Service, together with our Privacy Policy and any other agreements you enter into with us, constitute the entire agreement between you and Driving with Perks regarding your use of our website and services. These terms supersede all prior agreements and understandings.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">14. Contact Us</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="text-[var(--muted-foreground)] space-y-2">
              <p><strong>Email:</strong> legal@drivinwithperks.com</p>
              <p><strong>Phone:</strong> (800) 555-DRIVE</p>
              <p><strong>Mailing Address:</strong> Driving with Perks, Attn: Legal Department, [Your Address]</p>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
