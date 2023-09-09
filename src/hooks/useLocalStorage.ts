import { useEffect, useState } from "react";

export function useLocalStorage(initialState: [], key: string) {
  const [value, setValue] = useState(function () {
    const bookmarks = localStorage.getItem(key);
    return bookmarks ? JSON.parse(bookmarks) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return { value, setValue };
}
