import styled from '@emotion/styled';

export const LangMenuUl = styled.ul`
  position: absolute;
  bottom: 50px;
  left: -10px;
  width: 150px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.langMenuBackground};
  visibility: 1;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  transition: visibility ${props => props.theme.baseTransition};
  &.visually-hidden {
    position: absolute;
    visibility: 0;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
  @media screen and (${props => props.theme.devices.middleTablet}) {
    top: 56px;
    bottom: unset;
    right: 50px;
    left: unset;
  }
`;

export const LangMenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const SetBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LangBtn = styled(SetBtn)`
  transition: color ${props => props.theme.baseTransition};
  &:hover {
    border-color: ${props => props.theme.colors.whiteButtonHover};
    color: ${props => props.theme.colors.whiteButtonHover};
  }
  & img {
    pointer-events: none;
    width: 40px;
    height: 40px;
    border: 2px solid ${props => props.theme.colors.white};
    border-radius: 10px;
    transition: border-color ${props => props.theme.baseTransition};
  }
  & span {
    pointer-events: none;
  }
  &:hover img {
    border-color: ${props => props.theme.colors.whiteButtonHover};
  }
`;
