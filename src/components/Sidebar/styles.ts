import styled, { css } from 'styled-components';

interface PropsToHide {
  toHide: boolean;
}

export const Container = styled.div`
  width: 280px;
  background-color: #1c232f;
`;

export const Header = styled.div`
  height: 70px;
  background-color: #161c25;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: white;
  }
`;

export const Menu = styled.div<PropsToHide>`
  h2 {
    color: white;
    font-size: 11px;
    font-weight: bold;
    padding: 15px 30px;
  }

  div {
    .title {
      padding: 15px 30px;
      display: flex;
      align-items: center;
      background-color: #161c25;
      margin-bottom: 40px;
      span {
        width: 100%;
        color: white;
        margin-left: 10px;
        font-size: 13px;
      }

      svg {
        color: white;
      }
    }
    .content {
      .content-header {
        padding: 15px 30px;
        display: flex;
        align-items: center;
        cursor: pointer;

        :hover {
          background-color: #161c25;
        }

        ${(props) =>
          props.toHide &&
          css`
            background-color: #161c25;
          `}

        span {
          width: 100%;
          color: white;
          margin-left: 10px;
          font-size: 13px;
        }

        svg {
          color: white;
        }
      }
      ul {
        display: none;
        flex-direction: column;
        padding: 0px 30px;
        margin: 5px 0 5px 0;
        margin-bottom: 20px;

        ${(props) =>
          props.toHide &&
          css`
            display: flex;
          `}
      }

      a {
        text-decoration: none;
        font-size: 13px;
      }
    }
  }
`;
