"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane, FaCheck } from "react-icons/fa";
import Input from "../Input/Input";
import TextArea from "../Input/TextArea";

interface ContactErrors {
  name: string | null;
  surname: string | null;
  email: string | null;
  message: string | null;
}

type SendingStatus = "sending" | "sent" | "idle";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

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

  const [sendingStatus, setSendingStatus] = useState<SendingStatus>("idle");

  const handleNameChange = (newVal: string) => setName(newVal);
  const handleSurnameChange = (newVal: string) => setSurname(newVal);
  const handleEmailChange = (newVal: string) => setEmail(newVal);
  const handleMessageChange = (newVal: string) => setMessage(newVal);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (sendingStatus !== "idle") return;
    // Validate the form
    let validationErrors: ContactErrors = {
      name: null,
      surname: null,
      email: null,
      message: null,
    };

    if (!name.length) {
      validationErrors.name = "Please provide your first name";
    }
    if (!surname.length) {
      validationErrors.surname = "Please provide your surname";
    }
    if (!email.length || !emailRegex.test(email)) {
      validationErrors.email = "Please provide a valid e-mail";
    }
    if (!message.length) {
      validationErrors.message = "Please write your message";
    }

    setErrors(validationErrors);
    // Means that there's an error
    if (Object.values(validationErrors).some((e) => !!e)) {
      return;
    }

    setSendingStatus("sending");
    send();
  };

  const send = async () => {
    const formData = {
      "form-name": "arciiix-contact",
      name,
      surname,
      email,
      message,
    };

    const request = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (request.status === 200) {
      setSendingStatus("sent");

      setTimeout(() => {
        setName("");
        setSurname("");
        setEmail("");
        setMessage("");
        setSendingStatus("idle");
      }, 5000);
    }
  };

  const socials = [
    { Icon: FaGithub, href: "https://github.com/Arciiix", label: "GitHub" },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/arciiix/",
      label: "LinkedIn",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#08080f] px-6 py-24 md:px-16 lg:px-24">
      {/* Subtle ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full opacity-15 blur-3xl"
        style={{ background: "#2dd4bf" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-10 h-[28rem] w-[28rem] rounded-full opacity-10 blur-3xl"
        style={{ background: "#a179dc" }}
      />

      <div className="relative z-10 flex min-h-[calc(100vh-12rem)] items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left column - heading */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="flex flex-col items-start gap-6"
          >
            <span className="mb-2 text-base font-light uppercase tracking-[0.45em] text-teal-400">
              Contact
            </span>
            <h2 className="section-heading text-white">
              Say <span className="text-teal-400">hello!</span>
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-white/70">
              Have an idea to discuss, a project to offer, or just want to say
              hi? My inbox is always open - I&apos;ll get back to you as soon as
              I can.
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <span className="text-sm text-white/50">or reach me on</span>
              <div className="flex gap-2">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:text-teal-300"
                  >
                    <Icon className="text-2xl" />
                    <span className="text-sm font-semibold">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - form card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0.15}
          >
            <form
              className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c111c] p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] md:p-9"
              data-netlify="true"
              name="arciiix-contact"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent"
              />

              <div className="relative grid gap-x-5 sm:grid-cols-2">
                <Input
                  name="name"
                  label="Name"
                  value={name}
                  onChange={handleNameChange}
                  error={errors.name}
                />
                <Input
                  name="surname"
                  label="Surname"
                  value={surname}
                  onChange={handleSurnameChange}
                  error={errors.surname}
                />
              </div>

              <Input
                name="email"
                label="E-mail"
                type="email"
                value={email}
                onChange={handleEmailChange}
                error={errors.email}
              />
              <TextArea
                name="message"
                label="Message"
                value={message}
                onChange={handleMessageChange}
                error={errors.message}
              />

              <button
                className="group relative mt-3 flex w-full items-center justify-center gap-3 rounded-xl px-9 py-4 text-base font-extrabold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
                style={{
                  backgroundColor: "#2dd4bf",
                  color: "#042f2e",
                  boxShadow: "0 14px 44px -12px rgba(45,212,191,0.7)",
                }}
                type={"submit"}
                disabled={sendingStatus !== "idle"}
              >
                {sendingStatus === "sending" ? (
                  <>sending...</>
                ) : sendingStatus === "sent" ? (
                  <>
                    <FaCheck />
                    thank you!
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    send message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
