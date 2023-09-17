"use client";
import Divider from "../Divider/Divider";
import Lottie from "lottie-react";
import contactAnimation from "./contactAnimation.json";
import Input from "../Input/Input";
import { useRef, useState } from "react";
import TextArea from "../Input/TextArea";
import Socials from "../Socials/Socials";

interface ContactErrors {
  name: string | null;
  surname: string | null;
  email: string | null;
  message: string | null;
}

type SendingStatus = "sending" | "sent" | "idle";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<ContactErrors>({
    name: null,
    surname: null,
    email: null,
    message: null,
  });

  const handleNameChange = (newVal: string) => setName(newVal);
  const handleSurnameChange = (newVal: string) => setSurname(newVal);
  const handleEmailChange = (newVal: string) => setEmail(newVal);
  const handleMessageChange = (newVal: string) => setMessage(newVal);

  const [sendingStatus, setSendingStatus] = useState<SendingStatus>("idle");

  const handleSubmit = () => {
    if (sendingStatus !== "idle") return;
    // Validate the form
    let errors: ContactErrors = {
      name: null,
      surname: null,
      email: null,
      message: null,
    };

    if (!name.length) {
      errors.name = "Please provide your first name";
    }
    if (!surname.length) {
      errors.surname = "Please provide your surname";
    }
    if (!email.length || !emailRegex.test(email)) {
      errors.email = "Please provide a valid e-mail";
    }
    if (!message.length) {
      errors.message = "Please write your message";
    }

    setErrors(errors);
    // Means that there's an error
    if (Object.values(errors).some((e) => !!e)) {
      return;
    }

    setSendingStatus("sending");
    send();
  };

  const send = async () => {
    // TODO: Implement the send logic
    setSendingStatus("sent");

    setTimeout(() => {
      setName("");
      setSurname("");
      setEmail("");
      setMessage("");
      setSendingStatus("idle");
    }, 5000);
  };

  return (
    <div className="flex p-3 m-4 flex-col lg:flex-row">
      <Lottie
        className="flex-1 w-96 lg:w-auto"
        animationData={contactAnimation}
        loop={true}
      />
      <div className="flex-1 flex flex-col gap-8">
        <span className="text-6xl text-teal-100 font-bold">👋 Say hello!</span>
        <Input
          label="Name"
          value={name}
          onChange={handleNameChange}
          error={errors.name}
        />
        <Input
          label="Surname"
          value={surname}
          onChange={handleSurnameChange}
          error={errors.surname}
        />
        <Input
          label="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={errors.email}
        />
        <TextArea
          label="Message"
          value={message}
          onChange={handleMessageChange}
          error={errors.message}
        />
        <button
          className="text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-teal-900 duration-500 border-2 m-3 rounded-3xl p-3 text-2xl font-extrabold uppercase transition-all text-center flex items-center justify-center cursor-pointer"
          onClick={handleSubmit}
        >
          {sendingStatus === "sending"
            ? "sending..."
            : sendingStatus === "sent"
            ? "thank you!"
            : "send"}
        </button>
        <div className="flex flex-col items-center gap-3">
          <span className="text-teal-100">or reach me on</span>
          <Socials />
        </div>
      </div>
    </div>
  );
}
