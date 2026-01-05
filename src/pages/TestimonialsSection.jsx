import { useEffect, useState } from "react";
import Container from "./Container";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/testimonials`)
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  return (
    <Container>
    <section className="py-20 ">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-400">Testimonials</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 rounded-xl shadow-lg bg-white text-center">
            <p className="text-black">"{t.message}"</p>
            <h4 className="font-bold text-black mt-2">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
    </Container>
  );
}
