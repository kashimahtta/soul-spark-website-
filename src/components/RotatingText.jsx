import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RotatingText = forwardRef(function RotatingText(
  {
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0.025,
    staggerFrom = "first",
    loop = true,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  },
  ref,
) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const splitIntoCharacters = (text) => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (segment) => segment.segment);
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex] || "";
    if (splitBy === "characters") {
      return currentText.split(" ").map((word, index, words) => ({
        characters: splitIntoCharacters(word),
        needsSpace: index !== words.length - 1,
      }));
    }

    if (splitBy === "words") {
      return currentText.split(" ").map((word, index, words) => ({
        characters: [word],
        needsSpace: index !== words.length - 1,
      }));
    }

    return [{ characters: [currentText], needsSpace: false }];
  }, [texts, currentTextIndex, splitBy]);

  const getStaggerDelay = useCallback(
    (index, totalCharacters) => {
      if (staggerFrom === "last") {
        return (totalCharacters - 1 - index) * staggerDuration;
      }
      if (staggerFrom === "center") {
        return (
          Math.abs(Math.floor(totalCharacters / 2) - index) * staggerDuration
        );
      }
      return index * staggerDuration;
    },
    [staggerFrom, staggerDuration],
  );

  const handleIndexChange = useCallback(
    (newIndex) => {
      setCurrentTextIndex(newIndex);
      onNext?.(newIndex);
    },
    [onNext],
  );

  const next = useCallback(() => {
    const nextIndex =
      currentTextIndex === texts.length - 1
        ? loop
          ? 0
          : currentTextIndex
        : currentTextIndex + 1;

    if (nextIndex !== currentTextIndex) handleIndexChange(nextIndex);
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const previous = useCallback(() => {
    const previousIndex =
      currentTextIndex === 0
        ? loop
          ? texts.length - 1
          : currentTextIndex
        : currentTextIndex - 1;

    if (previousIndex !== currentTextIndex) handleIndexChange(previousIndex);
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const jumpTo = useCallback(
    (index) => {
      const validIndex = Math.max(0, Math.min(index, texts.length - 1));
      if (validIndex !== currentTextIndex) handleIndexChange(validIndex);
    },
    [texts.length, currentTextIndex, handleIndexChange],
  );

  const reset = useCallback(() => {
    if (currentTextIndex !== 0) handleIndexChange(0);
  }, [currentTextIndex, handleIndexChange]);

  useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset }), [
    next,
    previous,
    jumpTo,
    reset,
  ]);

  useEffect(() => {
    if (!auto || texts.length < 2) return undefined;
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto, texts.length]);

  const totalCharacters = elements.reduce(
    (total, word) => total + word.characters.length,
    0,
  );

  return (
    <motion.span
      className={joinClasses("relative inline-flex flex-wrap", mainClassName)}
      {...rest}
      layout
      transition={transition}
    >
      <span className="sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence
        mode={animatePresenceMode}
        initial={animatePresenceInitial}
      >
        <motion.span
          key={currentTextIndex}
          className={joinClasses("inline-flex flex-wrap", splitLevelClassName)}
          layout
          aria-hidden="true"
        >
          {elements.map((word, wordIndex, words) => {
            const previousCharacters = words
              .slice(0, wordIndex)
              .reduce(
                (total, currentWord) => total + currentWord.characters.length,
                0,
              );

            return (
              <span key={wordIndex} className="inline-flex">
                {word.characters.map((character, characterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${characterIndex}`}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(
                        previousCharacters + characterIndex,
                        totalCharacters,
                      ),
                    }}
                    className={joinClasses(
                      "inline-block",
                      elementLevelClassName,
                    )}
                  >
                    {character}
                  </motion.span>
                ))}
                {word.needsSpace && <span className="whitespace-pre"> </span>}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = "RotatingText";

export default RotatingText;
