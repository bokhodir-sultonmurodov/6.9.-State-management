import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-600 text-gray-300 py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-sm mb-4 md:mb-0">
         2025 FakeApi.
        </p>

        <div className="flex gap-6 text-xl">
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition">
            <FaYoutube />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default React.memo(Footer);
