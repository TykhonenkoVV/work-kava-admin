import styled from '@emotion/styled';
import { Backdrop } from 'Components/Global/Modal/Modal.styled';

export const BackdropHeader = styled(Backdrop)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 180px 0 50px 0;
  background-color: ${({ theme }) => theme.colors.primaryBackground};

  &::before {
    content: '';
    position: absolute;
    top: -25px;
    left: -45px;

    width: 236px;
    height: 178px;

    background-image: url('https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/coffee_bean_7E7262.svg');
    background-repeat: no-repeat;
    transform: scaleX(-1);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 24px;
  top: 10px;
`;
