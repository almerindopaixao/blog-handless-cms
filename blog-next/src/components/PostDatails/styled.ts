import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: ${({ theme }) => theme.spacings.medium} 0;
  display: flex;
  align-items: center;

  @media (max-width: 850px) {
    flex-direction: column;

    span {
      margin: ${({ theme }) => theme.spacings.small} 0;
    }
  }
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.medium};
    font-style: normal;
    margin: 0 ${theme.spacings.small};
    padding: 0.5rem 1rem;
    border-radius: 10px;
    cursor: pointer;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-style: italic;
  `}
`;
