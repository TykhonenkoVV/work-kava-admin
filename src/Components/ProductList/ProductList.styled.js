import styled from '@emotion/styled';
import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import { Link } from 'react-router-dom';
import { StyledButton } from 'styles/components.styled';
import bgrImg from '../../images/archived_240.png';

export const CollectionTitle = styled.h1`
  margin-bottom: 16px;
`;

export const Icon = styled(SvgIcon)`
  rotate: ${({ rotate }) => rotate};
`;

export const FilterButton = styled(StyledButton)`
  justify-content: flex-start;
  column-gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  & span {
    margin-right: auto;
  }
`;

export const AddCardButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 10px;
  column-gap: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonsBackground};
`;

export const StyledList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: flex-start;
`;

export const StyledLi = styled.li`
  padding-inline-start: 12px;
  padding-block-start: 12px;
  padding-inline-end: 12px;
  padding-block-end: 12px;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.elementsBackground};
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    &:not(:last-child) {
      margin-block-end: 16px;
    }
  }
`;

export const CardTitle = styled.h2`
  margin-block-end: 10px;
  font-size: 18px;
  line-height: 1;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 47/26;
  flex-shrink: 0;
  margin-block-end: 10px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 10px;
  background-color: ${({ color }) => color};
  &.archived {
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #40404080;
      background-image: url(${bgrImg});
      background-size: cover;
      z-index: 1;
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 47/26;
  object-fit: cover;
`;

export const CardButtonContainer = styled.div`
  display: flex;
  column-gap: 16px;
  justify-content: center;
`;

export const CardLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonsBackground};
`;
