import styled from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    margin-top: 16px;
    margin-bottom: 24px;
  }

  span {
    width: 55px;
    padding: 0.475rem 1rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: #293240;
    background-color: #f0f2f8;
    border: 2px solid #ced4da;
    border-radius: 4px 0 0 4px;

    svg {
      margin-bottom: 0;
    }
  }

  div {
    display: flex;
    align-items: center;
    border: 2px solid #ced4da;
    border-left: none;
    border-radius: 0 4px 4px 0;

    input {
      min-width: 150px;
      width: 100%;
      padding: 0.575rem 0.3rem;
      border: none;
      margin: 0;

      &::placeholder {
        color: #666360;
        font-size: 15px;
      }
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    position: absolute;
    background: #c53030;
    color: #ffffff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
