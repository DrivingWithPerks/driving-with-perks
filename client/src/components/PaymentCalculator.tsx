import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { DollarSign, Calendar, Percent } from "lucide-react";

export default function PaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(15000);
  const [loanTerm, setLoanTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(8.5);

  const monthlyPayment = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;

    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }

    const monthlyPaymentCalc =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return monthlyPaymentCalc;
  }, [loanAmount, loanTerm, interestRate]);

  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-navy mb-2">Payment Calculator</h3>
        <p className="text-gray-600 mb-8">
          See your exact monthly payment before you apply
        </p>

        <div className="space-y-8">
          {/* Loan Amount Slider */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="flex items-center gap-2 font-semibold text-navy">
                <DollarSign className="w-5 h-5 text-blue-600" />
                Loan Amount
              </label>
              <span className="text-2xl font-bold text-blue-600">
                ${loanAmount.toLocaleString()}
              </span>
            </div>
            <Slider
              value={[loanAmount]}
              onValueChange={(value) => setLoanAmount(value[0])}
              min={5000}
              max={50000}
              step={1000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>$5,000</span>
              <span>$50,000</span>
            </div>
          </div>

          {/* Loan Term Slider */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="flex items-center gap-2 font-semibold text-navy">
                <Calendar className="w-5 h-5 text-blue-600" />
                Loan Term
              </label>
              <span className="text-2xl font-bold text-blue-600">
                {loanTerm} months ({Math.round(loanTerm / 12)} years)
              </span>
            </div>
            <Slider
              value={[loanTerm]}
              onValueChange={(value) => setLoanTerm(value[0])}
              min={24}
              max={84}
              step={6}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>24 months (2 years)</span>
              <span>84 months (7 years)</span>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="flex items-center gap-2 font-semibold text-navy">
                <Percent className="w-5 h-5 text-blue-600" />
                Interest Rate
              </label>
              <span className="text-2xl font-bold text-blue-600">
                {interestRate.toFixed(1)}%
              </span>
            </div>
            <Slider
              value={[interestRate]}
              onValueChange={(value) => setInterestRate(value[0])}
              min={3}
              max={18}
              step={0.5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>3% (Excellent Credit)</span>
              <span>18% (Challenged Credit)</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t-2 border-blue-200">
          <Card className="bg-white p-4 text-center">
            <p className="text-gray-600 text-sm font-medium mb-2">Monthly Payment</p>
            <p className="text-3xl font-bold text-blue-600">
              ${monthlyPayment.toFixed(2)}
            </p>
          </Card>
          <Card className="bg-white p-4 text-center">
            <p className="text-gray-600 text-sm font-medium mb-2">Total Interest</p>
            <p className="text-3xl font-bold text-orange-600">
              ${totalInterest.toFixed(2)}
            </p>
          </Card>
          <Card className="bg-white p-4 text-center">
            <p className="text-gray-600 text-sm font-medium mb-2">Total Payment</p>
            <p className="text-3xl font-bold text-green-600">
              ${totalPayment.toFixed(2)}
            </p>
          </Card>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          * This is an estimate. Actual payment may vary based on final approval and terms.
        </p>
      </div>
    </div>
  );
}
