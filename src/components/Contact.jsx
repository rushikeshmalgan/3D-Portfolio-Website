import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.service_9lechlf,
        import.meta.env.template_rln1o2s,
        {
          from_name: form.name,
          to_name: "Rushikesh Malgan",
          from_email: form.email,
          to_email: "malganrushikesh02@gmail.com",
          message: form.message,
        },
        import.meta.env["VITE_XOJJWGJ_80EJIDNLM"]
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl"
        style={{ background: "var(--bg-card)", border: "1px solid rgba(47,156,149,0.25)" }}
      >
        <p className={styles.sectionSubText} style={{ color: "var(--accent-secondary)" }}>Get in touch</p>
        <h3 className={styles.sectionHeadText} style={{ color: "var(--text-primary)" }}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className="font-medium mb-4" style={{ color: "var(--text-primary)" }}>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="py-4 px-6 rounded-lg outline-none border font-medium"
              style={{
                background: "var(--bg-secondary)",
                color: "var(--text-primary)",
                borderColor: "rgba(47,156,149,0.3)",
              }}
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4" style={{ color: "var(--text-primary)" }}>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="malganrushikesh02@gmail.com"
              className="py-4 px-6 rounded-lg outline-none border font-medium"
              style={{
                background: "var(--bg-secondary)",
                color: "var(--text-primary)",
                borderColor: "rgba(47,156,149,0.3)",
              }}
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4" style={{ color: "var(--text-primary)" }}>Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="py-4 px-6 rounded-lg outline-none border font-medium"
              style={{
                background: "var(--bg-secondary)",
                color: "var(--text-primary)",
                borderColor: "rgba(47,156,149,0.3)",
              }}
            />
          </label>

          <button
            type="submit"
            id="contact-submit-btn"
            className="py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md transition-all duration-200 hover:scale-105"
            style={{
              background: "var(--accent-primary)",
              color: "var(--bg-primary)",
              boxShadow: "0 4px 20px rgba(217,203,146,0.35)",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");