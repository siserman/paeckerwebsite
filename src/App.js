import React from 'react';
import { Truck, Lock, Box, ChevronDown } from 'lucide-react';

const PäckerWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <header className="relative bg-black">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">päcker</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-red-500 transition-colors">Features</a>
              <a href="#design" className="text-gray-300 hover:text-red-500 transition-colors">Design</a>
              <a href="#specs" className="text-gray-300 hover:text-red-500 transition-colors">Specifications</a>
              <a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolution in Urban Mobility
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                The world's most innovative bicycle trailer, featuring a revolutionary folding design and premium engineering for seamless urban transportation.
              </p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Pre-order Now
              </button>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <img
                src="https://raw.githubusercontent.com/siserman/paeckerwebsite/main/assets/paek_img_001.png"
                alt="Päcker trailer attached to bicycle"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Revolutionary Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Box size={48} className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Quick-Release System</h3>
              <p className="text-gray-400">
                Innovative attachment mechanism allows for instant mounting and dismounting, perfect for urban living.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Lock size={48} className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Secure Storage</h3>
              <p className="text-gray-400">
                Heavy-duty construction with reinforced panels ensures your cargo stays protected in any condition.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Truck size={48} className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Premium Engineering</h3>
              <p className="text-gray-400">
                Precision-engineered components with red anodized aluminum accents for both style and durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Gallery Section */}
      <section id="design" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Engineered for Excellence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <img
                src="/api/placeholder/600/400"
                alt="Päcker connection mechanism detail"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="p-6 bg-black rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Quick-Connect System</h3>
                <p className="text-gray-400">
                  Our patented connection mechanism ensures secure attachment while allowing for quick release when needed.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <img
                src="/api/placeholder/600/400"
                alt="Päcker folded configuration"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="p-6 bg-black rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Compact Storage</h3>
                <p className="text-gray-400">
                  The innovative folding design allows for easy storage when not in use, perfect for urban living spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Technical Specifications</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="font-semibold text-white">Load Capacity</span>
                  <span className="text-gray-400">40 kg / 88 lbs</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="font-semibold text-white">Material</span>
                  <span className="text-gray-400">Aluminum frame with reinforced panels</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="font-semibold text-white">Wheel Size</span>
                  <span className="text-gray-400">16 inch all-terrain</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">Compatibility</span>
                  <span className="text-gray-400">Universal bike attachment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Get Updates</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                  placeholder="Your email"
                />
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Stay Informed
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-white mb-8 md:mb-0">päcker</div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-500 transition-colors">FAQ</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            © 2024 Päcker. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PäckerWebsite;