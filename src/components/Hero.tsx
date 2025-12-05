import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwYm93bHxlbnwxfHx8fDE3NjQ1NTQzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Vietnamese Pho"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A3A]/70 to-[#8FA573]/70"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-white mb-6">
          Welcome to Viet Iconic
        </h1>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Experience authentic Vietnamese flavors in the heart of your city. From traditional Pho to fresh Spring Rolls, 
          we bring you the taste of Vietnam with every dish.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollToSection("menu")}
            className="bg-[#E8A94B] hover:bg-[#D69A3C] text-[#1E3A3A] px-8 py-3 rounded-md transition-colors shadow-lg"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#8FA573] hover:bg-[#7F9563] text-white px-8 py-3 rounded-md transition-colors shadow-lg"
          >
            Visit Us
          </button>
        </div>
      </div>
    </section>
  );
}