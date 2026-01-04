import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact <span className="text-lime-500">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <FaEnvelope className="text-lime-500 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-lg">Email</h4>
            <p className="text-gray-500">support@artify.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <FaPhoneAlt className="text-lime-500 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-lg">Phone</h4>
            <p className="text-gray-500">+880 1234-567890</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <FaMapMarkerAlt className="text-lime-500 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-lg">Location</h4>
            <p className="text-gray-500">Dhaka, Bangladesh</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
