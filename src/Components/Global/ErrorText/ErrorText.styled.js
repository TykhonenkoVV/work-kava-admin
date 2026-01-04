import styled from '@emotion/styled';

export const StyledText = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${props => props.theme.colors.validationError};
  margin-block-end: 10px;
`;
