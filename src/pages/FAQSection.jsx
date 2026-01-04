import { useEffect, useState } from "react";

export default function FAQSection() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/faqs")
      .then(res => res.json())
      .then(data => setFaqs(data));
  }, []);

  return (
    <section className="py-20 ">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">FAQ</h2>
      <div className="max-w-3xl mx-auto space-y-4 px-4">
        {faqs.map((f, i) => (
          <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{f.question}</h4>
            <p className="text-gray-700 dark:text-gray-200 mt-1">{f.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
 