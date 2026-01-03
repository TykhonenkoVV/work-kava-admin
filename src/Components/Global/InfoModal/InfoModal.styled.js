import styled from '@emotion/styled';

export const InfoModalTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonsBackground};
`;

export const InfoModalCaption = styled.p`
  margin-block-end: 16px;
  text-align: center;
`;
