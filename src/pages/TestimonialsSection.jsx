import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/testimonials")
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  return (
    <section className="py-20 ">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-100 dark:text-black">Testimonials</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-center">
            <p className="text-gray-700 dark:text-gray-200">"{t.message}"</p>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mt-2">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
