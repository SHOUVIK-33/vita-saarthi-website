import React, { useState, useEffect } from 'react';
import { Heart, Shield, Radio, Activity, Wifi, Battery, Lock, MapPin, Bell, Users, Building2, CheckCircle, AlertTriangle, Thermometer, Clock } from 'lucide-react';

export default function VitaSaarthiWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = () => {
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">VITA SAARTHI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition">Home</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition">Features</button>
              <button onClick={() => scrollToSection('markets')} className="text-gray-700 hover:text-blue-600 transition">Markets</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
            </div>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold">
            🇮🇳 Viksit Bharat Buildathon
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
            VITA SAARTHI™
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
            The Smart Band That Cares
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Health, Identity, and Safety — All on Your Wrist
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            VITA SAARTHI is redefining safety for working parents and their children. We merge crucial real-time health monitoring, secure digital identification, and immediate emergency response into one durable, aesthetically pleasing wristband. Peace of mind for parents, safety for children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
              Get Started
            </button>
            <button onClick={() => scrollToSection('features')} className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Critical Gaps We Bridge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current wearable technology and monitoring systems are often inefficient, resulting in delayed interventions and fragmented data
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Inefficient Patient Monitoring', desc: 'Traditional systems rely on periodic manual checks or bulky equipment, often leading to slow detection of critical health deviations in children and elderly.' },
              { icon: Shield, title: 'Lack of Real-time Safety', desc: 'Children and vulnerable users lack a reliable, instant safety net that provides high-frequency location tracking and proactive alert triggers for worried parents.' },
              { icon: AlertTriangle, title: 'Fragmented Data & Slow Response', desc: 'Crucial medical and identity data is scattered across systems. In emergencies, first responders face delays, slowing critical intervention times.' }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <item.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Introducing VITA SAARTHI™</h2>
          <p className="text-2xl text-blue-700 font-semibold mb-6">Your All-in-One Connected Companion</p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            VITA SAARTHI is the unified solution that bridges the gap between passive monitoring and proactive intervention. It delivers real-time data, instant alerts, and secure digital identity, ensuring a continuous safety perimeter around your loved ones — especially children and elderly family members.
          </p>
          <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <Heart className="w-20 h-20 text-white" />
            </div>
            <p className="text-gray-600 italic">Our minimalist design conceals complex, high-precision sensors, making advanced protection accessible and comfortable for daily wear.</p>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The VITA SAARTHI™ Hardware</h2>
            <p className="text-xl text-gray-600">Designed for Life, Built for Safety</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: 'Ergonomic & Minimalist', desc: 'Designed to be lightweight and comfortable for 24/7 wear, perfect for children and elderly users who need constant monitoring.' },
              { icon: Shield, title: 'Durable & Water-Resistant', desc: 'Medical-grade construction built to withstand daily wear, water exposure, and active lifestyles of children.' },
              { icon: Battery, title: 'Extended Battery Life', desc: 'Optimized power management provides multiple days of continuous monitoring on a single charge — less worry for parents.' }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Proactive Health Insight, 24/7</h2>
            <p className="text-xl text-gray-600">VITA SAARTHI moves beyond simple data collection</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Continuous Monitoring', desc: 'Tracks Heart Rate, Body Temperature, and Activity levels with clinical precision throughout the day and night — giving parents real-time peace of mind.' },
              { icon: Thermometer, title: 'Intelligent Thresholds', desc: 'Proprietary algorithms instantly detect outliers, such as HR below 40 bpm or temperature above 102°F, triggering critical protocols and parent alerts.' },
              { icon: Wifi, title: 'Secure Cloud Data', desc: 'All data is securely stored and accessible to authorized parents, caregivers, or clinicians via the VITA SAARTHI App and integrated systems.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <item.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Universal Identity, Securely on Your Wrist</h2>
            <p className="text-xl text-gray-600">Perfect for school check-ins and institutional access</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Radio, title: 'RFID/NFC Capabilities', desc: 'Enables seamless school access control, attendance tracking, and child identification — parents get instant notifications when kids arrive or leave.' },
              { icon: Lock, title: 'Encrypted ID & Medical Data', desc: 'A secure microchip stores essential, encrypted user information and medical history, instantly accessible by authorized personnel in emergencies.' },
              { icon: Wifi, title: 'EHR System Integration', desc: 'Robust API for integration with Electronic Health Record systems, ensuring continuous health data flows directly into patient files.' }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <item.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Real-time Safety Net</h2>
            <p className="text-xl text-gray-600">Every parent's ultimate peace of mind</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Precision GPS & Geofencing', desc: 'Set virtual boundaries around home, school, or safe zones. Get immediate alerts if your child leaves designated areas — perfect for working parents.' },
              { icon: Bell, title: 'Automatic & Manual SOS Mode', desc: 'A discreet panic button or automatic activation via critical health alerts triggers full emergency protocol, instantly notifying parents and emergency services.' },
              { icon: Clock, title: 'High-frequency Location Data', desc: 'In critical emergencies, the device switches to continuous, high-speed location broadcasting for immediate responder and parent coordination.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <item.icon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The VITA SAARTHI™ Ecosystem</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            VITA SAARTHI is not just a device; it is the central node in a comprehensive, connected ecosystem designed for maximum reliability and accessibility. Built on robust cloud services like Firebase for scalability, security, and lightning-fast data processing.
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {['Device', 'Cloud', 'Mobile App', 'Emergency Response'].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-xl">
                <div className="text-4xl mb-2">{['⌚', '☁️', '📱', '🚨'][i]}</div>
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Capturing Diverse Markets</h2>
            <p className="text-xl text-gray-600">The versatility of VITA SAARTHI positions us to penetrate high-growth sectors</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Healthcare (Primary Target)', desc: 'Hospitals, long-term care facilities, and home care providers seeking reliable remote patient monitoring (RPM) and secure digital patient identification.' },
              { icon: Building2, title: 'Institutions', desc: 'Schools, universities, and daycare centers needing integrated access control, safety tracking for children/students, and emergency alert systems for worried parents.' },
              { icon: Users, title: 'Working Parents & Families', desc: 'Working parents seeking comprehensive safety solution for children and elderly family members — fitness tracking, security monitoring, and instant emergency alerts.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Scalable Opportunity</h2>
            <p className="text-xl text-gray-600">Multiple revenue streams for sustainable growth</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Subscription Model', desc: 'Premium features for advanced analytics, customization, and multi-user family plans for working parents.' },
              { title: 'Institutional Licensing', desc: 'Annual fees for hospitals, schools, daycare centers, and corporate clients requiring fleet management.' },
              { title: 'Hardware Sales', desc: 'One-time purchase of VITA SAARTHI devices with tiered pricing for families and institutions.' }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Transform Safety & Healthcare?</h2>
            <p className="text-xl text-blue-100">Get in touch with us today</p>
          </div>
          {formSubmitted && (
            <div className="bg-green-500 text-white p-4 rounded-lg mb-6 text-center font-semibold">
              ✓ Thank you! We will get back to you soon.
            </div>
          )}
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Organization (Optional)"
              value={formData.organization}
              onChange={(e) => setFormData({...formData, organization: e.target.value})}
              className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={5}
              className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-blue-600 outline-none resize-none"
            ></textarea>
            <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition transform hover:scale-105">
              Request Demo
            </button>
          </div>
          <div className="text-center mt-8">
            <p className="text-blue-100 mb-2">Or email us directly:</p>
            <a href="mailto:atmanirbharsena10@gmail.com" className="text-white text-xl font-semibold hover:underline">
              atmanirbharsena10@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">VITA SAARTHI</span>
              </div>
              <p className="text-gray-400">Health, Identity, and Safety — All on Your Wrist</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('features')} className="block text-gray-400 hover:text-white transition">Features</button>
                <button onClick={() => scrollToSection('markets')} className="block text-gray-400 hover:text-white transition">Markets</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <p className="text-gray-400 mb-2">atmanirbharsena10@gmail.com</p>
              <div className="flex space-x-4 mt-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                  <span>f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                  <span>t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                  <span>in</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 VITA SAARTHI™. Built for Viksit Bharat Buildathon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}