import React, { FormEvent } from "react";
import clsx from "clsx";
import { TextInput, TextArea } from "./controls/TextInput";

enum EMAIL_STATUSES {
  SUCCESS,
  FAILURE,
  LOADING,
}

interface emailErrors {
  name?: string;
  email?: string;
  message?: string;
}
interface emailValues {
  name: string;
  email: string;
  message: string;
}

const handleValidate = (values: emailValues) => {
  let errors: emailErrors = {};
  if (!values.name) {
    errors.name = "Please enter your name";
  }
  if (!values.email) {
    errors.email = "Please enter your email";
  }
  const emailExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailExpression.test(values.email)) {
    errors.email = "Email is not valid";
  }
  if (!values.message) {
    errors.message = "Please enter a message";
  }

  return errors;
};

export const ContactForm: React.FC = (props) => {
  const [emailSendStatus, setEmailSendStatus] = React.useState<
    EMAIL_STATUSES | undefined
  >();

  const [errors, setErrors] = React.useState<emailErrors>({});

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const values: emailValues = {
      name: evt.target[0].value,
      email: evt.target[1].value,
      message: evt.target[2].value,
    };

    const errors = handleValidate(values);
    if (Object.keys(errors).length === 0) {
      setEmailSendStatus(EMAIL_STATUSES.LOADING);
      fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          from: `${values.name} <${values.email}>`,
          to: "scott@scottbenton.dev",
          subject: "Portfolio Message",
          text: values.message,
        }),
      }).then((response) => {
        if (response.ok) {
          setEmailSendStatus(EMAIL_STATUSES.SUCCESS);
        } else {
          setEmailSendStatus(EMAIL_STATUSES.FAILURE);
        }
      });
    }
    setErrors(errors);
  };

  const getButtonText = () => {
    switch (emailSendStatus) {
      case EMAIL_STATUSES.LOADING:
        return "Sending...";
      case EMAIL_STATUSES.SUCCESS:
        return "Message Sent";
      case EMAIL_STATUSES.FAILURE:
        return "Try Again";
      default:
        return "Send Message";
    }
  };

  const Container = ({ children }) => (
    <div
      className={
        "bg-purple-700 w-full max-w-screen-sm p-4 text-white rounded-lg my-6"
      }
    >
      {children}
    </div>
  );

  if (emailSendStatus === EMAIL_STATUSES.SUCCESS) {
    return (
      <Container>
        <h2>Message Sent</h2>
        <span className={"text-purple-200 font-semibold tracking-wide"}>
          Your message has been sent. I'll get back to you shortly!
        </span>
      </Container>
    );
  } else if (emailSendStatus === EMAIL_STATUSES.FAILURE) {
    return (
      <Container>
        <h2>Error Sending Message</h2>
        <span className={"text-purple-200 font-semibold tracking-wide"}>
          An error was encountered while sending your message. You can still
          reach me at scott@scottbenton.dev.
        </span>
      </Container>
    );
  } else {
    return (
      <Container>
        <h2>Send Me a Message</h2>
        <span className={"text-purple-200 font-semibold tracking-wide"}>
          I'll get back to you shortly!
        </span>
        <form onSubmit={onSubmit}>
          <TextInput
            id={"name"}
            label={"Name"}
            required
            helperText={errors.name}
          />
          <TextInput
            id={"email"}
            label={"Email Address"}
            required
            helperText={errors.email}
          />
          <TextArea
            id={"message"}
            label={"Message"}
            required
            rows={8}
            helperText={errors.message}
          />
          <div className={"flex justify-end"}>
            <button
              className={clsx(
                "btn btn-filled btn-filled-white btn-animate",
                emailSendStatus === EMAIL_STATUSES.LOADING
                  ? "bg-gray-400 text-gray-900 cursor-wait"
                  : ""
              )}
              type={"submit"}
              disabled={emailSendStatus === EMAIL_STATUSES.LOADING}
            >
              {getButtonText()}
            </button>
          </div>
        </form>
      </Container>
    );
  }
};
