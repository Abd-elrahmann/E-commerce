import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 w-full text-gray-200 py-16 px-4 text-center mt-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="flex-1 w-60 mx-4 mb-8 bg-gray-800 p-6 rounded-lg hover:transform hover:translate-y-1 hover:bg-gray-700 transition-transform">
                    <h3 className="text-xl font-bold mb-4 text-gray-200 border-b-2 border-blue-600 pb-2 uppercase">Company</h3>
                    <ul className="list-none p-0 m-0">
                        <li className="mb-4 text-lg">
                            <a href="#about" className="text-gray-400 hover:text-white hover:underline">About Us</a>
                        </li>
                        <li className="mb-4 text-lg">
                            <a href="#careers" className="text-gray-400 hover:text-white hover:underline">Careers</a>
                        </li>
                        <li className="mb-4 text-lg">
                            <a href="#blog" className="text-gray-400 hover:text-white hover:underline">Blog</a>
                        </li>
                        <li className="mb-4 text-lg">
                            <a href="#contact" className="text-gray-400 hover:text-white hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 w-60 mx-4 mb-8 bg-gray-800 p-6 rounded-lg hover:transform hover:translate-y-1 hover:bg-gray-700 transition-transform">
                    <h3 className="text-xl font-bold mb-4 text-gray-200 border-b-2 border-blue-600 pb-2 uppercase">Support</h3>
                    <ul className="list-none p-0 m-0">
                        <li className="mb-4 text-lg">
                            <a href="#help" className="text-gray-400 hover:text-white hover:underline">Help Center</a>
                        </li>
                        <li className="mb-4 text-lg">
                            <a href="#faq" className="text-gray-400 hover:text-white hover:underline">FAQ</a>
                        </li>
                        <li className="mb-4 text-lg">
                            <a href="#terms" className="text-gray-400 hover:text-white hover:underline">Terms of Service</a>
                        </li>
                        <li className="mb-4 text-lg">
                            <a href="#privacy" className="text-gray-400 hover:text-white hover:underline">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 w-60 mx-4 mb-8 bg-gray-800 p-6 rounded-lg hover:transform hover:translate-y-1 hover:bg-gray-700 transition-transform">
                    <h3 className="text-xl font-bold mb-4 text-gray-200 border-b-2 border-blue-600 pb-2 uppercase">Follow Us</h3>
                    <ul className="list-none p-0 m-0">
                        <li className="mb-4 text-lg">
                            <a href="#facebook" className="text-gray-400 hover:text-white hover:underline">Facebook</a>
                        </li>
                        <li className="mb-4 text-lg">
                            <a href="#twitter" className="text-gray-400 hover:text-white hover:underline">Twitter</a>
                        </li>
                        <li className="mb-4 text-lg">
                            <a href="#instagram" className="text-gray-400 hover:text-white hover:underline">Instagram</a>
                        </li>
                        <li className="mb-4 text-lg">
                            <a href="#linkedin" className="text-gray-400 hover:text-white hover:underline">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 w-60 mx-4 mb-8 bg-gray-800 p-6 rounded-lg hover:transform hover:translate-y-1 hover:bg-gray-700 transition-transform">
                    <h3 className="text-xl font-bold mb-4 text-gray-200 border-b-2 border-blue-600 pb-2 uppercase">Contact Us</h3>
                    <ul className="list-none p-0 m-0">
                        <li className="mb-4 text-lg">
                            <a href="mailto:contact@company.com" className="text-gray-400 hover:text-white hover:underline">contact@company.com</a>
                        </li>
                        <li className="mb-4 text-lg">
                            <a href="tel:+1234567890" className="text-gray-400 hover:text-white hover:underline">+1 (234) 567-890</a>
                        </li>
                        <li className="mb-4 text-lg text-gray-400">
                            <p>123 Company Address, City, Country</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-700 pt-5">
                <p className="text-gray-400 text-base relative">
                    &copy; 2024 Your Company. All rights reserved.
                    <span className="absolute bottom-0 left-1/2 w-24 h-1 transform -translate-x-1/2"></span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
