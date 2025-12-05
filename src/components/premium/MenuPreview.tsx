import { useState } from "react";

// Menu images from imgur
const mainMenuImage = "https://i.imgur.com/uarjJT7.png";
const fullMenuImage = "https://i.imgur.com/kV7KeQZ.png";
const drinksMenuImage = "https://i.imgur.com/gZvUCL0.png";

export function MenuPreview() {
  const [selectedMenu, setSelectedMenu] = useState<'main' | 'full' | 'drinks'>('main');

  const menuImages = {
    main: mainMenuImage,
    full: fullMenuImage,
    drinks: drinksMenuImage,
  };

  const menuTitles = {
    main: 'Main Menu',
    full: 'Full Menu',
    drinks: 'Drinks Menu',
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Our Menu
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto px-4">
            Explore our complete selection of authentic Vietnamese cuisine, 
            from traditional phở to refreshing beverages.
          </p>
        </div>

        {/* Menu Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <button
            onClick={() => setSelectedMenu('main')}
            className={`px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 ${
              selectedMenu === 'main'
                ? 'bg-[var(--brand-dark)] text-white shadow-lg'
                : 'bg-gray-100 text-[var(--text)] hover:bg-gray-200'
            }`}
          >
            Main Menu
          </button>
          <button
            onClick={() => setSelectedMenu('full')}
            className={`px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 ${
              selectedMenu === 'full'
                ? 'bg-[var(--brand-dark)] text-white shadow-lg'
                : 'bg-gray-100 text-[var(--text)] hover:bg-gray-200'
            }`}
          >
            Full Menu
          </button>
          <button
            onClick={() => setSelectedMenu('drinks')}
            className={`px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 ${
              selectedMenu === 'drinks'
                ? 'bg-[var(--brand-dark)] text-white shadow-lg'
                : 'bg-gray-100 text-[var(--text)] hover:bg-gray-200'
            }`}
          >
            Drinks Menu
          </button>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Menu Image */}
          <div className="bg-gradient-to-br from-[var(--accent-olive)]/10 to-[var(--accent-moss)]/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-8 sm:mb-12">
            <img
              src={menuImages[selectedMenu]}
              alt={`Viet Iconic ${menuTitles[selectedMenu]}`}
              className="w-full h-auto"
            />
          </div>

          {/* Download Button */}
          <div className="text-center">
            <button className="btn-primary w-full sm:w-auto">
              Download {menuTitles[selectedMenu]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}