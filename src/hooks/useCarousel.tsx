import { useState, useEffect } from "react";

interface CarouselProps<T> {
  items: T[];
  interval?: number;
}

interface CarouselState {
  currentIndex: number;
}

const useCarousel = <T,>({ items, interval = 3000 }: CarouselProps<T>) => {
  const [state, setState] = useState<CarouselState>({ currentIndex: 0 });

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setState((prevState) => ({
  //       currentIndex: (prevState.currentIndex + 1) % items.length,
  //     }));
  //   }, interval);

  //   return () => clearInterval(intervalId);
  // }, [items, interval]);

  const goToIndex = (index: number) => {
    setState({ currentIndex: index });
  };

  const next = () => {
    setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % items.length,
    }));
  };

  const prev = () => {
    setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + items.length) % items.length,
    }));
  };

  return {
    currentIndex: state.currentIndex,
    next,
    prev,
    goToIndex,
  };
};

export default useCarousel;
