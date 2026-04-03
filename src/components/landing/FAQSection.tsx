import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const faqs = [
  {
    question: "How does doorstep car wash work?",
    answer:
      "We bring our fully equipped mobile service van to your location and clean your car in your parking area. You don’t need to visit a car wash center or wait in queues. Just book a slot, and we take care of the rest.",
  },
  {
    question: "Do you need water or electricity from my home?",
    answer:
      "No. Our service van carries the required equipment and uses efficient cleaning methods. In most cases, we do not require water or electricity from your home.",
  },
  {
    question: "How much time does it take to clean one car?",
    answer:
      "• Basic Exterior Clean: 20–25 minutes\n• Complete Care: 40–50 minutes\n• Premium Deep Clean: 70–90 minutes\nActual time may vary based on vehicle size and condition.",
  },
  {
    question: "Is your cleaning safe for my car’s paint and interiors?",
    answer:
      "Yes. We use professional-grade, car-safe products and trained methods that protect your paint, interiors, and sensitive parts. Your vehicle is in safe hands with XPRESS WASH.",
  },
  {
    question: "Which areas do you service?",
    answer:
      "We currently offer doorstep services across selected areas in Bangalore. Please contact us to check availability in your location.",
  },
  {
    question: "Do you offer monthly or subscription plans?",
    answer:
      "Yes. We offer discounted monthly plans for individual homes and apartments. Monthly plans give you priority booking and better value compared to single washes.",
  },
  {
    question: "How can I book a service?",
    answer:
      "You can book by calling or WhatsApping us at 8123911197. Online booking through our website will be available soon.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, cash, and bank transfers. GST invoice will be provided for every service.",
  },
  {
    question: "What if I need to reschedule or cancel my booking?",
    answer:
      "You can reschedule or cancel your booking by informing us at least a few hours in advance. We’ll do our best to accommodate your preferred time slot.",
  },
  {
    question: "Is there any additional charge?",
    answer:
      "Our pricing is transparent. Any additional services (like deep interior cleaning, engine bay cleaning, or special treatments) will be discussed and confirmed with you before starting the work.",
  },
  {
    question: "Do you clean SUVs and premium cars?",
    answer:
      "Yes, we service hatchbacks, sedans, SUVs, and premium vehicles. Pricing may vary based on vehicle size and service package.",
  },
  {
    question: "Is your service eco-friendly?",
    answer:
      "We use water-efficient cleaning techniques and safe products that reduce water wastage while still delivering a high-quality clean.",
  },
];

export function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  const toggleFaq = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions (FAQ)</h2>
      <div className="space-y-4">
        {visibleFaqs.map((faq, idx) => (
          <div key={idx} className="border rounded-lg bg-white/80">
            <button
              className="w-full text-left px-4 py-3 font-medium focus:outline-none flex justify-between items-center"
              onClick={() => toggleFaq(idx)}
            >
              <span>{faq.question}</span>
              <span>{openIndexes.includes(idx) ? "-" : "+"}</span>
            </button>
            {openIndexes.includes(idx) && (
              <div className="px-4 pb-4 text-gray-700 whitespace-pre-line">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      {!showAll && faqs.length > 5 && (
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 text-white rounded transition"
            style={{ backgroundColor: '#4169E1', border: 'none' }}
            onClick={() => setShowAll(true)}
          >
            Show More
          </button>
        </div>
      )}
      {showAll && faqs.length > 5 && (
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 text-white rounded transition"
            style={{ backgroundColor: '#4169E1', border: 'none' }}
            onClick={() => {
              setShowAll(false);
              setOpenIndexes([]);
            }}
          >
            Show Less
          </button>
        </div>
      )}
      <div className="mt-10 text-center text-base">
        Still have questions?<br />
        <div className="flex justify-center items-center gap-2 mt-2">
          <span>
            Call us at
            <a href="tel:8123911197" className="text-primary font-semibold ml-1">8123911197</a>
            or message us on
          </span>
          <a
            href="https://wa.me/918123911197"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-500 font-semibold"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </a>
          <span>. We’re happy to help!</span>
        </div>
      </div>
      <div className="mt-3 flex justify-center items-center gap-2">
        <FaInstagram className="text-xl text-pink-500" />
        <a
          href="https://www.instagram.com/xpresswash_blr/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-pink-500 hover:underline"
        >
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
}
