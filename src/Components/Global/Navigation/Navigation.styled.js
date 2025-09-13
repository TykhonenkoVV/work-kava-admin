import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  font-size: 24px;
  line-height: 1.25;
  display: flex;
  column-gap: 40px;
  row-gap: 16px;
  flex-direction: column;
  align-items: center;
  @media screen and (${({ theme }) => theme.devices.middleTablet}) {
    row-gap: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (${({ theme }) => theme.devices.middleTablet}) {
    width: 100%;
    padding-block-start: 8px;
    padding-block-end: 8px;
    &.active {
      background-color: ${({ theme }) => theme.colors.primaryBackground};
    }
  }
`;

export const LinkItem = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  transition: ${props => `color ${props.theme.baseTransition}`};
  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.whiteButtonHover};
  }
`;
