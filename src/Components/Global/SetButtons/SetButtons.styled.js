import styled from '@emotion/styled';

export const SetButtonWrapper = styled.div`
  position: relative;
  display: flex;
  column-gap: 16px;
  margin-top: auto;
`;

export const SetBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow: hidden;
`;

export const UserBtn = styled(SetBtn)`
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 4px;
  transition: fill ${({ theme }) => theme.baseTransition},
    color ${({ theme }) => theme.baseTransition};
  &:hover {
    fill: ${({ theme }) => theme.colors.whiteButtonHover};
    color: ${({ theme }) => theme.colors.whiteButtonHover};
  }
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
    border-radius: 4px;
    /* border-radius: 4px; */
  }
  & span {
    pointer-events: none;
  }
`;
