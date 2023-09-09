import { CarProps } from "./cars.interface";

export type BookmarksContextType = {
  bookmarks: CarProps[];
  handleBookmark: (carData: CarProps) => void;
};
