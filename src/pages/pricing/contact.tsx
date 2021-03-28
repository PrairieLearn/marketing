import React from "react";
import Head from "next/head";
import Stack from "../../components/Stack";

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
    <label className="form-label" htmlFor="id">
      {label}
    </label>
    <select
      className="form-select"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(e.target.value)
      }
    >
      <option value="" disabled selected hidden>
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

export default function Contact() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [role, setRole] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submit = () => {
    fetch("/api/contact", {
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        organization,
        message,
      }),
    })
      .then((data) => {
        if (data.ok) {
        }
      })
      .catch((err) => {});
  };

  return (
    <React.Fragment>
      <Head>
        <title></title>
      </Head>
      <div className="container my-5">
        <div className="mb-5">
          <h1 className="display-3">Pricing information</h1>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <p>
              Thanks for your interest in PrairieLearn! We're still getting our
              hosted infrastructure set up, so we're not quite ready to accept
              signups yet. If you're interested in being one of our early
              adopters or would like to learn more about how PrairieLearn could
              help your course or institution, let us know!
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card shadow">
              <div className="card-body">
                <Stack spacing={3}>
                  <div className="text-center">
                    <h2>Contact us</h2>
                    <p className="text-muted">
                      Tell us how we can help and we'll be in touch soon.
                    </p>
                  </div>
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
                    >
                      Submit
                    </button>
                  </div>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
