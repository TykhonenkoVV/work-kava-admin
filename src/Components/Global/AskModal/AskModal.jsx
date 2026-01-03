import { lang } from 'lang/lang';
import { AskModalButton, AskModalTitle } from './AskModal.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

export const AskModal = ({ action, onCloseModal, data, names }) => {
  const { locale } = useSelector(selectUser);

  const onAction = () => {
    if (action) action(data);
    onCloseModal();
  };

  const onCencel = () => {
    onCloseModal();
  };

  return (
    <>
      <AskModalTitle>{lang[locale].select_an_action}</AskModalTitle>
      <AskModalButton onClick={onCencel}>{names.cancel}</AskModalButton>
      <AskModalButton onClick={onAction}>{names.action}</AskModalButton>
    </>
  );
};
