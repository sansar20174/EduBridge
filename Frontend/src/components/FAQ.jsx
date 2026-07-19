import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Create an account, browse the courses, and click the Enroll button to start learning.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. After successfully completing a course, you'll receive a certificate of completion.",
  },
  {
    question: "Can I access courses on mobile?",
    answer:
      "Yes. EduBridge is fully responsive and works on desktops, tablets, and smartphones.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No. We offer beginner, intermediate, and advanced courses suitable for all learners.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="section-title">
        <p className="section-label">FAQ</p>

        <h2>Frequently Asked Questions</h2>

        <p>
          Find answers to the questions students ask most often.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              {activeIndex === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;