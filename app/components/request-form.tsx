"use client";
import { useState } from "react";
import Link from "next/link";
export default function RequestForm() {
  const [method, setMethod] = useState("Email");
  const [checked, setChecked] = useState(false);
  return (
    <form
      className="request-form"
      onChange={() => setChecked(false)}
      onSubmit={(event) => {
        event.preventDefault();
        setChecked(true);
      }}
    >
      <div className="notice">
        <strong>Preview only — requests are not sent.</strong>
        <p>
          Contact and booking integrations are not connected. Please use sample
          details to explore this form. For possible exposure, seek care at an
          available healthcare facility.
        </p>
      </div>
      <div className="form-grid">
        <label>
          Full name
          <input
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Your name"
          />
        </label>
        <label>
          Preferred contact method
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            name="method"
          >
            <option>Email</option>
            <option>Phone</option>
            <option>WhatsApp</option>
          </select>
        </label>
        <label>
          {method === "Email"
            ? "Email address"
            : "Phone number (with country code)"}
          <input
            key={method}
            name="contact"
            required
            type={method === "Email" ? "email" : "tel"}
            autoComplete={method === "Email" ? "email" : "tel"}
            pattern={method === "Email" ? undefined : "[+0-9() .-]{7,25}"}
            maxLength={150}
            placeholder={method === "Email" ? "you@example.com" : "+62 …"}
          />
        </label>
        <label>
          Requested service
          <select required name="service">
            <option value="">Select a service</option>
            {[
              "Doctor consultation",
              "Rabies vaccination",
              "Immunoglobulin (RIG / SAR)",
              "Home or villa visit",
              "Follow-up care",
              "Membership inquiry",
              "Not sure",
            ].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          Preferred date (optional)
          <input
            type="date"
            name="date"
            min={new Date().toLocaleDateString("en-CA")}
          />
        </label>
        <label>
          General location in Bali
          <input
            name="location"
            required
            maxLength={100}
            placeholder="e.g. Sanur, Ubud, or Canggu"
          />
        </label>
        <label className="full-width">
          Short message (optional)
          <textarea
            name="message"
            maxLength={500}
            rows={4}
            placeholder="Please avoid sensitive health details or identification numbers."
          />
        </label>
      </div>
      <label className="checkbox-label">
        <input required name="privacy" type="checkbox" />
        <span>
          I have read the <Link href="/privacy">privacy notice</Link> and
          understand this preview does not send an appointment request.
        </span>
      </label>
      <button className="button" type="submit">
        Request an Appointment <span aria-hidden="true">→</span>
      </button>
      <p className="fine-print">
        Preview validation only. Availability must be confirmed before any
        appointment.
      </p>
      {checked && (
        <div className="notice" role="status">
          <strong>Form checked. Nothing was sent or booked.</strong>
          <p>
            Your entries passed validation. The live request service still needs
            to be connected; the team has not received these details.
          </p>
        </div>
      )}
    </form>
  );
}
