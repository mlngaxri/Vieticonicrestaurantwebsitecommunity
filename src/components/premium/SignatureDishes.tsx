import { ImageWithFallback } from "../figma/ImageWithFallback";

const dishes = [
  {
    name: "Bánh Mì Thịt Nướng",
    description: "Grilled pork with house-made pâté, pickled vegetables, fresh cucumber, and cilantro on a crispy baguette",
    price: "$8.99",
    tag: "House Special"
  },
  {
    name: "Phở Bò",
    description: "Traditional beef noodle soup with slow-cooked broth, rice noodles, herbs, and your choice of beef cuts",
    price: "$12.99",
    tag: "Most Popular"
  },
  {
    name: "Vietnamese Iced Coffee",
    description: "Authentic cà phê sữa đá made with dark roast coffee and sweetened condensed milk over ice",
    price: "$5.50",
    tag: "Customer Favorite"
  }
];

export function SignatureDishes() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Signature Dishes
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Experience the flavors of Vietnam with our most beloved dishes, 
            crafted fresh daily with authentic recipes and premium ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {dishes.map((dish, idx) => (
            <div 
              key={idx}
              className="card-premium overflow-hidden group flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] bg-[var(--bg-cream)] flex items-center justify-center border-b border-[var(--border)]">
                <div className="text-center p-6">
                  <span className="block text-4xl mb-2">📸</span>
                  <p className="text-[var(--text-muted)] font-medium italic">
                    Photo of {dish.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] opacity-60 mt-2">
                    (Image coming soon)
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 bg-[var(--brand-gold)] text-white text-xs font-semibold rounded-full shadow-lg">
                    {dish.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-[var(--brand-dark)]">
                    {dish.name}
                  </h3>
                  <span className="text-xl font-bold text-[var(--brand-gold)] flex-shrink-0 ml-2">
                    {dish.price}
                  </span>
                </div>
                
                <p className="text-[var(--text-muted)] leading-relaxed flex-grow">
                  {dish.description}
                </p>
                
                <a href="tel:0466634567" className="w-full btn-secondary text-sm mt-4 block text-center hover:no-underline">
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
