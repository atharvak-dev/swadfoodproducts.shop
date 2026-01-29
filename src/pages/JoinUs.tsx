import { useState, useEffect } from 'react';
import { MessageSquare, ChefHat, Users, TrendingUp } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SEOHead, PAGE_SEO } from '../components/SEO';

export function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');



  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    const message = `New Franchise Inquiry:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919021061883?text=${encodeURIComponent(message)}`, '_blank');
    setTimeout(() => setFormStatus('sent'), 1000);
  };

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);



  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead {...PAGE_SEO.joinUs} />

      <div className="min-h-screen bg-orange-50 font-sans">
        {/* Navbar */}


        {/* Hero Section */}
        <section className="relative min-h-screen pt-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-800/80" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('https://jlrjs.com/wp-content/uploads/2021/07/WOMAN-EMPOWERMENT-FOR-SUSTAINABLE-DEVELOPMENT-Yashi-Bajpai-1024x542.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3,
              }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center min-h-[calc(100vh-4rem)]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-2xl py-20"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Join the Flavors of Tradition
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-orange-50">
                Experience the rich heritage of authentic Indian cuisine while building a successful business with Swad Food Products.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105 text-center"
                >
                  Apply Now
                </button>
                <a
                  href="#benefits"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg transition-all text-center"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { number: '500+', label: 'Franchise Outlets' },
                { number: '2000+', label: 'Women Employed' },
                { number: '15+', label: 'Years Experience' },
                { number: '50+', label: 'Product Varieties' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Why Partner With Us?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Join a brand that combines traditional flavors with modern business practices.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6 text-orange-600" />,
                  title: 'Women Empowerment',
                  description: 'Create meaningful employment opportunities and support local communities through our innovative franchise model.',
                },
                {
                  icon: <ChefHat className="w-6 h-6 text-orange-600" />,
                  title: 'Authentic Products',
                  description: 'Offer customers the authentic taste of traditional Indian cuisine with our quality-controlled production process.',
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
                  title: 'Business Support',
                  description: 'Receive comprehensive training, marketing support, and ongoing guidance for sustainable business growth.',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply-form" className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Begin Your Journey</h2>
            <p className="text-center text-gray-600 mb-12">Take the first step towards owning your successful franchise.</p>
            <div className="bg-orange-50 p-6 sm:p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-colors"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your background and why you're interested in joining our franchise family..."
                  ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full sm:w-auto bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${formStatus === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Submit Application'}
                  </button>
                  <a
                    href="https://wa.me/919021061883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default JoinUs;