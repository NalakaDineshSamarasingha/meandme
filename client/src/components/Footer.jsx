import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-8">
      <div className="container mx-auto px-6 sm:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          {/* Main Section */}
          <div className="flex flex-col text-center sm:text-left">
            <p className="text-lg font-semibold">See yah</p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center mt-4 sm:mt-0">
            <a
              href="https://www.linkedin.com/in/nalaka-dinesh-b53173271/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-gray-400 transition duration-300"
            >
              LinkedIn
              <FaLinkedin className="ml-2" />
            </a>
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-gray-400 transition duration-300"
            >
              Resume
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm opacity-70 mt-6">
          <p>© {new Date().getFullYear()} Nalaka Dinesh. All Rights Reserved.</p>
          <p className="mt-2">Made with love and Hot Coffee (50% sugar, 50% love).</p>
          <p className="mt-4 text-xs opacity-50">Last updated by Nalaka on December 15, 2024, 5:51 PM IST</p>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center mt-6 gap-6">
          <a href="https://www.linkedin.com/in/nalaka-dinesh-b53173271/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
