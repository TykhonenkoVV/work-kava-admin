import styled from '@emotion/styled';
import { StyledButton } from 'styles/components.styled';

export const AskModalTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
`;

export const AskModalButton = styled(StyledButton)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
