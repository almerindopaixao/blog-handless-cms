import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 3rem;
`;

export const Categorization = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacings.medium} 0;
`;
