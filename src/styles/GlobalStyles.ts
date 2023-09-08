import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
    /* with the class and making it the default without class  */
   &, &.light-mode {
        --color-white: #fff;
        --color-black: #1A202C;
        --color-black-300: #13131399;
        --color-grey-50: #f9fafb;
        --color-grey-100: #f3f4f6;
        --color-grey-300: #d1d5db;
        --color-grey-400: #90A3BF;
        --color-grey-500: #596780;
        --color-grey-700: #374151;
        --color-bg-grey: #F6F7F9;
        --color-blue-600: #54A6FF;
        --color-blue-700: #4099f9;
        --color-blue-800: #3563E9;
        --color-blue-hover: #0a277b;
        --color-red-700: #b91c1c;
        --color-red-800: #FF4423;
        --color-yellow-500: #FBAD39;

        --color-bg: ##F3F5F7;
        --color-border: #C3D4E9;
    
        --backdrop-color: rgba(255, 255, 255, 0.1);
    
        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

        --image-grayscale: 0;
        --image-opacity: 100%;
    }

    &.dark-mode {
        --color-white: #fff;
        --color-black: #1A202C;
        --color-black-300: #13131399;
        --color-grey-400: #90A3BF;
        --color-grey-500: #596780;
        --color-bg-grey: #F6F7F9;
        --color-blue-600: #54A6FF;
        --color-blue-700: #4099f9;
        --color-blue-800: #3563E9;
        --color-blue-hover: #0a277b;
        --color-red-700: #ED3F3F;
        --color-red-800: #FF4423;
        --color-yellow-500: #FBAD39;

        --color-bg: ##F3F5F7;
        --color-border: #C3D4E9;


        --backdrop-color: rgba(0, 0, 0, 0.3);

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

        --image-grayscale: 10%;
        --image-opacity: 90%;
    }

    

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    }

    *,
    *::before,
    *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
    }

    html {
    font-size: 62.5%;
    }

    body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: var(--color-bg-grey);
    height: 100dvh;

    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
    }

    input,
    button,
    textarea,
    select {
    font: inherit;
    color: inherit;
    }

    button {
    cursor: pointer;
    }

    *:disabled {
    cursor: not-allowed;
    }

    select:disabled,
    input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
    }

    input:focus,
    button:focus,
    textarea:focus,
    select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
    }

    /* Parent selector, finally 😃 */
    button:has(svg) {
    line-height: 0;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    ul {
    list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    overflow-wrap: break-word;
    hyphens: auto;
    }

    img {
    max-width: 100%;

    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
    }
`;

export default GlobalStyles;
