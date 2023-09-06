import { Link } from "react-router-dom";
import Button from "./Button";
import { css, styled } from "styled-components";

type StyledAdTypes = {
  type: "adTypeA" | "adTypeB";
};

const StyledAd = styled.article<StyledAdTypes>`
  position: relative;
  width: 50%;
  height: max-content;
  padding: 1.5rem;
  border-radius: 1rem;

  ${(props) =>
    props.type === "adTypeA" &&
    css`
      background-image: repeating-radial-gradient(
        circle at bottom left,
        #54a6ff,
        #54a6ff 30px,
        #90c6ff 20px,
        #90c6ff 40px
      );
    `}

  ${(props) =>
    props.type === "adTypeB" &&
    css`
      background-color: #3563e9;

      @media screen and (max-width: 975px) {
        display: none;
      }
    `}

  @media screen and (max-width: 975px) {
    width: 100%;
  }
`;

const StyledAdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  height: 100%;
  width: 45%;
  gap: 2rem;

  @media screen and (max-width: 975px) {
    width: 100%;
  }
`;

const StyledAdImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 5%;
  width: 30rem;

  @media screen and (max-width: 975px) {
    width: 25rem;
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const StyledAdDescription = styled.p`
  font-size: 1.5rem;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;

StyledAd.defaultProps = {
  type: "adTypeA",
};

interface AdProps {
  type: "adTypeA" | "adTypeB";
  image: string;
  title: string;
  description: string;
}

const Ad = ({ type, image, description, title }: AdProps) => {
  return (
    <StyledAd type={type}>
      <StyledAdWrapper>
        <h2
          style={{
            fontSize: "3.2rem",
            fontWeight: "500",
          }}
        >
          {title}
        </h2>
        <StyledAdDescription>{description}</StyledAdDescription>
        <Button
          size='medium'
          variation={type === "adTypeA" ? "primary" : "secondary"}
        >
          <Link to='/all-cars'>Rent Car</Link>
        </Button>
      </StyledAdWrapper>

      <StyledAdImage src={image} alt='sample car' />
    </StyledAd>
  );
};

export default Ad;
