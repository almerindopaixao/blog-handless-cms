import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.medium};
    color: ${({ theme }) => theme.colors.secondary};
  }
  `}
`;
