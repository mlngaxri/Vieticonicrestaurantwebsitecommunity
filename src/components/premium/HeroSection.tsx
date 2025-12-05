import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "../parallax-hero.css";

// ASSETS from Unsplash (Temporary replacement for missing local assets)
// Sky: Clouds/Blue sky
const skyImg = "https://images.unsplash.com/photo-1628307779827-446def5883be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3klMjBjbG91ZHMlMjBibHVlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5MDg0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
// Mountain: Silhouette range
const mountainImg = "https://images.unsplash.com/photo-1706195173268-c1ff4813e724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHNpbGhvdWV0dGUlMjBsYXllcnxlbnwxfHx8fDE3NjQ5MDg0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax logic:
  // "Clouds slower": High resistance (positive Y). They stay in view longer.
  // "Mountains faster": Lower resistance (smaller positive Y). They move up closer to natural scroll speed.
  
  // Sky moves down 50% of section height -> Net upward speed is 50% of scroll
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Mountains move down 15% of section height -> Net upward speed is 85% of scroll (Faster than sky)
  const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  // Content moves UP 50% of section height -> Net upward speed is 150% of scroll (Fastest/Pop)
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section 
      ref={ref} 
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#0D3423] flex items-center justify-center"
    >
      {/* SKY LAYER */}
      <motion.img
        src={skyImg}
        alt="Sky layer"
        className="absolute top-0 left-0 w-full h-[120%] object-cover z-0 will-change-transform"
        style={{ y: skyY }}
        draggable="false" 
      />

      {/* MOUNTAIN LAYER */}
      <motion.img
        src={mountainImg}
        alt="Mountain layer"
        className="absolute bottom-0 left-0 w-full h-auto min-h-[60%] object-cover object-bottom z-10 will-change-transform"
        style={{ y: mountainY }}
        draggable="false"
      />

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30 z-20 pointer-events-none" />

      {/* CONTENT */}
      <motion.div 
        className="relative z-30 text-center px-4 max-w-4xl mx-auto mt-[-10vh]"
        style={{ y: contentY }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl font-display mb-6">
          Fresh. Simple. Delicious.
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium italic tracking-wide drop-shadow-md mb-8">
          Hawthorne's newest Vietnamese restaurant.
        </p>

        <button 
          onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})} 
          className="rounded-full px-8 py-4 text-lg font-semibold text-white transition-all transform hover:scale-105 hover:shadow-2xl"
          style={{
            background: "linear-gradient(90deg, #B3853E, #9A7235)",
            boxShadow: "0 10px 30px rgba(179,133,62,0.4)"
          }}
        >
          See Menu
        </button>
      </motion.div>
    </section>
  );
}