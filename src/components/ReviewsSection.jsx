import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./ReviewCard";
import SectionTitle from "./SectionTitle";
import { reviews } from "./siteData";

function ReviewsSection() {
  const sliderRef = useRef(null);
  const [ratings, setRatings] = useState({});
  const [feedback, setFeedback] = useState({});
  const [submittedFeedback, setSubmittedFeedback] = useState({});

  const scrollCards = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const firstCard = container.querySelector(".review-card");
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width + 24
      : 340;
    container.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  const setRating = (index, value) => {
    setRatings((current) => ({
      ...current,
      [index]: current[index] === value ? null : value,
    }));
  };

  const submitFeedback = (index) => {
    if (!feedback[index]?.trim()) return;
    setSubmittedFeedback((current) => ({ ...current, [index]: true }));
  };

  return (
    <section id="reviews" className="bg-[#F9F1F5] py-24 sm:py-32">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Reviews"
          title="Handwriting transformations"
          text="Explore real progress and share your own experience with Soul Spark."
        />

        <div
          ref={sliderRef}
          className="review-slider no-scrollbar overflow-x-auto pb-6"
        >
          <div className="flex w-max gap-8 px-2">
            {reviews.map((review, index) => (
              <ReviewCard
                key={review.image}
                review={review}
                index={index}
                rating={ratings[index]}
                feedback={feedback[index] || ""}
                submitted={submittedFeedback[index]}
                onRating={setRating}
                onFeedbackChange={(reviewIndex, value) =>
                  setFeedback((current) => ({
                    ...current,
                    [reviewIndex]: value,
                  }))
                }
                onSubmit={submitFeedback}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <motion.button
            type="button"
            onClick={() => scrollCards(-1)}
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll reviews left"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white text-[#2D2D2D] shadow-sm transition hover:border-[#C2185B] hover:text-[#C2185B]"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            type="button"
            onClick={() => scrollCards(1)}
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll reviews right"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white text-[#2D2D2D] shadow-sm transition hover:border-[#C2185B] hover:text-[#C2185B]"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
