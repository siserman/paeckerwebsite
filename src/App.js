import React, { useState } from 'react';
import { Truck, Lock, Box, Globe } from 'lucide-react';

// Language content
const content = {
  en: {
    nav: {
      features: "Features",
      design: "Design",
      specs: "Specifications",
      contact: "Contact"
    },
    hero: {
      title: "Revolution in Urban Mobility",
      subtitle: "The world's most innovative bicycle trailer, featuring a revolutionary folding design and premium engineering for seamless urban transportation.",
      cta: "Pre-order Now"
    },
    features: {
      title: "Revolutionary Features",
      mainFeatures: [
        {
          title: "Multifunctional Design",
          desc: "Transform from bike trailer to handcart instantly - perfect for shopping trips and urban mobility.",
          icon: "Box"
        },
        {
          title: "Smart Technology",
          desc: "First smart bicycle trailer with companion app for tracking charge, weight, mileage, and more.",
          icon: "Smartphone"
        },
        {
          title: "Sustainable Choice",
          desc: "Locally produced with modern additive manufacturing and decentralized production network.",
          icon: "Leaf"
        }
      ],
      specs: {
        title: "Technical Excellence",
        items: [
          {
            label: "Weight",
            value: "8.8 kg"
          },
          {
            label: "Max Load (Cart Mode)",
            value: "200 kg"
          },
          {
            label: "Max Load (Trailer Mode)",
            value: "50 kg"
          },
          {
            label: "Box Size",
            value: "600x400 mm (Eurobox)"
          }
        ]
      },
      detailedFeatures: [
        {
          title: "Affordable Access",
          desc: "Designed for practicality and accessibility, not luxury - making sustainable transport available to everyone."
        },
        {
          title: "Universal Compatibility",
          desc: "Tool-free assembly and compatibility with all bicycle types, from folding bikes to cargo bikes."
        },
        {
          title: "Future-Ready",
          desc: "Constantly evolving with planned features including motorized versions and commercial variants."
        },
        {
          title: "Smart Features",
          desc: "Companion app with charge level, weight monitoring, theft protection, and safety features like rear-view camera."
        },
        {
          title: "Space-Efficient",
          desc: "Completely disassembles to fit in a single Eurobox for easy storage and transport."
        },
        {
          title: "Sustainable Production",
          desc: "Local manufacturing with additive processes and integrated recycling, minimizing environmental impact."
        },
        {
          title: "Customizable",
          desc: "Flexible design adaptable to specific needs - from craftsmen to delivery services."
        },
        {
          title: "Easy Maintenance",
          desc: "3D-printed components ensure perpetual spare parts availability and simple repairs."
        }
      ],
      community: {
        title: "Join the Community",
        points: [
          {
            title: "Open Source",
            desc: "Free blueprints for private use - build your own Päcker and join the community."
          },
          {
            title: "Business Opportunity",
            desc: "Commercial licensing available with access to worldwide production network."
          },
          {
            title: "Community Driven",
            desc: "Share ideas, connect with enthusiasts, and even earn money as part of the Päcker network."
          }
        ]
      }
    },
    design: {
      title: "Engineered for Excellence",
      connect: {
        title: "Quick-Connect System",
        desc: "Our patented connection mechanism ensures secure attachment while allowing for quick release when needed."
      },
      storage: {
        title: "Compact Storage",
        desc: "The innovative folding design allows for easy storage when not in use, perfect for urban living spaces."
      }
    },
    specs: {
      title: "Technical Specifications",
      load: "Load Capacity",
      loadValue: "40 kg / 88 lbs",
      material: "Material",
      materialValue: "Aluminum frame with reinforced panels",
      wheel: "Wheel Size",
      wheelValue: "16 inch all-terrain",
      compatibility: "Compatibility",
      compatibilityValue: "Universal bike attachment"
    },
    contact: {
      title: "Get Updates",
      email: "Email",
      emailPlaceholder: "Your email",
      submit: "Stay Informed"
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      faq: "FAQ",
      rights: "© 2024 Päcker. All rights reserved."
    }
  },
  de: {
    nav: {
      features: "Funktionen",
      design: "Design",
      specs: "Spezifikationen",
      contact: "Kontakt"
    },
    hero: {
      title: "Revolution der urbanen Mobilität",
      subtitle: "Der innovativste Fahrradanhänger der Welt mit revolutionärem Faltdesign und erstklassiger Technik für nahtlose urbane Mobilität.",
      cta: "Jetzt vorbestellen"
    },
    features: {
      title: "Revolutionäre Funktionen",
      mainFeatures: [
        {
          title: "Multifunktionales Design",
          desc: "Verwandlung vom Fahrradanhänger zur Sackkarre - perfekt für Einkäufe und städtische Mobilität."
        },
        {
          title: "Smarte Technologie",
          desc: "Erster smarter Fahrradanhänger mit eigener App zur Überwachung von Ladung, Gewicht, Kilometern und mehr."
        },
        {
          title: "Nachhaltige Wahl",
          desc: "Lokale Produktion mit modernen additiven Fertigungsverfahren und dezentralem Produktionsnetzwerk."
        }
      ],
      specs: {
        title: "Technische Exzellenz",
        items: [
          {
            label: "Gewicht",
            value: "8,8 kg"
          },
          {
            label: "Max. Last (Sackkarre)",
            value: "200 kg"
          },
          {
            label: "Max. Last (Anhänger)",
            value: "50 kg"
          },
          {
            label: "Boxgröße",
            value: "600x400 mm"
          }
        ]
      },
      detailedFeatures: [
        {
          title: "Erschwinglich",
          desc: "Entwickelt für Praktikabilität und Zugänglichkeit, nicht für Luxus - macht nachhaltigen Transport für alle verfügbar."
        },
        {
          title: "Universelle Kompatibilität",
          desc: "Werkzeuglose Montage und Kompatibilität mit allen Fahrradtypen, vom Faltrad bis zum Lastenrad."
        },
        {
          title: "Zukunftssicher",
          desc: "Ständige Weiterentwicklung mit geplanten Funktionen wie motorisierten Versionen und gewerblichen Varianten."
        },
        {
          title: "Smarte Funktionen",
          desc: "Begleit-App mit Ladestandsanzeige, Gewichtsüberwachung, Diebstahlschutz und Sicherheitsfunktionen wie Rückfahrkamera."
        },
        {
          title: "Platzsparend",
          desc: "Komplett zerlegbar und passt in eine einzige Eurobox für einfache Lagerung und Transport."
        },
        {
          title: "Nachhaltige Produktion",
          desc: "Lokale Fertigung mit additiven Prozessen und integriertem Recycling, minimale Umweltbelastung."
        },
        {
          title: "Anpassbar",
          desc: "Flexibles Design, anpassbar an spezifische Bedürfnisse - vom Handwerker bis zum Lieferservice."
        },
        {
          title: "Einfache Wartung",
          desc: "3D-gedruckte Komponenten gewährleisten dauerhafte Ersatzteilverfügbarkeit und einfache Reparaturen."
        }
      ],
      community: {
        title: "Werde Teil der Community",
        points: [
          {
            title: "Open Source",
            desc: "Kostenlose Baupläne für private Nutzung - baue deinen eigenen Päcker und werde Teil der Community."
          },
          {
            title: "Geschäftsmöglichkeit",
            desc: "Kommerzielle Lizenzen verfügbar mit Zugang zum weltweiten Produktionsnetzwerk."
          },
          {
            title: "Community-getrieben",
            desc: "Teile Ideen, verbinde dich mit Enthusiasten und verdiene sogar Geld als Teil des Päcker-Netzwerks."
          }
        ]
      }
    },
    design: {
      title: "Technisch perfektioniert",
      connect: {
        title: "Schnellverbindungssystem",
        desc: "Unser patentierter Verbindungsmechanismus gewährleistet sichere Befestigung bei gleichzeitiger Schnellentriegelung."
      },
      storage: {
        title: "Kompakte Lagerung",
        desc: "Das innovative Faltdesign ermöglicht einfache Aufbewahrung bei Nichtgebrauch, ideal für urbanen Wohnraum."
      }
    },
    specs: {
      title: "Technische Spezifikationen",
      load: "Ladekapazität",
      loadValue: "40 kg",
      material: "Material",
      materialValue: "Aluminiumrahmen mit verstärkten Paneelen",
      wheel: "Radgröße",
      wheelValue: "16 Zoll Allterrain",
      compatibility: "Kompatibilität",
      compatibilityValue: "Universelle Fahrradbefestigung"
    },
    contact: {
      title: "Updates erhalten",
      email: "E-Mail",
      emailPlaceholder: "Ihre E-Mail",
      submit: "Informiert bleiben"
    },
    footer: {
      privacy: "Datenschutz",
      terms: "AGB",
      faq: "FAQ",
      rights: "© 2024 Päcker. Alle Rechte vorbehalten."
    }
  }
};

