import styled, { css } from "styled-components";

interface LoginActionProps {
  children: React.ReactNode;
  color: string;
  onclick: () => void;
}

type StylesLoginProps = {
  color: string;
};

const StyledSpan = styled.button<StylesLoginProps>`
  border: none;
  display: inline-flex;
  height: 4rem;
  width: 7rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2.2rem;
  box-shadow: var(--shadow-md);
  border-radius: 1rem;
  background-color: var(--color-white);

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

  &:disabled {
    background-color: var(--color-border);
    cursor: not-allowed;
  }
`;

function LoginAction({ children, color, onclick }: LoginActionProps) {
  return (
    <StyledSpan onClick={onclick} color={color}>
      {children}
    </StyledSpan>
  );
}

export default LoginAction;
