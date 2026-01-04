import { useEffect, useState } from "react";
import Container from "./Container";

export default function StatsSection() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/stats")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  return (
    <Container>
    <section className="py-20 bg-indigo-400 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 
                       bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600"
          >
            <h3 className="text-3xl font-extrabold text-gray-100">
              {item.value}
            </h3>
            <p className="mt-2 text-gray-200">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
    </Container>
  );
}
