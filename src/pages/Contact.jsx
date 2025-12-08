import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    type: 'platform',
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    alert('Thank you for your message! We will get back to you soon.');
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="py-20 px-6">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-xl text-gray-400 text-center mb-12">
          Ready to integrate? Have questions? Let's talk.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 font-bold">I am a...</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="input w-full"
            >
              <option value="platform">Platform looking to integrate</option>
              <option value="individual">Individual with questions</option>
              <option value="investor">Investor</option>
              <option value="press">Press/Media</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-bold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input w-full"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input w-full"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-bold">Company/Platform (if applicable)</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="input w-full"
              placeholder="Your company"
            />
          </div>

          <div>
            <label className="block mb-2 font-bold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input w-full h-32 resize-none"
              placeholder="How can we help?"
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>

        </form>

        <div className="mt-12 text-center text-gray-400">
          <p>Or email us directly:</p>
          <a href="mailto:hello@chainpass.ai" className="text-teal-400 hover:text-teal-300 transition-colors">
            hello@chainpass.ai
          </a>
        </div>

      </div>
    </main>
  );
}

export default Contact;
