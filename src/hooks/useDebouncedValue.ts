import { useEffect, useState } from 'react';

export function useDebouncedValue<T>(value: T, delay: number = 300) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setDebouncedValue(value);
      // console.log('inside debounce hook ', debouncedValue);
    }, delay);

    console.log('updating to:', value);

    return () => {
      console.log('.........cleaner worked..........');
      window.clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
}
