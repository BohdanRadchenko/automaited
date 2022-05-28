import { useCallback, useEffect, useRef } from "react";
import debounce from "lodash.debounce";

const DEBOUNCED_TIME = 1000;

export const useDebounceLog = <T>(form: T) => {
  const formRef = useRef<T>(form);
  const nameRef = useRef<keyof T>();
  const valueRef = useRef<T[keyof T]>();

  // TODO: функция вызывается много раз с одинаковым параметром
  const requestLog = useCallback(
    (name: keyof T, value: T[keyof T]) => {
      const nRef = nameRef.current;
      const vRef = valueRef.current;
      if (nRef !== name || vRef !== value) {
        // TODO: функция вызывается ТОЛЬКО если есть изменения в состоянии рефов
        console.log("CHANGED", `${name.toString()}:`, value);
      }
      nameRef.current = name;
      valueRef.current = value;
    },
    [nameRef, valueRef]
  );

  // TODO: функция вызывается много раз с одинаковым параметром
  const debounced = useCallback(
    (name: keyof T, timeout: number | null = null) => {
      const d = debounce(() => {
        requestLog(name, formRef.current[name]);
      }, timeout ?? DEBOUNCED_TIME);
      d();
    },
    [formRef, requestLog]
  );

  useEffect(() => {
    if (formRef && formRef.current) {
      formRef.current = form;
    }
  }, [form, formRef]);

  return { debounced };
};
