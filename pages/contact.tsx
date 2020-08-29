import React, { FormEvent } from "react";
import ContactMe from "@/content/ContactMe.md";
import { TextInput, TextArea } from "@/components/controls/TextInput";
import clsx from "clsx";
import { ContactForm } from "@/components/ContactForm";

const Contact: React.FC = (props) => {
  return (
    <>
      <h1>Contact Me</h1>
      <div className={"px-4 max-w-screen-sm mx-auto"}>
        <ContactMe />
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
