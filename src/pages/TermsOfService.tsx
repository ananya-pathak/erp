import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Section = {
  title: string;
  content: string;
};

const sections: Section[] = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using ANQUEST services, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, you should not use our platform.",
  },
  {
    title: "2. Description of Services",
    content:
      "ANQUEST provides digital advertising and traffic monetization solutions designed to help advertisers and publishers scale their businesses globally.",
  },
  {
    title: "3. User Responsibilities",
    content:
      "Users agree to use the platform responsibly and in compliance with all applicable laws and regulations. Any misuse of the platform may result in suspension or termination.",
  },
  {
    title: "4. Account Registration",
    content:
      "To access certain features, users may need to register an account and provide accurate and complete information.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "All content, trademarks, software, and technology on the ANQUEST platform are owned by ANQUEST and protected by applicable intellectual property laws.",
  },
  {
    title: "6. Prohibited Activities",
    content:
      "Users must not engage in fraudulent traffic generation, malicious activities, or any activity that could harm the integrity of the platform.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "ANQUEST shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.",
  },
  {
    title: "8. Termination",
    content:
      "We reserve the right to suspend or terminate accounts that violate these terms or misuse the platform.",
  },
  {
    title: "9. Changes to Terms",
    content:
      "ANQUEST may update these Terms of Service from time to time. Continued use of the platform constitutes acceptance of the updated terms.",
  },
  {
    title: "10. Contact Information",
    content:
      "If you have questions regarding these Terms of Service, please contact us at info@anquestmedia.com.",
  },
];

const TermsOfService = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-300 min-h-screen py-24 px-6">

      {/* Header */}

      <div className="max-w-4xl mx-auto text-center mb-16 pt-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Terms of <span className="text-gradient">Service</span>
        </h1>

        <p className="text-slate-600 dark:text-slate-400">
          These terms govern your use of the ANQUEST platform and services.
        </p>
      </div>

      {/* Layout */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

        {/* Terms Content */}

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

export default TermsOfService;