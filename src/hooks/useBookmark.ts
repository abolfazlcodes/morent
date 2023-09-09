import { useEffect, useState } from "react";
import { useBookmarks } from "../context/Bookmarks";
import { BookmarksContextType } from "../interfaces/contexts.interface";
import { CarProps } from "../interfaces/cars.interface";

export function useBookmark(carData: CarProps) {
  const { bookmarks } = useBookmarks() as BookmarksContextType;

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const isBookmarked = bookmarks.find(
      (bookmark: CarProps) => bookmark.id === carData.id
    );

    setIsBookmarked(Boolean(isBookmarked));
  }, [bookmarks, carData.id]);

  return { isBookmarked };
}
