import React from 'react';
import Staff1 from "../../../Images/a.webp";
import Staff2 from "../../../Images/b.webp";
import Staff3 from "../../../Images/c.webp";

const CompanyPage = () => {
  return (
    <div>
      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            We are a team of passionate professionals dedicated to delivering high-quality products and services.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="w-full md:w-1/3 p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:bg-blue-100 hover:shadow-lg">
              <div className="w-24 h-24 mb-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                {/* Insert Service Icon */}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 ">Service One</h3>
              <p className="text-lg text-gray-600">
                Description of service one, explaining what it offers.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:bg-blue-100 hover:shadow-lg">
              <div className="w-24 h-24 mb-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                {/* Insert Service Icon */}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Service Two</h3>
              <p className="text-lg text-gray-600">
                Description of service two, explaining what it offers.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:bg-blue-100 hover:shadow-lg">
              <div className="w-24 h-24 mb-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                {/* Insert Service Icon */}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Service Three</h3>
              <p className="text-lg text-gray-600">
                Description of service three, explaining what it offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={Staff1}
                  alt="Team Member 1"
                  className="w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
                  <p className="text-gray-600 mb-2">CEO</p>
                  <p className="text-gray-600">
                    John is the visionary behind our company, with over 20 years of experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={Staff2}
                  alt="Team Member 2"
                  className="w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold mb-2">Jane Smith</h3>
                  <p className="text-gray-600 mb-2">CTO</p>
                  <p className="text-gray-600">
                    Jane leads our tech team, ensuring our technology is cutting-edge.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={Staff3}
                  alt="Team Member 3"
                  className="w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold mb-2">Emily Johnson</h3>
                  <p className="text-gray-600 mb-2">COO</p>
                  <p className="text-gray-600">
                    Emily ensures our operations run smoothly and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            Have any questions? Feel free to reach out to us!
          </p>
          <form className="max-w-lg mx-auto">
            <input
              type="text"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
            <textarea
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
              placeholder="Your Message"
              rows="5"
            ></textarea>
            <button className="bg-blue-500 text-white py-4 px-8 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CompanyPage;
