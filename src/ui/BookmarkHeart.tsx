import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import styled, { css } from "styled-components";
import { useBookmarks } from "../context/Bookmarks";
import { BookmarksContextType } from "../interfaces/contexts.interface";
import { CarProps } from "../interfaces/cars.interface";
import { useBookmark } from "../hooks/useBookmark";

type StyledIconProps = {
  bookmarked: boolean;
};

const StyledIcon = styled.span<StyledIconProps>`
  font-size: 2.2rem;
  cursor: pointer;
  color: var(--color-grey-400);

  ${(props) =>
    props.bookmarked &&
    css`
      color: var(--color-red-800);
    `}
`;

interface BookmarkHeartProps {
  carData: CarProps;
}

function BookmarkHeart({ carData }: BookmarkHeartProps) {
  const { isBookmarked } = useBookmark(carData);
  const { handleBookmark } = useBookmarks() as BookmarksContextType;

  const handleAddBookmark = () => {
    handleBookmark(carData);
  };

  return (
    <StyledIcon bookmarked={isBookmarked} onClick={handleAddBookmark}>
      {isBookmarked ? <HiHeart /> : <HiOutlineHeart />}
    </StyledIcon>
  );
}

export default BookmarkHeart;
