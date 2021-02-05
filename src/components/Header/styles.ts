import styled, { css } from 'styled-components';

interface ProsToHide {
  toHide: boolean;
}

export const Container = styled.div`
  height: 80px;
  background: #fff;
  box-shadow: 0 1px 0 0 #f1f1f1;
  border-bottom: 1px solid #f1f1f1;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0px 30px;
`;

export const Search = styled.div`
  margin-right: 20px;

  svg {
    color: #525b69;
  }
`;

export const Profile = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 3px;
  flex-direction: column;

  :hover {
    box-shadow: 0 4px 24px 0 rgb(62 57 107 / 18%);
  }

  div {
    display: flex;
    img {
      width: 40px;
      height: 40px;

      border-radius: 50%;
      margin-right: 10px;
    }

    div {
      height: 40px;
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 15px;
        font-weight: 600;
        color: #525b69;
      }

      span {
        font-size: 12px;
        font-weight: 400;
        color: rgba(82, 91, 105, 0.7);
      }
    }
  }
`;

export const ToHider = styled.div<ProsToHide>`
  display: none;
  width: 150px;
  height: 100px;
  margin-right: 30px;
  margin-top: 5px;
  position: absolute;
  border-radius: 3px;
  padding: 5px 10px;

  background: white;
  box-shadow: 0 4px 24px 0 rgb(62 57 107 / 18%);

  right: 0;
  top: 70px;

  ${(props) =>
    props.toHide &&
    css`
      display: initial;
    `}

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;

    div {
      color: #525b69;
      font-weight: bold;
      cursor: pointer;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      color: #525b69;
      font-weight: bold;
    }

    svg {
      color: #525b69;
      cursor: pointer;

      :hover {
        color: red;
      }
    }
  }
`;
