import { useEffect, useState } from "react";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs`)
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <section className="py-20 ">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-400">Blog</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {blogs.map((b, i) => (
          <div key={i} className="p-6 rounded-xl shadow-lg bg-white ">
            <h3 className="font-bold text-xl text-black">{b.title}</h3>
            <p className="text-gray-700 text-black mt-2">{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


