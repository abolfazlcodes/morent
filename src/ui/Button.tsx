import { css, styled } from "styled-components";

const sizes = {
  smallSquare: css`
    width: 6rem;
    height: 6rem;
    font-size: 1rem;
    border-radius: 1rem;
  `,

  small: css`
    width: 11rem;
    height: 4rem;
    border-radius: 0.4rem;
    padding: 0 2rem;
    font-size: 1.2rem;
  `,

  medium: css`
    width: 13rem;
    height: 4.2rem;
    border-radius: 0.4rem;
    padding: 0 2rem;
    font-size: 1.4rem;
  `,

  large: css`
    width: 16rem;
    height: 4.4rem;
    border-radius: 0.4rem;
    padding: 0 2rem;
    font-size: 1.5rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color-white);
    background-color: var(--color-blue-800);

    &:hover {
      background-color: var(--color-blue-hover);
    }
  `,

  secondary: css`
    color: var(--color-white);
    background-color: var(--color-blue-600);

    &:hover {
      background-color: var(--color-blue-700);
    }
  `,
};

// interface and type
type StyledButtonTypes = {
  size: "smallSquare" | "small" | "medium" | "large";
  variation: "primary" | "secondary";
};

const Button = styled.button<StyledButtonTypes>`
  border: none;
  box-shadow: var(--shadow-sm);

  ${({ size }) => sizes[size]}
  ${({ variation }) => variations[variation]}
`;

Button.defaultProps = {
  size: "medium",
  variation: "primary",
};

export default Button;
