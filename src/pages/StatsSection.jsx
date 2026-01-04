import Container from "./Container";

export default function StatsSection() {
  return (
    <Container>
      <section className="py-16 bg-base-200">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-bold text-center mb-10">
            Our Statistics
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-3xl font-bold text-indigo-600">120+</h3>
              <p className="mt-2 text-gray-600">Total Artworks</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-3xl font-bold text-indigo-600">85+</h3>
              <p className="mt-2 text-gray-600">Active Users</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-3xl font-bold text-indigo-600">230+</h3>
              <p className="mt-2 text-gray-600">Favorites</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-3xl font-bold text-indigo-600">40+</h3>
              <p className="mt-2 text-gray-600">Artists</p>
            </div>

          </div>
        </div>
      </section>
    </Container>
  );
}
