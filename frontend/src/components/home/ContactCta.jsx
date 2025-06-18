
import { Link } from 'react-router-dom';

const ContactCta = () => {
  return (
    <section className="bg-gradient-to-r from-sapphire-800 to-blue-600 text-white py-20">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto">
            Let's discuss how we can help your business grow with our tailored IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-sapphire-700 hover:bg-gray-100">
              Contact Us
            </Link>
            <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-sapphire-700">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;