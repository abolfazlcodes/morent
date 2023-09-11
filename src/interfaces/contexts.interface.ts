import { CarProps } from "./cars.interface";
import { Dispatch, SetStateAction } from "react";

export type BookmarksContextType = {
  bookmarks: CarProps[];
  handleBookmark: (carData: CarProps) => void;
};

export type SidebarOpenContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
