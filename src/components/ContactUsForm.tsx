import React from "react";

import Stack from "./Stack";

type HTMLInputProps = React.AllHTMLAttributes<HTMLInputElement>;

interface InputProps {
  component?: "input" | "textarea";
  id: string;
  label: string;
  onChange: (value: string) => void;
  type?: HTMLInputProps["type"];
  value: string;
}

const Input: React.FC<InputProps> = ({
  component: Component = "input",
  id,
  label,
  onChange,
  type,
  value,
}) => (
  <div>
    <label className="form-label" htmlFor={id}>
      {label}
    </label>
    <Component
      className="form-control"
      value={value}
      onChange={(
        e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
      ) => onChange(e.target.value)}
      type={type}
      id={id}
    />
  </div>
);

interface SelectProps {
  id: string;
  label: string;
  onChange: (value: string) => void;
  options: string[];
  value: string;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  onChange,
  options,
  value,
}) => (
  <div>
    <label className="form-label" htmlFor={id}>
      {label}
    </label>
    <select
      className="form-select"
      id={id}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(e.target.value)
      }
    >
      <option value="" disabled hidden>
        Select an option
      </option>
      {options.map((label) => (
        <option value={label} key={label}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

type SubmissionState = "unsubmitted" | "submitting" | "submitted" | "error";

interface ContactUsFormProps {
  showHeader?: boolean;
}

export const ContactUsForm: React.FC<ContactUsFormProps> = ({
  showHeader = true,
}) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [role, setRole] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [submissionState, setSubmissionState] = React.useState<SubmissionState>(
    "unsubmitted"
  );

  const submit = () => {
    setSubmissionState("submitting");
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        organization,
        role,
        message,
        url: document.location.href,
      }),
    })
      .then((data) => setSubmissionState(data.ok ? "submitted" : "error"))
      .catch(() => setSubmissionState("error"));
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        {submissionState !== "submitted" && (
          <Stack spacing={3}>
            {showHeader && (
              <div className="text-center">
                <h2>Contact us</h2>
                <p className="text-muted">
                  Tell us how we can help and we'll be in touch soon.
                </p>
              </div>
            )}
            <div className="row">
              <div className="col-6">
                <Input
                  id="first-name"
                  label="First name"
                  onChange={setFirstName}
                  value={firstName}
                />
              </div>
              <div className="col-6">
                <Input
                  id="last-name"
                  label="Last name"
                  onChange={setLastName}
                  value={lastName}
                />
              </div>
            </div>
            <Input
              id="email"
              label="Email"
              type="email"
              onChange={setEmail}
              value={email}
            />
            <Input
              id="organization"
              label="School / organization"
              type="email"
              onChange={setOrganization}
              value={organization}
            />
            <Select
              id="role"
              label="Role"
              onChange={setRole}
              options={["Administrator", "Instructor", "TA", "Other"]}
              value={role}
            />
            <Input
              component="textarea"
              id="message"
              label="What can we help you with?"
              onChange={setMessage}
              value={message}
            />
            <div className="d-grid">
              <button
                type="button"
                className="btn btn-primary"
                onClick={submit}
                disabled={submissionState === "submitting"}
              >
                Submit
              </button>
            </div>
            {submissionState === "error" && (
              <div className="text-danger">
                Sorry, something went wrong. Try again in a moment.
              </div>
            )}
          </Stack>
        )}
        {submissionState === "submitted" && (
          <div className="text-center">
            <h2>Thanks!</h2>
            <p className="text-muted mb-0">
              Someone from our team will be in touch with you soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
