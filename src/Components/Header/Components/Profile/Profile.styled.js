import styled from '@emotion/styled';

export const ProfileFromStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProfileTitleStyled = styled.p`
  order: 0;
  margin-block-end: 20px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  text-align: center;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    font-size: 28px;
  }
`;

export const LabelStyled = styled.label``;

export const InputWrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.darkSectionBefore};
  &:has(input:disabled) {
    & button {
      pointer-events: none;
    }
  }
  &:has(input:enabled) {
    &:hover {
      fill: ${({ theme }) => theme.colors.hover};
    }
    &:hover input {
      color: ${({ theme }) => theme.colors.hover};
      border-color: ${({ theme }) => theme.colors.hover};
    }
    &:hover svg {
      fill: ${({ theme }) => theme.colors.hover};
    }
  }
  & > .js-class {
    position: absolute;
    top: 8px;
    left: 8px;
    pointer-events: none;
    transition: rotate ${({ theme }) => theme.baseTransition};
    & > .js-class.rotate {
      left: unset;
      right: 16px;
    }
  }
`;

export const InputStyled = styled.input`
  display: flex;
  width: 100%;
  height: 40px;
  font-size: 20px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primaryText};
  outline: none;
  padding-inline-start: 40px;
  padding-inline-end: 8px;
  border: 1px solid ${({ theme }) => theme.colors.buttonsBackground};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.elementsBackground};
  transition: color ${({ theme }) => theme.baseTransition},
    border-color ${({ theme }) => theme.baseTransition};
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.primaryDisabledText};
    border-color: ${({ theme }) => theme.colors.darkSectionBefore};
    &::placeholder {
      color: ${({ theme }) => theme.colors.primaryDisabledText};
    }
  }
  &:disabled + svg {
    fill: ${({ theme }) => theme.colors.primaryDisabledText};
  }
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    font-size: 24px;
  }
`;

export const CheckBoxLabelStyled = styled.label`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
`;

export const CheckBoxInput = styled.input`
  &:checked {
    & + span::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 8px;
      height: 8px;
      background-color: ${({ theme }) => theme.colors.primaryText};
    }
  }
`;

export const CheckBox = styled.span`
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.primaryText};
`;

export const RightButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  fill: inherit;
`;

export const ButtonLogOut = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-block-start: 20px;
  font-size: 16px;
  font-weight: 700;
  fill: currentColor;
  color: ${({ theme }) => theme.colors.primaryText};
  transition: color ${({ theme }) => theme.baseTransition};
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;
