import { useDispatch } from 'react-redux';
import { LangMenu } from './Components/LangMenu/LangMenu';
import { LangBtn, SetButtonWrapper, UserBtn } from './SetButtons.styled';
import {
  FLAG_DE_URL,
  FLAG_UA_URL,
  FLAG_UK_URL,
  IMAGE_CLOUD_URL,
  LOCAL_DE,
  LOCAL_EN,
  PATCH_OPERATION
} from 'utils/GlobalUtils';
import { useProductState } from 'hooks/useProductState';
import { useModal } from 'hooks/useModal';
import { useClickOutsideModal } from 'hooks/useClickOutsideModal';
import { useRef } from 'react';
import { Loader } from '../Loader/Loader';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { Modal } from '../Modal/Modal';
import { Profile } from 'Components/Header/Components/Profile/Profile';
import { useAuth } from 'hooks/useAuth';

export const SetButtons = () => {
  const { locale, avatarURL } = useAuth();
  const { isLoading, operation } = useProductState(null, PATCH_OPERATION);
  const dispatch = useDispatch();

  const langMenuRef = useRef(null);
  const langButtonRef = useRef(null);

  const {
    isModalOpen: isLangMenuOpen,
    closeModal: closeLangMenu,
    toggleModal: toggleLangMenu
  } = useModal();
  const {
    isModalOpen: isProfileModalOpen,
    closeModal: closeProfileModal,
    openModal: openProfileModal
  } = useModal();

  useClickOutsideModal([langMenuRef, langButtonRef], closeLangMenu, 'langMenu');

  const handleLangClick = e => {
    closeLangMenu();
    dispatch(operation({ locale: e.currentTarget.id }));
  };

  return (
    <>
      {isLoading && <Loader />}
      <SetButtonWrapper>
        <LangMenu
          isModalOpen={isLangMenuOpen}
          forwardedRef={langMenuRef}
          handleCklick={handleLangClick}
        />
        <LangBtn type="button" onClick={toggleLangMenu} ref={langButtonRef}>
          <img
            width={40}
            height={40}
            src={
              locale === LOCAL_EN
                ? FLAG_UK_URL
                : locale === LOCAL_DE
                ? FLAG_DE_URL
                : FLAG_UA_URL
            }
            alt="flag"
          />
        </LangBtn>
        <UserBtn type="button" onClick={openProfileModal}>
          {avatarURL === '' ? (
            <SvgIcon w={36} h={36} icon={'avatar'} aria-label="icon user" />
          ) : (
            <img
              src={`${IMAGE_CLOUD_URL}w_36,h_36,c_fill/${avatarURL}`}
              alt="user-avatar"
            />
          )}
        </UserBtn>
      </SetButtonWrapper>
      {isProfileModalOpen && (
        <Modal onClose={closeProfileModal}>
          <Profile action={closeProfileModal} />
        </Modal>
      )}
    </>
  );
};
