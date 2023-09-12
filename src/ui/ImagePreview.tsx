import styled from "styled-components";

const StyledImages = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 32rem;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;

    span {
      display: inline-flex;
      width: 100%;
      height: 10rem;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 1rem;
    }
  }

  @media screen and (max-width: 990px) {
    width: 90%;

    img {
      height: 30rem;
    }

    div {
      span {
        height: 12rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

interface ImagePreviewProps {
  thumbnail: string;
  images?: string[];
}

function ImagePreview({ thumbnail }: ImagePreviewProps) {
  return (
    <StyledImages>
      <img src={thumbnail} />

      <div>
        <span>other images</span>
        <span>other images</span>
        <span>other images</span>
      </div>
    </StyledImages>
  );
}

export default ImagePreview;