const PäckerWebsite = () => {
  const [language, setLanguage] = useState('en');
  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <header className="relative bg-black">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">päcker</div>
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-red-500 transition-colors">{t.nav.features}</a>
              <a href="#design" className="text-gray-300 hover:text-red-500 transition-colors">{t.nav.design}</a>
              <a href="#specs" className="text-gray-300 hover:text-red-500 transition-colors">{t.nav.specs}</a>
              <a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">{t.nav.contact}</a>
              <button 
                onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
                className="flex items-center text-gray-300 hover:text-red-500 transition-colors ml-4"
              >
                <Globe size={20} className="mr-2" />
                {language.toUpperCase()}
              </button>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {t.hero.subtitle}
              </p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                {t.hero.cta}
              </button>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
            <img
                src="https://raw.githubusercontent.com/siserman/paeckerwebsite/main/images/paek_img_011.png"
                alt="Päcker connection mechanism detail"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Rest of the sections updated with translations */}
      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">{t.features.title}</h2>
          
          {/* Main Features with Large Visuals */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="relative overflow-hidden rounded-lg">
            <img
                src="https://raw.githubusercontent.com/siserman/paeckerwebsite/main/images/paek_img_005.png"
                alt="Päcker connection mechanism detail"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8 flex flex-col justify-center">
              {t.features.mainFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Box size={32} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs */}
          <div className="max-w-3xl mx-auto mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">{t.features.specs.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.features.specs.items.map((spec, index) => (
                <div key={index} className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-xl text-red-500 font-bold mb-2">{spec.value}</div>
                  <div className="text-gray-400">{spec.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Features Showcase */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/siserman/paeckerwebsite/main/images/paek_img_013.png"
                alt="Päcker connection mechanism detail"
                className="w-full rounded-lg shadow-lg"
              />
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Smart Technology Integration</h3>
                <p className="text-gray-400">Track everything from load capacity to route optimization with our integrated smart features and companion app.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/siserman/paeckerwebsite/main/images/paek_img_014.png"
                alt="Päcker connection mechanism detail"
                className="w-full rounded-lg shadow-lg"
              />
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Modular Design</h3>
                <p className="text-gray-400">Easily transform between trailer and handcart modes, with tool-free assembly and complete adaptability.</p>
              </div>
            </div>
          </div>

          {/* Detailed Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {t.features.detailedFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Community Section with Visual */}
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">{t.features.community.title}</h3>
                <div className="space-y-8">
                  {t.features.community.points.map((point, index) => (
                    <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg hover:bg-opacity-70 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-red-500 mb-3">{point.title}</h4>
                      <p className="text-gray-400">{point.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
              <img
                src="https://raw.githubusercontent.com/siserman/paeckerwebsite/main/images/paek_img_010.png"
                alt="Päcker connection mechanism detail"
                className="w-full rounded-lg shadow-lg"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Gallery Section */}
      <section id="design" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">{t.design.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <img
                src="https://raw.githubusercontent.com/siserman/paeckerwebsite/main/images/paek_img_012.png"
                alt="Päcker connection mechanism detail"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="p-6 bg-black rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">{t.design.connect.title}</h3>
                <p className="text-gray-400">{t.design.connect.desc}</p>
              </div>
            </div>
            <div className="space-y-8">
            <img
                src="https://raw.githubusercontent.com/siserman/paeckerwebsite/main/images/paek_img_009.png"
                alt="Päcker connection mechanism detail"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="p-6 bg-black rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">{t.design.storage.title}</h3>
                <p className="text-gray-400">{t.design.storage.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">{t.specs.title}</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="font-semibold text-white">{t.specs.load}</span>
                  <span className="text-gray-400">{t.specs.loadValue}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="font-semibold text-white">{t.specs.material}</span>
                  <span className="text-gray-400">{t.specs.materialValue}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="font-semibold text-white">{t.specs.wheel}</span>
                  <span className="text-gray-400">{t.specs.wheelValue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">{t.specs.compatibility}</span>
                  <span className="text-gray-400">{t.specs.compatibilityValue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">{t.contact.title}</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">{t.contact.email}</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                {t.contact.submit}
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
              <a href="#" className="hover:text-red-500 transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-red-500 transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-red-500 transition-colors">{t.footer.faq}</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PäckerWebsite;