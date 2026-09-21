import { motion } from "framer-motion";
import { ThumbsDown, ThumbsUp } from "lucide-react";

function ReviewCard({
  review,
  index,
  rating,
  feedback,
  submitted,
  onRating,
  onFeedbackChange,
  onSubmit,
}) {
  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="review-card flex w-[78vw] max-w-[420px] flex-none flex-col overflow-hidden rounded-[1.75rem] border-2 border-[#1F111A] bg-white p-2 shadow-sm"
    >
      <div className="flex h-[360px] items-center justify-center overflow-hidden rounded-xl bg-[#F9F1F5]">
        <img
          src={review.image}
          alt={review.altText}
          className="h-full w-full object-contain"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mt-auto flex items-center justify-center gap-3">
          <span className="text-sm font-semibold text-[#2D2D2D]">
            Was this helpful?
          </span>
          <button
            type="button"
            onClick={() => onRating(index, "up")}
            aria-label={`Like review ${index + 1}`}
            aria-pressed={rating === "up"}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
              rating === "up"
                ? "border-[#C2185B] bg-[#C2185B] text-white"
                : "border-[#F9F1F5] text-[#2D2D2D] hover:border-[#C2185B] hover:text-[#C2185B]"
            }`}
          >
            <ThumbsUp size={17} />
          </button>
          <button
            type="button"
            onClick={() => onRating(index, "down")}
            aria-label={`Dislike review ${index + 1}`}
            aria-pressed={rating === "down"}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
              rating === "down"
                ? "border-[#1F111A] bg-[#1F111A] text-white"
                : "border-[#F9F1F5] text-[#2D2D2D] hover:border-[#1F111A] hover:text-[#1F111A]"
            }`}
          >
            <ThumbsDown size={17} />
          </button>
        </div>

        <textarea
          value={feedback}
          onChange={(event) => onFeedbackChange(index, event.target.value)}
          rows={3}
          placeholder="Write your feedback..."
          aria-label={`Feedback for review ${index + 1}`}
          className="mt-5 w-full resize-none rounded-2xl border border-[#F9F1F5] bg-[#F9F1F5]/40 px-4 py-3 text-sm text-[#2D2D2D] outline-none transition placeholder:text-[#2D2D2D]/60 focus:border-[#C2185B] focus:ring-2 focus:ring-[#F9F1F5]"
        />
        <button
          type="button"
          onClick={() => onSubmit(index)}
          className="mt-3 rounded-full bg-[#C2185B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#A3154D]"
        >
          {submitted ? "Feedback added" : "Share feedback"}
        </button>
      </div>
    </motion.article>
  );
}

export default ReviewCard;
