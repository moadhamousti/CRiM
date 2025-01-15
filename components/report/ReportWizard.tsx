"use client";

import { useState } from "react";
import { ReportForm } from "./ReportForm";
import { ReportSubmitted } from "./ReportFormCompleted";

export function ReportWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [reportData, setReportData] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleStepComplete = async (data: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setReportData({ ...reportData, ...data });

    if (currentStep === 4) {
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="rounded-2xl bg-zinc-900 p-8">
      {currentStep === 1 && <ReportForm onComplete={handleStepComplete} />}
      {currentStep === 2 && (
        <ReportSubmitted data={reportData} onComplete={handleStepComplete} />
      )}
    </div>
  );
}
