import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  color: #ffffff;
  font-weight: 500;
  background-color: #7267ef;
  border-color: #7267ef;
  padding: 0.575rem 1.3rem;
  border-radius: 4px;
  border: 2px solid transparent;
  margin-bottom: 2rem;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#7267ef')};
  }
`;
