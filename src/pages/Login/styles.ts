import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--bs-blue);
`;

export const Card = styled.div`
  width: 354px;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--bs-white);

  padding: 48px;

  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;

  img {
    margin-bottom: 24px;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 400;
    color: #060606;
    margin-bottom: 16px;
  }
`;
