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
          Canadian Credit Reporting Disclosure
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
                  This disclosure is required under Canadian privacy and credit reporting laws and provides important information about how Perks Ventures Ltd. uses consumer reports in evaluating your application for credit.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">1. Consumer Reports and Credit Checks</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              When you submit an application for financing through Perks Ventures Ltd., we may obtain information about you from Canadian consumer reporting agencies (also known as credit bureaus). This information is used to:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Evaluate your creditworthiness and ability to repay a loan</li>
              <li>Determine the terms and conditions of any financing offered</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
            <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
              By submitting an application, you authorize us to obtain consumer reports about you from Canadian credit reporting agencies.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">2. Canadian Credit Reporting Agencies</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              We obtain credit reports from one or more of the major Canadian credit reporting agencies:
            </p>
            <div className="space-y-3 text-[var(--muted-foreground)] text-sm">
              <p><strong>Equifax Canada:</strong> www.equifax.ca | 1-800-465-7166</p>
              <p><strong>Experian Canada:</strong> www.experian.ca | 1-866-579-0800</p>
              <p><strong>TransUnion Canada:</strong> www.transunion.ca | 1-800-663-9980</p>
            </div>
            <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
              These reports contain information about your credit history, including payment history, outstanding debts, credit inquiries, and public records such as bankruptcies and collections.
            </p>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">3. Your Rights Under Canadian Law</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Know</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  You have the right to know what information is in your consumer report. You may obtain a free copy of your credit report once every 12 months from each of the three major Canadian credit reporting agencies by visiting their websites or calling their customer service lines.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Dispute Inaccuracies</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  If you believe information in your credit report is inaccurate, incomplete, or misleading, you have the right to dispute it with the credit reporting agency. The agency must investigate your dispute and correct any errors within 30 days.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Dispute with Us</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  If you believe we have made an error in our decision based on information in your consumer report, you may dispute our decision by contacting us at fcra@drivinwithperks.com.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-[var(--navy-dark)] mb-2">Right to Lodge a Complaint</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  If you believe a credit reporting agency has violated your rights, you have the right to lodge a complaint with the Office of the Privacy Commissioner of Canada (OPC) at www.priv.gc.ca.
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
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">6. Accuracy and Dispute Process</h2>
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
                <strong>Contact Information for Canadian Credit Reporting Agencies:</strong>
              </p>
              <div className="space-y-2 text-[var(--muted-foreground)] text-sm">
                <p><strong>Equifax Canada:</strong> 1-800-465-7166 | www.equifax.ca</p>
                <p><strong>Experian Canada:</strong> 1-866-579-0800 | www.experian.ca</p>
                <p><strong>TransUnion Canada:</strong> 1-800-663-9980 | www.transunion.ca</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">7. Identity Theft and Fraud</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              If you believe you are a victim of identity theft or fraud, you should:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Place a fraud alert on your credit report by contacting one of the three major Canadian credit reporting agencies</li>
              <li>Request a free credit report to review for unauthorized accounts</li>
              <li>File a report with the Royal Canadian Mounted Police (RCMP) or local law enforcement</li>
              <li>Report the fraud to the Canadian Anti-Fraud Centre at www.antifraudcentre-centreantifraude.ca</li>
              <li>Monitor your credit report regularly for suspicious activity</li>
            </ul>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">8. Negative Information and Reporting Period</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              Under Canadian law, negative information on your credit report may remain for the following periods:
            </p>
            <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 ml-2">
              <li>Late payments: 6-7 years from the date of the first missed payment</li>
              <li>Charge-offs: 6-7 years from the date of the charge-off</li>
              <li>Bankruptcy: 6-7 years from the date of discharge (14 years for a second bankruptcy)</li>
              <li>Collections: 6-7 years from the date of the original delinquency</li>
              <li>Court judgments: 7 years from the date of judgment</li>
            </ul>
          </Card>

          <Card className="p-8 border-[var(--border)]">
            <h2 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-4">9. Compliance and Questions</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              Perks Ventures Ltd. is committed to complying with all provisions of Canadian privacy and credit reporting laws. If you have questions about this disclosure or your rights under Canadian law, please contact us:
            </p>
            <div className="text-[var(--muted-foreground)] space-y-2">
              <p><strong>Email:</strong> fcra@drivinwithperks.com</p>
              <p><strong>Phone:</strong> (800) 555-DRIVE</p>
              <p><strong>Mailing Address:</strong> Perks Ventures Ltd., Attn: Compliance Officer, British Columbia, Canada</p>
            </div>
            <p className="text-[var(--muted-foreground)] leading-relaxed pt-4">
              You may also contact the Office of the Privacy Commissioner of Canada (OPC) for more information about your rights:
            </p>
            <div className="text-[var(--muted-foreground)] space-y-2 text-sm">
              <p><strong>Website:</strong> www.priv.gc.ca</p>
              <p><strong>Phone:</strong> 1-800-282-1376</p>
              <p><strong>Mail:</strong> Office of the Privacy Commissioner of Canada, 30 Victoria Street, Gatineau, QC K1A 1H2</p>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
