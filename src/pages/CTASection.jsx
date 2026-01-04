import Container from "./Container";

export default function CTASection() {
  return (
    <Container>
    <section className="py-20 my-6 bg-indigo-700 text-gray-100 text-center rounded-lg mx-4 md:mx-20">
      <h2 className="text-4xl font-bold mb-4">Join Artify Today!</h2>
      <p className="mb-6">Explore and share amazing artworks.</p>
      <a href="/signup" className="bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
        Get Started
      </a>
    </section>
    </Container>
  );
}
