import styled from 'styled-components';

export const Container = styled.div`
  height: 1000px;
  background-color: #f0f2f8;

  overflow-y: auto;
`;

export const Header = styled.div`
  height: 55px;
  background-color: white;

  padding: 0px 30px;

  display: flex;
  align-items: center;

  h5 {
    font-size: 16px;
    font-weight: 500;
    color: #060606;

    margin: 0 8px 0 0;
    padding: 0 8px 0 0;

    border-right: solid 1px #f0f2f8;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      a {
        font-size: 13px;
        color: #293240;

        padding: 0 8px 0 0;
        text-decoration: none;

        :hover {
          color: var(--bs-blue);
        }
      }
    }
  }

  span {
    font-size: 13px;
    color: #293240;
    padding: 0 8px 0 0;
  }
`;
