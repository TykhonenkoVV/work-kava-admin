import { StyledLink } from 'styles/components.styled';
import {
  InfoModalCaption,
  InfoModalTitle,
  InfoModalWrapper
} from './InfoModal.styled';

export const InfoModal = ({ data, text }) => {
  return (
    <InfoModalWrapper>
      <InfoModalTitle>Info</InfoModalTitle>
      <InfoModalCaption>{text}</InfoModalCaption>
      <StyledLink to={data}>Ok</StyledLink>
    </InfoModalWrapper>
  );
};
