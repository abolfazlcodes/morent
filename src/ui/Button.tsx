import { css, styled } from "styled-components";

const sizes = {
  smallSquare: css`
    width: 6rem;
    height: 6rem;
    font-size: 1rem;
    border-radius: 1rem;
  `,

  small: css`
    width: 9rem;
    height: 4.4rem;
    border-radius: 0.4rem;
    padding: 0 2rem;
  `,

  medium: css`
    width: 11rem;
    height: 4.4rem;
    border-radius: 0.4rem;
    padding: 0 2rem;
  `,

  large: css`
    width: 13.6rem;
    height: 4.4rem;
    border-radius: 0.4rem;
    padding: 0 2rem;
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

interface ButtonTypes extends StyledButtonTypes {
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button<StyledButtonTypes>`
  border: none;
  box-shadow: var(--shadow-sm);

  ${({ size }) => sizes[size]}
  ${({ variation }) => variations[variation]}
`;

// component
const Button: React.FC<ButtonTypes> = ({
  children,
  onClick,
  size = "medium",
  variation = "primary",
}) => {
  return (
    <StyledButton variation={variation} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
