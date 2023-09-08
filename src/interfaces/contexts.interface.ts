import { CarProps } from "./cars.interface";

export type BookmarksContextType = {
  bookmarks: CarProps[];
  handleAddBookmark: (carData: CarProps) => void;
  handleRemoveBookmark: (id: number) => void;
};
