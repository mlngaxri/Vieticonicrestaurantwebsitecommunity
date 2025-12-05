import { Leaf, Droplet, ShoppingBasket, Utensils } from "lucide-react@0.487.0";

const features = [
  {
    icon: Leaf,
    title: "Fresh Herbs Daily",
    description: "We use only the freshest Vietnamese herbs, delivered daily for authentic flavor"
  },
  {
    icon: Droplet,
    title: "House-Made Sauces",
    description: "Every sauce is crafted in-house using traditional family recipes"
  },
  {
    icon: ShoppingBasket,
    title: "Locally Sourced Ingredients",
    description: "Supporting local suppliers for the highest quality produce and meats"
  },
  {
    icon: Utensils,
    title: "Dine-In · Takeaway · Catering",
    description: "Flexible dining options to suit your needs, from quick lunch to full events"
  }
];

export function WhyDineWithUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-[var(--bg-cream)] to-[var(--bg)]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Why Dine With Us?
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            From farm to table, we're committed to bringing you the most authentic 
            Vietnamese dining experience in Brisbane.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="text-center space-y-4 p-6 sm:p-8 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--brand-gold)]/20 to-[var(--brand-gold)]/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[var(--brand-gold)]" />
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-[var(--brand-dark)]">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}