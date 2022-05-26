import React from "react";
import { ContactForm } from "components/ContactForm";
import { Layout } from "components/layout/Layout";
import { Card } from "components/Card";
import MailIcon from "@heroicons/react/solid/MailIcon";

const Contact: React.FC = (props) => {
  return (
    <Layout title={"Contact Me"} subtitle={"I'll get back to you shortly"}>
      <Card className={"w-full max-w-screen-sm mx-auto px-4 mt-4"}>
        <h2>Email Me</h2>

        <div className={"mt-2"}>
          <div
            className={
              "bg-primary-700 text-white rounded-xl p-4 inline-flex items-center"
            }
          >
            <div className={"p-2 bg-primary-200 text-primary-800 rounded-full"}>
              <MailIcon className={"w-5 h-5"} />
            </div>
            <a
              href={"mailto:scott@scottbenton.dev"}
              className={"font-semibold hover:underline ml-4 mr-2"}
            >
              scott@scottbenton.dev
            </a>
          </div>
        </div>

        <div className={"flex items-center my-4"}>
          <hr className={"flex-grow"} />
          <span
            className={
              "w-10 h-10 flex items-center justify-center bg-primary-200 rounded-full mx-4 uppercase text-primary-700 font-semibold"
            }
          >
            Or
          </span>
          <hr className={"flex-grow"} />
        </div>
        <h2>Send a Message</h2>
        <ContactForm />
      </Card>
    </Layout>
  );
};

export default Contact;
