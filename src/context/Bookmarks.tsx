import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CarProps } from "../interfaces/cars.interface";
import { BookmarksContextType } from "../interfaces/contexts.interface";

interface BookmarksProviderProps {
  children: React.ReactNode;
}

const BookmarksContext = createContext<BookmarksContextType | null>(null);

function BookmarksProvider({ children }: BookmarksProviderProps) {
  const { value: bookmarks, setValue } = useLocalStorage([], "bookmarks");

  const handleAddBookmark = (carData: CarProps) => {
    setValue((prevBookmarks: CarProps[]) => [...prevBookmarks, carData]);
  };

  const handleRemoveBookmark = (carId: number) => {
    setValue((prevBookmarks: CarProps[]) =>
      prevBookmarks.filter((bookmark) => bookmark.id !== carId)
    );
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarks,
        handleAddBookmark,
        handleRemoveBookmark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

function useBookmarks() {
  const context = useContext(BookmarksContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of BookmarksProvider");

  return context;
}

export { BookmarksProvider, useBookmarks };
