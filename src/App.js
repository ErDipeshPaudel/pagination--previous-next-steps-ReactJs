import { useState } from "react";
const messages = [
  "Work on your project daily!💪",
  "Environment is the key🔥 ",
  "Dipesh is a Gentleman!😉",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setisOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            <p>
              Step {step}: {messages[step - 1]}
            </p>
          </div>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#00008B", color: "#aaa" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#00008B", color: "#aaa" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
