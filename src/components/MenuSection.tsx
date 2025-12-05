import menuImage1 from "figma:asset/b558915d2d179e802d8e70c47d58cd52e3671723.png";
import menuImage2 from "figma:asset/b52a2d25624e7690b920320ef8afd1b3de709f46.png";

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-[#8FA573]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#E8A94B] mb-4">Our Menu</h2>
          <p className="text-[#1E3A3A] max-w-2xl mx-auto">
            Discover our selection of authentic Vietnamese dishes, made fresh daily with traditional recipes.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Food Menu */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
            <img
              src={menuImage1}
              alt="Viet Iconic Food Menu"
              className="w-full h-auto"
            />
          </div>

          {/* Drinks Menu */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
            <img
              src={menuImage2}
              alt="Viet Iconic Drinks Menu"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-[#1E3A3A]">
            * Legend: 🥟 Contains Gluten | ✓ Vegetarian | 🥚 Contains Egg | 🦐🦀 Contains Seafood | ⭐ House Specials | 🥜 Contains Peanuts
          </p>
        </div>
      </div>
    </section>
  );
}
