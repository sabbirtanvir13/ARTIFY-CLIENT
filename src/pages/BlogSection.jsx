import { useEffect, useState } from "react";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-950">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Blog</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {blogs.map((b, i) => (
          <div key={i} className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800">
            <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">{b.title}</h3>
            <p className="text-gray-700 dark:text-gray-200 mt-2">{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
