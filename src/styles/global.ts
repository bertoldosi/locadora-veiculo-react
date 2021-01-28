import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    --bs-blue: #7267EF;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #e83e8c;
    --bs-red: #EA4D4D;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffa21d;
    --bs-green: #17C666;
    --bs-teal: #20c997;
    --bs-cyan: #3ec9d6;
    --bs-white: #ffffff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-primary: #7267EF;
    --bs-secondary: #6c757d;
    --bs-success: #17C666;
    --bs-info: #3ec9d6;
    --bs-warning: #ffa21d;
    --bs-danger: #EA4D4D;
    --bs-light: #f8f9fa;
    --bs-dark: #1c232f;
    --bs-font-sans-serif: "Inter", sans-serif;
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body{
    color: #000;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font-family: "Inter", sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }
  button{
    cursor: pointer;
  }
`;
