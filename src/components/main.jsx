import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { CheckCircle, Brain, BarChart, Cpu } from 'lucide-react';
// import LoginPage from './loginpage';
import Footer from './footer'
function Main() {
  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    'Industry-leading AI technology',
    'Dedicated support team',
    'Customizable solutions',
    'Proven results'
  ];

  const impactStats = [
    { number: '500+', label: 'Clients Worldwide' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const products = [
    {
      icon: Brain,
      color: 'blue-600',
      title: 'Adaptive Learning',
      description: 'Personalizes learning paths based on individual student performance and preferences.',
    },
    {
      icon: BarChart,
      color: 'purple-600',
      title: 'Performance Analytics',
      description: 'Advanced analytics to track and improve student progress in real-time.',
    },
    {
      icon: Cpu,
      color: 'indigo-600',
      title: 'AI Tutoring',
      description: '24/7 AI-powered tutoring support for students across all subjects.',
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const [valid, setValid] = useState(false); 

  function handleLoginSignUp() {
    setValid(true); // Proper state update
  }

  return (
    valid ? (
      <></>
    ) : (
      <div className="bg-gray-50 font-['Space_Grotesk']">
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold gradient-text">Schollers</h1>
              </div>
              <div className="flex items-center space-x-8">
                {['Home', 'Products', 'About', 'Contact'].map(section => (
                  <a
                    key={section}
                    href={`#${section.toLowerCase()}`}
                    className="hover:text-blue-600"
                    onClick={smoothScroll}
                  >
                    {section}
                  </a>
                ))}
                <a
                  href="#"
                  onClick={handleLoginSignUp}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Login/SignUp
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text">
                Next Generation AI Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Empowering businesses with cutting-edge artificial intelligence solutions that transform operations and drive innovation.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-4">
                Meet SAI - Scholars Artificial Intelligence
              </h2>
              <p className="text-gray-600">
                Our revolutionary AI system designed specifically for educational excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="hover-card bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className={`text-${product.color} text-4xl mb-4`}>
                    <product.icon size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Features Column */}
              <div>
                <h2 className="text-4xl font-bold gradient-text mb-6">
                  Why Choose Us?
                </h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="mr-2 text-green-500" size={20} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Statistics Column */}
              <div className="bg-blue-100 rounded-lg p-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-blue-600">
                    Our Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {impactStats.map((stat, index) => (
                      <div key={index}>
                        <p className="text-3xl font-bold text-blue-600">
                          {stat.number}
                        </p>
                        <p className="text-gray-600">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
              <p className="text-gray-600">Ready to transform your business with AI? Let's talk!</p>
            </div>
            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />

      </div>
    )
  );
}

export default Main;
