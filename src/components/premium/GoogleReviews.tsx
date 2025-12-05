import { Star } from "lucide-react@0.487.0";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SimpleCarousel } from "./SimpleCarousel";

import reviewImg1 from "figma:asset/12ec9911af10fadcd591a80de0ed289b7f6dd2c4.png";
import reviewImg2 from "figma:asset/664756cecd284474fcb473409a8597217fedc690.png";

const reviews = [
  {
    name: "Jonathan Minchinton",
    rating: 5,
    date: "3 weeks ago",
    text: "Absolutely terrific place, the food was great & service was quick + professional. I recommend this place for anyone looking for good quality food, either takeaway or in-house, with very good prices for food and drinks.",
    initial: "JM",
    image: reviewImg1,
    source: "Google Review",
  },
  {
    name: "Yorkshireman_Dan",
    rating: 5,
    date: "1 week ago",
    text: "Tasty Bánh mì and friendly owners. We both enjoyed our crispy pork belly Bánh mì, good Vietnamese baguettes and tasty filling. Very quiet noise level.",
    initial: "YD",
    image: reviewImg2,
    source: "Local Guide",
  },
  {
    name: "Lloyd Jones",
    rating: 5,
    date: "3 days ago",
    text: "We absolutely loved the food — it's probably one of best bánh mì we've ever had! The service was amazing, and as locals, we'll definitely be recommending this place to everyone. Great quality, great people, and very affordable.",
    initial: "LJ",
    source: "Google Review",
  },
  {
    name: "Suzie Lee",
    rating: 5,
    date: "2 weeks ago",
    text: "This new restaurant on Hawthorne Road is a great option for Vietnamese food. The food is fresh and tasty, the staff are friendly and the prices are very reasonable. Big thumbs up for the crispy pork banh mi, the crab noodle soup and the cumquat iced tea!!",
    initial: "SL",
    source: "Local Guide",
  },
  {
    name: "Kenny Tran",
    rating: 5,
    date: "5 days ago",
    text: "Absolutely delicious! The Bún Bò Huế was rich, fragrant, and full of authentic flavour, and the bánh mì was fresh, crispy, and beautifully presented. You can really taste the quality and care in every bite.",
    initial: "KT",
    source: "Google Review",
  },
  {
    name: "Christopher O'Reilly",
    rating: 5,
    date: "3 weeks ago",
    text: "I've been thinking for a while that we really needed a Vietnamese restaurant in the area — and this one does not disappoint! The food is fresh, flavourful, and exactly what we've been missing. Highly recommend!",
    initial: "CO",
    source: "Google Review",
  },
  {
    name: "Star",
    rating: 5,
    date: "3 weeks ago",
    text: "What an amazing experience! Tom helped and explained each dish... I tried the Bun Bo Hue soup and WOW it was incredible!!!! Everything is fairly priced, so much free street parking and the wall art inside is just beautiful. My new favourite Vietnamese restaurant in Hawthorne!",
    initial: "S",
    source: "Google Review",
  },
  {
    name: "Helen Cunz",
    rating: 5,
    date: "3 weeks ago",
    text: "Highly recommend the crackling pork meals and beef noodle soup was so tasty! Our daughter and I also love the kumquat tea drink which is so fresh with real kumquat that you can taste in it.",
    initial: "HC",
    source: "Google Review",
  },
  {
    name: "SOONY KIM",
    rating: 5,
    date: "3 weeks ago",
    text: "Absolutely loved the crispy pork banh mi! The bread was perfectly crunchy, the pork was super flavorful, and everything was so fresh. One of the best banh mis I've had in a while.",
    initial: "SK",
    source: "Local Guide",
  },
];

export function GoogleReviews() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--bg-cream)] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Rating */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-[var(--brand-gold)]/20">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-[var(--brand-gold)] text-[var(--brand-gold)]"
                />
              ))}
            </div>
            <p className="text-xl sm:text-2xl font-bold text-[var(--brand-dark)]">5.0 Rating</p>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">Based on 24+ Google Reviews</p>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Loved by Locals
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mx-auto px-4">
            We are proud to serve the Hawthorne community. Here's what our customers are saying.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto">
          <SimpleCarousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}>
            {reviews.map((review, index) => (
              <div key={index} className="h-full p-1">
                <div className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden flex flex-col">
                  <div className="p-6 flex flex-col flex-grow gap-4">
                    {/* Header: Avatar + Name */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--brand-dark)] flex items-center justify-center text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        {review.initial}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-[var(--brand-dark)] truncate">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                          <span>{review.source}</span>
                          <span>•</span>
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[var(--brand-gold)] text-[var(--brand-gold)]"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-sm text-[var(--text)] leading-relaxed flex-grow">
                      "{review.text}"
                    </p>

                    {/* Optional Image */}
                    {review.image && (
                      <div className="mt-4 rounded-lg overflow-hidden h-40 w-full">
                        <ImageWithFallback
                          src={review.image}
                          alt={`Photo by ${review.name}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </SimpleCarousel>
        </div>

        {/* View All Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Viet+Iconic+Hawthorne+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--brand-dark)] hover:text-[var(--brand-gold)] transition-colors font-semibold border-b-2 border-[var(--brand-gold)] pb-0.5"
          >
            <span>Read all reviews on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}