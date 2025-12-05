import menuImage from "figma:asset/b558915d2d179e802d8e70c47d58cd52e3671723.png";

export function MenuPreview() {
  return (
    <section id="menu" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Our Full Menu
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto px-4">
            Explore our complete selection of authentic Vietnamese cuisine, 
            from traditional phở to refreshing beverages.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Menu Image */}
          <div className="bg-gradient-to-br from-[var(--accent-olive)]/10 to-[var(--accent-moss)]/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-8 sm:mb-12">
            <img
              src={menuImage}
              alt="Viet Iconic Full Menu"
              className="w-full h-auto"
            />
          </div>

          {/* Download Button */}
          <div className="text-center">
            <button className="btn-primary w-full sm:w-auto">
              Download Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}