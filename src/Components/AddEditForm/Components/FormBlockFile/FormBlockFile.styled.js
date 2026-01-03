import styled from '@emotion/styled';
import { BlockTitle } from 'styles/components.styled';

export const BlockFileTitle = styled(BlockTitle)`
  margin-block-end: 0;
`;

export const ChangeFileButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.buttonsBackground};
`;

export const BlockWrapper = styled.div`
  @media screen and (${({ theme }) => theme.devices.onlyMobile}) {
    flex-direction: column;
  }
  display: flex;
  gap: 16px;
`;

export const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FileLabel = styled.label`
  display: flex;
  flex-direction: column;
  & span {
    margin-block-end: 16px;
  }
`;

export const Img = styled.img`
  border-radius: 10px;
  background-color: #deb887;
`;
