"use client";
import { useRef, useState } from "react";
import { questions, hasAnswer } from "../lib/questionnaire";
import { doctorHref } from "../lib/site";
import { Button } from "./ui";
export default function ExposureGuide() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(5).fill(""));
  const [error, setError] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  function move(n: number) {
    setStep(n);
    setError("");
    requestAnimationFrame(() => heading.current?.focus());
  }
  return (
    <section className="questionnaire">
      <div className="progress-label">
        <span>Step {step + 1} of 6</span>
        <span>{step === 5 ? "Your summary" : "About the incident"}</span>
      </div>
      <progress value={step + 1} max={6} aria-label="Exposure guide progress" />
      <h2 tabIndex={-1} ref={heading}>
        {step === 5
          ? "Your summary for a healthcare professional"
          : questions[step].title}
      </h2>
      {step < 5 ? (
        <>
          <p>{questions[step].hint}</p>
          <fieldset>
            <legend className="sr-only">{questions[step].title}</legend>
            <div className="answer-options">
              {questions[step].options.map((option) => (
                <label
                  key={`${step}-${option}`}
                  className={answers[step] === option ? "selected" : ""}
                >
                  <input
                    type="radio"
                    name={`step-${step}`}
                    value={option}
                    checked={answers[step] === option}
                    onChange={() => {
                      setAnswers(
                        answers.map((a, i) => (i === step ? option : a)),
                      );
                      setError("");
                    }}
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
          {error && (
            <p role="alert" className="error">
              {error}
            </p>
          )}
          <div className="question-actions">
            <button
              className="button secondary"
              disabled={step === 0}
              onClick={() => move(step - 1)}
            >
              ← Back
            </button>
            <button
              className="button"
              onClick={() =>
                hasAnswer(answers, step)
                  ? move(step + 1)
                  : setError(
                      "Please choose an answer. “Not sure” is always an option.",
                    )
              }
            >
              {step === 4 ? "View summary" : "Next"} →
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="notice">
            <strong>Arrange a professional assessment.</strong>
            <p>
              These answers do not establish your risk or tell you whether
              treatment is needed. Do not delay care while waiting for an online
              reply.
            </p>
          </div>
          <dl className="answer-summary">
            {questions.map((q, i) => (
              <div key={q.label}>
                <dt>{q.label}</dt>
                <dd>{answers[i]}</dd>
                <button onClick={() => move(i)} aria-label={`Edit ${q.label}`}>
                  Edit
                </button>
              </div>
            ))}
          </dl>
          <div className="question-actions">
            <button className="button secondary" onClick={() => window.print()}>
              Print summary
            </button>
            <Button href={doctorHref}>Talk to a Doctor</Button>
          </div>
          <button
            className="restart"
            onClick={() => {
              setAnswers(Array(5).fill(""));
              move(0);
            }}
          >
            Restart questionnaire
          </button>
        </>
      )}
      <p className="fine-print">
        Your answers stay on this page and are not sent to the team. Refreshing
        or leaving clears them. General information only.
      </p>
    </section>
  );
}
