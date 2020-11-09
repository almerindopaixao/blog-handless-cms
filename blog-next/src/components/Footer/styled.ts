import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    background: ${theme.colors.primary};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.medium};
  `}

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
