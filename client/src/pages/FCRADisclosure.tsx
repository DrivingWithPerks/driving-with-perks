import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function FCRADisclosure() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 container max-w-4xl">
        <h1 className="font-display text-5xl font-bold text-[var(--navy-dark)] mb-2">
          Fair Credit Reporting Act (FCRA) Disclosure
        </h1>
        <p className="text-[var(--muted-foreground)] mb-12">
          Last Updated: April 22, 2026 | Effective Date: April 22, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <Card className="p-8 border-[var(--border)] bg-blue-50/5 border-blue-200/20">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Important Notice</h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                  This disclosure is required by the Fair Credit Reporting Act (FCRA) and provides important information about how we use consumer reports in evaluating your application for credit.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">1. Consumer Reports and Credit Checks</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              When you submit an application for financing through Driving with Perks, we may obtain information about you from consumer reporting agencies (also known as credit bureaus). This information is used to:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Evaluate your creditworthiness and ability to repay a loan</li>
              <li>Determine the terms and conditions of any financing offered</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
            <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
              By submitting an application, you authorize us to obtain consumer reports about you from credit reporting agencies.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">2. Types of Consumer Reports</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Credit Reports</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  We obtain credit reports from one or more of the three major credit reporting agencies: Equifax, Experian, and TransUnion. These reports contain information about your credit history, including payment history, outstanding debts, credit inquiries, and public records.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Investigative Consumer Reports</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  We may also obtain investigative consumer reports that include information about your character, general reputation, personal characteristics, and mode of living. These reports may be obtained from third-party investigators.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Employment and Income Verification</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  We may verify your employment history and income through employment verification services and income documentation you provide.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">3. Your Rights Under the FCRA</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Know</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  You have the right to know what information is in your consumer report. You may obtain a free copy of your credit report once every 12 months from each of the three major credit reporting agencies by visiting www.annualcreditreport.com or calling 1-877-322-8228.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Dispute Inaccuracies</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  If you believe information in your credit report is inaccurate, incomplete, or misleading, you have the right to dispute it with the credit reporting agency. The agency must investigate your dispute and correct any errors within 30 days.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Opt-Out of Prescreened Offers</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  You have the right to opt-out of prescreened credit offers. You can do this by calling 1-888-5-OPT-OUT (1-888-567-8688) or visiting www.optoutprescreen.com.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Dispute with Us</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  If you believe we have made an error in our decision based on information in your consumer report, you may dispute our decision by contacting us at fcra@drivinwithperks.com.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">4. Adverse Action Notice</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              If we deny your application or take any adverse action based wholly or partly on information in a consumer report, we will provide you with:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Written notice of the adverse action</li>
              <li>The name, address, and phone number of the credit reporting agency that provided the report</li>
              <li>A statement that the credit reporting agency did not make the decision and cannot explain the specific reasons for our decision</li>
              <li>Your right to obtain a free copy of your credit report from the credit reporting agency</li>
              <li>Your right to dispute the accuracy of information in your credit report</li>
            </ul>
            <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
              You will receive this notice within a reasonable time after we make our decision.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">5. Credit Inquiries and Your Credit Score</h2>
            <div className="space-y-4">
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                When we obtain your credit report, it may result in a "hard inquiry" on your credit report. Hard inquiries may temporarily lower your credit score by a few points. However:
              </p>
              <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
                <li>Multiple inquiries for the same type of credit within 14-45 days typically count as a single inquiry</li>
                <li>Hard inquiries typically remain on your credit report for 12 months</li>
                <li>The impact on your credit score is usually minimal and temporary</li>
                <li>Obtaining your own credit report does not affect your credit score</li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">6. Permissible Purpose</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              Under the FCRA, we may only obtain your consumer report for a permissible purpose. The permissible purposes for obtaining your consumer report include: (1) evaluating your application for credit; (2) underwriting credit; (3) verifying your identity; (4) detecting fraud; (5) complying with legal obligations; and (6) other purposes permitted by law.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">7. Accuracy and Dispute Process</h2>
            <div className="space-y-4">
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                If you believe information in your credit report is inaccurate, you should:
              </p>
              <ol className="list-decimal list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
                <li>Contact the credit reporting agency directly to dispute the error</li>
                <li>Provide written documentation supporting your dispute</li>
                <li>Keep copies of all correspondence</li>
                <li>Follow up to ensure the error has been corrected</li>
              </ol>
              <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
                <strong>Contact Information for Major Credit Reporting Agencies:</strong>
              </p>
              <div className="space-y-2 text-[var(--muted-foreground)] text-sm">
                <p><strong>Equifax:</strong> 1-800-685-1111 | www.equifax.com</p>
                <p><strong>Experian:</strong> 1-888-397-3742 | www.experian.com</p>
                <p><strong>TransUnion:</strong> 1-800-916-8800 | www.transunion.com</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">8. Identity Theft and Fraud</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              If you believe you are a victim of identity theft or fraud, you should:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Place a fraud alert on your credit report by contacting one of the three major credit reporting agencies</li>
              <li>Request a free credit report to review for unauthorized accounts</li>
              <li>File a report with the Federal Trade Commission (FTC) at www.identitytheft.gov</li>
              <li>File a police report with your local law enforcement agency</li>
              <li>Monitor your credit report regularly for suspicious activity</li>
            </ul>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">9. Negative Information and Reporting Period</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              Negative information on your credit report may remain for the following periods:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Late payments: 7 years from the date of the first missed payment</li>
              <li>Charge-offs: 7 years from the date of the charge-off</li>
              <li>Bankruptcy: 7-10 years depending on the chapter filed</li>
              <li>Foreclosure: 7 years from the date of the foreclosure</li>
              <li>Tax liens: 7 years from the date of payment</li>
              <li>Collections: 7 years from the date of the original delinquency</li>
            </ul>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">10. Compliance and Questions</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              Driving with Perks is committed to complying with all provisions of the Fair Credit Reporting Act and other applicable consumer protection laws. If you have questions about this disclosure or your rights under the FCRA, please contact us:
            </p>
            <div className="text-[var(--muted-foreground)] space-y-2">
              <p><strong>Email:</strong> fcra@drivinwithperks.com</p>
              <p><strong>Phone:</strong> (800) 555-DRIVE</p>
              <p><strong>Mailing Address:</strong> Driving with Perks, Attn: FCRA Compliance Officer, [Your Address]</p>
            </div>
            <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
              You may also contact the Federal Trade Commission (FTC) for more information about your rights under the FCRA:
            </p>
            <div className="text-[var(--muted-foreground)] space-y-2 text-sm">
              <p><strong>FTC Consumer Sentinel Network:</strong> www.reportfraud.ftc.gov</p>
              <p><strong>FTC Phone:</strong> 1-877-438-4338</p>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
