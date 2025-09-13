import { lang } from 'lang/lang';
import {
  AskModalButton,
  AskModalTitle,
  AskModalWrapper
} from './AskModal.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

export const AskModal = ({ action, onCloseModal, data, names }) => {
  const { local } = useSelector(selectUser);

  const onAction = () => {
    if (action) action();
  };

  const onCencel = () => {
    onCloseModal();
  };

  return (
    <AskModalWrapper>
      <AskModalTitle>{lang[local].select_an_action}</AskModalTitle>
      <AskModalButton onClick={onCencel}>{names.cancel}</AskModalButton>
      <AskModalButton onClick={onAction}>{names.action}</AskModalButton>
    </AskModalWrapper>
  );
};
