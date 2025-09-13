import styled from '@emotion/styled';
import { Container } from 'styles/components.styled';

export const HeaderStyled = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.buttonsBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryText};
  fill: ${({ theme }) => theme.colors.primaryText};
`;

export const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const SetButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const BurgerMenuButton = styled.button`
  width: 32px;
  height: 32px;
`;
