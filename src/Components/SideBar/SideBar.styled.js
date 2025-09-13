import styled from '@emotion/styled';

export const StyledSideBar = styled.div`
  flex-shrink: 0;
  width: 240px;
  background-color: ${({ theme }) => theme.colors.buttonsBackground};
  padding-block-start: 24px;
  padding-block-end: 24px;
  text-align: center;
`;
