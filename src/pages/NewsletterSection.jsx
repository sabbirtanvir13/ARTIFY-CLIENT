import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://artify-server-ecru.vercel.app/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setMessage(data.success ? "Subscribed successfully!" : data.message);
    setEmail("");
  };

  return (
    <section className="py-20  text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Subscribe to Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center max-w-xl mx-auto gap-4">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="p-3 rounded-md flex-1 border border-gray-300 dark:border-gray-700"
        />
        <button className="bg-indigo-700 text-white px-6 py-3 rounded-md hover:bg-indigo-800 transition">
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-gray-700 dark:text-gray-300">{message}</p>}
    </section>
  );
}
