export function slideInFromLeft(delay: number = 0) {
  return {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut", // 👈 smooth natural easing
        type: "spring",  // 👈 optional (makes motion feel more lively)
        stiffness: 80,   // 👈 adjust spring tension
      },
    },
  };
}

  
  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };