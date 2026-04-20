import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";

const faqs = [
  {
    question: "How does doorstep car wash work?",
    answer:
      "We bring our fully equipped mobile service van to your location and clean your car in your parking area.",
  },
  {
    question: "Do you need water or electricity from my home?",
    answer: "No. Our service van carries all required equipment.",
  },
  {
    question: "How much time does it take?",
    answer:
      "• Basic: 20–25 mins\n• Complete: 40–50 mins\n• Premium: 70–90 mins",
  },
  {
    question: "Is it safe for my car?",
    answer: "Yes. We use professional-grade, car-safe products.",
  },
  {
    question: "Which areas do you service?",
    answer: "We serve selected areas across Bangalore.",
  },
  {
    question: "Do you offer subscriptions?",
    answer: "Yes. Monthly plans offer better pricing and priority service.",
  },
];

export function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  const toggleFaq = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx],
    );
  };

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto" id="faq-section">
      {/* FAQ */}
      <h2 className="text-2xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {visibleFaqs.map((faq, idx) => (
          <div key={idx} className="border rounded-lg bg-white">
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
            >
              <span>{faq.question}</span>
              <span>{openIndexes.includes(idx) ? "−" : "+"}</span>
            </button>

            {openIndexes.includes(idx) && (
              <div className="px-4 pb-4 text-gray-600 text-sm whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show More */}
      <div className="text-center mt-6">
        <button
          onClick={() => {
            setShowAll(!showAll);
            setOpenIndexes([]);
          }}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* 🔥 CONNECT SECTION (FIXED) */}
      <div className="mt-14 pt-10 border-t text-center">
        {/* Heading */}
        <h3 className="text-xl font-semibold text-gray-900 mb-8">
          Stay Connected With Us
        </h3>

        {/* Icons */}
        <div className="flex justify-center items-center gap-10 sm:gap-14">
          {/* Call */}
          <a
            href="tel:7795070606"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-200 group-hover:bg-blue-50 transition">
              <FaPhoneAlt className="text-blue-600 text-lg" />
            </div>
            <span className="text-xs font-medium text-gray-700">Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/7795070606"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-200 group-hover:bg-blue-50 transition">
              <FaWhatsapp className="text-blue-600 text-lg" />
            </div>
            <span className="text-xs font-medium text-gray-700">WhatsApp</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/xpresswash_blr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-200 group-hover:bg-blue-50 transition">
              <FaInstagram className="text-blue-600 text-lg" />
            </div>
            <span className="text-xs font-medium text-gray-700">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
