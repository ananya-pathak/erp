import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Section = {
  title: string;
  content: string;
};

const sections: Section[] = [
  {
    title: "1. Electronic Record and Legal Framework",
    content:
      "This Privacy Policy describes how ANQUEST collects, uses, and protects your information when you use our services.",
  },
  {
    title: "2. Who We Are",
    content:
      "ANQUEST is a modern ad-tech platform designed to help advertisers and publishers scale performance globally.",
  },
  {
    title: "3. Scope of the Policy",
    content:
      "This policy applies to all users interacting with our website, platform, and advertising ecosystem.",
  },
  {
    title: "4. Information We Collect",
    content:
      "We may collect personal information including name, email address, IP address, device information, and usage analytics.",
  },
  {
    title: "5. How We Use Your Data",
    content:
      "Your data helps us operate our services, improve performance, ensure security, and communicate important updates.",
  },
  {
    title: "6. Data Security",
    content:
      "We implement strong security measures including encryption, secure servers, and monitoring systems.",
  },
  {
    title: "7. Data Sharing",
    content:
      "We do not sell your personal data. Trusted partners may process data only to provide infrastructure services.",
  },
  {
    title: "8. Updates to Policy",
    content:
      "We may update this Privacy Policy periodically to reflect service or legal changes.",
  },
];

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-300 min-h-screen py-24 px-6">

      {/* Header */}

      <div className="max-w-4xl mx-auto text-center mb-16 pt-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Privacy <span className="text-gradient">Policy</span>
        </h1>

        <p className="text-slate-600 dark:text-slate-400">
          Learn how ANQUEST collects, uses, and protects your personal data.
        </p>
      </div>

      {/* Layout */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

        {/* Accordion Content */}

        <div className="lg:col-span-2 space-y-4">

          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm shadow-slate-200/80 dark:bg-slate-900 dark:border-slate-800"
            >

              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-slate-900 dark:text-white">
                  {section.title}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">
                  {section.content}
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Sidebar Navigation */}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 h-fit sticky top-24 shadow-sm shadow-slate-200/80 dark:bg-slate-900 dark:border-slate-800">

          <h3 className="text-slate-900 dark:text-white font-semibold mb-6">
            Quick Navigation
          </h3>

          <ul className="space-y-3 text-sm">

            {sections.map((section, index) => (
              <li
                key={index}
                onClick={() => setOpenIndex(index)}
                className="cursor-pointer text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition"
              >
                {section.title}
              </li>
            ))}

          </ul>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;