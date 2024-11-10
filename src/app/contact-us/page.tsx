'use client';
import { useState } from 'react';

const Contact = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Message:', message);
    // Reset the form fields after submission if needed
    setName('');
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-black text-white p-4">
      <h1 className="text-4xl font-bold mb-6 mt-14">Get in Touch!</h1>
      <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">
          <strong>Phone:</strong> <span className="text-purple-600">0333-3905895</span>
        </p>
        <p className="mb-2">
          <strong>Email:</strong> <span className="text-purple-600">azeecreations1@gmail.com</span>
        </p>
        <p className="mb-4">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/asma-iqbal000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            www.linkedin.com/in/asma-iqbal000
          </a>
        </p>
      </div>

      {/* Fun Element: Animated Emoji */}
      <div className="mt-10 text-6xl animate-bounce">
        <span role="img" aria-label="wave">👋</span>
      </div>

      {/* Fun Element: Contact Form */}
      <div className="mt-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Send Me a Message!</h2>
        <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name} // Controlled input
              onChange={(e) => setName(e.target.value)} // Update state on change
              className="w-full p-2 border border-gray-300 rounded text-black"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message} // Controlled input
              onChange={(e) => setMessage(e.target.value)} // Update state on change
              className="w-full p-2 border border-gray-300 rounded text-black"
              placeholder="Write your message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;