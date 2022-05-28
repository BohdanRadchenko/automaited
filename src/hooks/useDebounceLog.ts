import { useCallback, useEffect, useRef } from "react";
import debounce from "lodash.debounce";

const DEBOUNCED_TIME = 1000;

export const useDebounceLog = <T>(form: T) => {
  const formRef = useRef<T>(form);

  const log = useCallback(
    (name: keyof T, timeout: number | null = null) => {
      const debounced = debounce(() => {
        console.log("CHANGED", `${name.toString()}:`, formRef.current[name]);
      }, timeout ?? DEBOUNCED_TIME);
      debounced();
    },
    [formRef]
  );

  useEffect(() => {
    if (formRef && formRef.current) {
      formRef.current = form;
    }
  }, [form, formRef]);

  return { log };
};
