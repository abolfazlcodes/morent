import { css, styled } from "styled-components";

const Heading = styled.h1`
  /* text-transform: capitalize; */

  ${(props) =>
    props.as === "h1" &&
    props.color === "black" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      color: var(--color-black);
    `}

  ${(props) =>
    props.as === "h1" &&
    props.color === "grey" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      color: var(--color-grey-400);
    `}

  ${(props) =>
    props.as === "h2" &&
    props.color === "black" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      color: var(--color-black);
    `}
  
  ${(props) =>
    props.as === "h2" &&
    props.color === "grey" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      color: var(--color-grey-400);
    `}
  
  ${(props) =>
    props.as === "h3" &&
    props.color === "black" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      color: var(--color-black);
    `}

  ${(props) =>
    props.as === "h3" &&
    props.color === "grey" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      color: var(--color-grey-400);
    `}

  ${(props) =>
    props.as === "h4" &&
    props.color === "black" &&
    css`
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--color-black);
    `}

    ${(props) =>
    props.as === "h4" &&
    props.color === "grey" &&
    css`
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--color-grey-400);
    `}

  line-height: 1.4;

  @media screen and (max-width: 675px) {
    font-size: 1.5rem;
  }
`;

export default Heading;
