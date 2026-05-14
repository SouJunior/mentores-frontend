export const AnimationTextHero = {
  initial: { y: -15, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: 25,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
