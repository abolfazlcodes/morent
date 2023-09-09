import styled from "styled-components";

const RangeInput = styled.input`
  &[type="range"] {
    outline: none;
    height: 3px;
    flex: 1 1 auto;
    color: inherit;
    margin-right: 1em;
    background-color: #e3e3e3;
    /* background-image: linear-gradient(currentColor, currentColor); */
    background-size: 0 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0;
  }

  &::-webkit-slider-runnable-track {
    border: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #e3e3e3;
  }

  &::-moz-range-track {
    border: none;
    background: transparent;
    -moz-appearance: none;
    appearance: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    border: 0;
    background: currentColor;
    border-radius: 50% 50%;
    -webkit-appearance: none;
    appearance: none;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border: 0;
    background: currentColor;
    border-radius: 50% 50%;
    -moz-appearance: none;
    appearance: none;
  }
`;

RangeInput.defaultProps = {
  type: "range",
};

export default RangeInput;
