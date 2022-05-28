import { useEffect, useRef } from "react";

export const usePrevState = <T>(state: T) => {
  const prevState = useRef<T | null>();

  useEffect(() => {
    prevState.current = state;
  }, [prevState, state]);

  return state;
};
