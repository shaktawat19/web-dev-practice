import { useState } from "react";

export default Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleContinue = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <main>
      <div className="container">
        <div className="stepper-container">
          {steps.map(({ label }, idx) => {
            return (
              <div key={idx} className={"stepper"}>
                <div
                  className={`stepper-number ${
                    idx <= currentStep ? "active" : ""
                  }`}
                >
                  {idx + 1}
                  {idx !== steps.length - 1 && (
                    <div
                      className={`stepper-line  ${
                        idx < currentStep ? "active" : ""
                      }`}
                    ></div>
                  )}
                </div>

                <div className="label">{label}</div>
              </div>
            );
          })}
        </div>
        <div className="stepper-content">{steps[currentStep].content}</div>
        <div className="btn-container">
          {currentStep !== 0 && (
            <button className="back" onClick={handleBack}>
              Back
            </button>
          )}
          {currentStep !== steps.length - 1 && (
            <button className="continue" onClick={handleContinue}>
              Continue
            </button>
          )}
        </div>
      </div>
    </main>
  );
};
