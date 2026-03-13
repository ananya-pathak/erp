import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

/* ---------- TYPES ---------- */

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
};

/* ---------- COMPONENT ---------- */

export default function ContactPage() {

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});

  /* ---------- HANDLE CHANGE ---------- */

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  /* ---------- VALIDATION ---------- */

  const validate = () => {
    let newErrors: FormErrors = {};
const nameRegex = /^[A-Za-z\s]+$/;

if (!form.name.trim()) {
  newErrors.name = "Name is required";
} else if (!nameRegex.test(form.name)) {
  newErrors.name = "Name can only contain letters";
}

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* ---------- SUBMIT ---------- */

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", form);

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-[#050505] dark:text-slate-300">


      <div className="pt-24">

        {/* HERO */}
        <section className="py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white"
          >
            Get in <span className="text-blue-600">Touch</span>
          </motion.h1>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have questions about our ad network or need a custom solution?
            Our team is here to help you scale.
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-16 bg-slate-50 dark:bg-[#080808]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

            {/* CONTACT INFO */}
            <div>
              <h2 className="text-2xl font-black mb-8 text-slate-900 dark:text-white">
                Contact Information
              </h2>

              <div className="space-y-8">

                <div className="flex gap-6">
                  <Mail className="text-blue-500" />
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500">
                      Email
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white">
              <a href="mailto:info@anquestmedia.com">info@anquestmedia.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <Phone className="text-indigo-500" />
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500">
                      Phone
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white">
              <a href="tel:+917678279151">+91 76782 79151</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <MapPin className="text-emerald-500" />
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500">
                      Address
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white">
                      431, 4th Floor, Orbit Plaza <br />
                      Crossing Republik, Ghaziabad <br />
                      India, 201016
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="p-8 rounded-[40px] bg-white border border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/5">

              <form className="space-y-6" onSubmit={handleSubmit}>

                <div className="grid md:grid-cols-2 gap-6">

                  {/* NAME */}
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500">
                      Full Name
                    </label>

                    <input
  name="name"
  value={form.name}
  type="text"
  onChange={handleChange}
  onKeyDown={(e) => {
    if (!/[a-zA-Z\s]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  }}
  placeholder="Your Name"
  className="w-full mt-2 px-6 py-4 border border-slate-200 rounded-2xl outline-none focus:border-blue-600 dark:bg-white/5 dark:border-white/10 dark:text-white"
/>

                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full mt-2 px-6 py-4 border border-slate-200 rounded-2xl outline-none focus:border-blue-600 dark:bg-white/5 dark:border-white/10 dark:text-white"
                    />

                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                </div>

                {/* SUBJECT */}
                <div>
                  <label className="text-xs font-bold uppercase text-slate-500">
                    Subject
                  </label>

                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full mt-2 px-6 py-4 border border-slate-200 rounded-2xl outline-none focus:border-blue-600 dark:bg-white/5 dark:border-white/10 dark:text-white"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-xs font-bold uppercase text-slate-500">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="w-full mt-2 px-6 py-4 border border-slate-200 rounded-2xl outline-none focus:border-blue-600 dark:bg-white/5 dark:border-white/10 dark:text-white"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-500 transition-all text-sm shadow-lg shadow-blue-600/30"
                >
                  Send Message
                  <Send size={18} />
                </button>

              </form>

            </div>

          </div>
        </section>

      </div>


    </div>
  );
}