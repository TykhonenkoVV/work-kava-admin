import styled from '@emotion/styled';
import { ActionButton, Caption } from 'styles/components.styled';

export const BlockCaption = styled(Caption)`
  flex-shrink: 0;
  margin-inline-end: 10px;
  &.long {
    width: 60px;
  }
`;
export const Label = styled.label`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Instruments = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const InstrumentsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  outline: unset;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.elementsBackground};
`;

export const StyledActionButton = styled(ActionButton)`
  flex-shrink: 0;
  margin-inline-start: 10px;
  width: 32px;
  height: 32px;
  color: currentColor;
  fill: currentColor;
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.primaryDisabledText};
    background-color: ${({ theme }) => theme.colors.buttonsDisabledBackground};
  }
`;

export const StyledTextarea = styled.textarea`
  outline: unset;
  width: 100%;
  height: 100px;
  padding-inline-start: 10px;
  padding-top: 10px;
  padding-inline-end: 10px;
  padding-bottom: 10px;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.elementsBackground};
  resize: none;
`;
