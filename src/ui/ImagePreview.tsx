import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

const StyledImages = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 33rem;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
  }

  @media screen and (max-width: 990px) {
    width: 90%;

    img {
      height: 34rem;
    }

    div {
      padding: 0 1rem;

      img {
        height: 12rem;
        width: 22rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    width: 100%;

    div {
      flex-wrap: wrap;

      img {
        max-width: 100%;
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;

  img {
    width: 22rem;
    object-fit: cover;
    object-position: center;
    height: 13rem;

    transition: all 0.1s ease-in;
  }

  @media screen and (max-width: 990px) {
    img {
      height: 12rem;
      width: 100%;
    }
  }
`;

const StyledImageItem = styled(LazyLoadImage)`
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    outline: 2px solid var(--color-blue-600);
    outline-offset: 3px;
  }
`;

interface ImagePreviewProps {
  thumbnail?: string;
  images?: string[];
}

const activeImageStyle = {
  outline: "2px solid #3563E9",
  outlineOffset: "3px",
};

function ImagePreview({ thumbnail, images }: ImagePreviewProps) {
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    thumbnail
  );

  function handleChangeImagePreview(image: string) {
    setPreviewImage(image);
  }

  return (
    <StyledImages>
      <LazyLoadImage src={previewImage} effect='blur' />

      <Wrapper>
        {images?.map((image) => (
          <StyledImageItem
            src={image}
            key={image}
            onClick={() => handleChangeImagePreview(image)}
            style={image === previewImage ? activeImageStyle : {}}
            effect='blur'
          />
        ))}
      </Wrapper>
    </StyledImages>
  );
}

export default ImagePreview;
