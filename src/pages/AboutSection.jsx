import { FaPaintBrush, FaUsers, FaHeart } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-base-100 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          

           <div>
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f"
            alt="About Art"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </div>




        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-lime-500">Artify</span>
          </h2>

          <p className="text-gray-600 mb-6">
            Artify is a creative platform where artists and art lovers come together.
            We showcase unique digital artworks, connect creators with audiences,
            and celebrate creativity.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaPaintBrush className="text-lime-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Creative Artworks</h4>
                <p className="text-gray-500">
                  Discover original and inspiring artworks from talented artists.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaUsers className="text-lime-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Artist Community</h4>
                <p className="text-gray-500">
                  Join a growing community of passionate creators and collectors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaHeart className="text-lime-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Made with Passion</h4>
                <p className="text-gray-500">
                  Built with love to support creativity and artistic expression.
                </p>
              </div>
            </div>
          </div>
        </div>

    
       
      </div>
    </section>
  );
};

export default AboutSection;
