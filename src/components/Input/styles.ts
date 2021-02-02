import styled, { css } from 'styled-components';

interface PropsError {
  isError: boolean;
}

export const Container = styled.div<PropsError>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  > span {
    width: 55px;
    padding: 0.475rem 1rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: #293240;
    background-color: #f0f2f8;
    border: 2px solid #ced4da;
    border-radius: 4px 0 0 4px;

    ${(props) =>
      props.isError &&
      css`
        border: 2px solid red;
        border-radius: 4px 0 0 4px;
      `}

    ${(props) =>
      props.isError &&
      css`
        svg {
          color: red;
        }
      `}
  }

  > div {
    display: flex;
    position: relative;
    align-items: center;
    border: 2px solid #ced4da;
    border-left: none;
    border-radius: 0 4px 4px 0;

    ${(props) =>
      props.isError &&
      css`
        border: 2px solid red;
        border-left: none;
      `}

    input {
      min-width: 150px;
      width: 100%;
      padding: 0.375rem 0.8rem;
      border: none;

      &::placeholder {
        color: #666360;
        font-size: 15px;
      }
    }

    svg {
      position: absolute;
      right: -5%;
      opacity: 0;
      visibility: hidden;
      background-color: red;
      border-radius: 50%;
      color: white;
      transition: 1s;
    }

    ${(props) =>
      props.isError &&
      css`
        svg {
          opacity: 1;
          visibility: visible;
        }
      `}
  }
`;
