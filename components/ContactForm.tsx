"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions";
import { ArrowButton } from "@/components/ui/ArrowButton";

type ContactFormProps = {
  submitLabel: string;
};

type FieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  autoComplete: string;
  required?: boolean;
  defaultValue?: string;
};

const INITIAL_STATE: ContactState = { ok: false, message: "" };

const INPUT_CLASSES =
  "mt-3 w-full border-b-2 border-ink/10 bg-transparent py-3 text-body transition-colors duration-300 placeholder:text-ink/50 hover:border-ink/30 focus:border-brand focus:outline-none";

function Field({
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  required = false,
  defaultValue,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-small">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        defaultValue={defaultValue}
        className={INPUT_CLASSES}
      />
    </div>
  );
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <ArrowButton type="submit" disabled={pending} className="shadow-card">
      {pending ? "Sending…" : label}
    </ArrowButton>
  );
}

export function ContactForm({ submitLabel }: ContactFormProps) {
  const [state, action] = useActionState(submitContact, INITIAL_STATE);
  const values = state.values ?? {};

  return (
    <form action={action} className="grid gap-x-20 gap-y-10 sm:grid-cols-2">
      <Field
        name="firstName"
        label="First Name"
        placeholder="Enter your first name"
        autoComplete="given-name"
        required
        defaultValue={values.firstName}
      />
      <Field
        name="lastName"
        label="Last Name"
        placeholder="Enter your last name"
        autoComplete="family-name"
        required
        defaultValue={values.lastName}
      />
      <Field
        name="businessName"
        label="Business Name"
        placeholder="Enter your business name"
        autoComplete="organization"
        defaultValue={values.businessName}
      />
      <Field
        name="location"
        label="City/Service Location"
        placeholder="Enter your location"
        autoComplete="address-level2"
        defaultValue={values.location}
      />
      <Field
        name="email"
        label="Email"
        placeholder="Enter your email"
        type="email"
        autoComplete="email"
        required
        defaultValue={values.email}
      />
      <Field
        name="phone"
        label="Phone Number"
        placeholder="Enter your phone number"
        type="tel"
        autoComplete="tel"
        defaultValue={values.phone}
      />

      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-small">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={1}
          required
          minLength={10}
          placeholder="Enter your message"
          defaultValue={values.message}
          className={`${INPUT_CLASSES} field-sizing-content min-h-12 resize-y`}
        />
      </div>

      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col items-end gap-4 sm:col-span-2 sm:mt-2">
        <SubmitButton label={submitLabel} />
        <p
          role="status"
          aria-live="polite"
          className={`text-small ${state.ok ? "text-brand-ink" : "text-red-700"}`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
