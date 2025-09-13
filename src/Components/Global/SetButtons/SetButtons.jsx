import { useDispatch, useSelector } from 'react-redux';
import { LangMenu } from './Components/LangMenu/LangMenu';
import { LangBtn, SetButtonWrapper, UserBtn } from './SetButtons.styled';
import {
  FLAG_DE_URL,
  FLAG_UA_URL,
  FLAG_UK_URL,
  LOCAL_DE,
  LOCAL_EN,
  PATCH_OPERATION
} from 'utils/GlobalUtils';
import { selectUser } from 'store/auth/selectors';
import { useProductState } from 'hooks/useProductState';
import { useModal } from 'hooks/useModal';
import { useClickOutsideModal } from 'hooks/useClickOutsideModal';
import { useRef } from 'react';
import { Loader } from '../Loader/Loader';
import { SvgIcon } from '../SvgIcon/SvgIcon';

export const SetButtons = () => {
  const { local } = useSelector(selectUser);
  const { isLoading, operation } = useProductState(null, PATCH_OPERATION);
  const dispatch = useDispatch();

  const langMenuRef = useRef(null);
  const langButtonRef = useRef(null);

  const { isModalOpen, closeModal, toggleModal } = useModal();

  useClickOutsideModal([langMenuRef, langButtonRef], closeModal, 'langMenu');

  const handleLangClick = e => {
    closeModal('langMenu');
    dispatch(operation({ local: e.currentTarget.id }));
  };

  return (
    <>
      {isLoading && <Loader />}
      <SetButtonWrapper>
        <LangMenu
          isModalOpen={isModalOpen.langMenu}
          forwardedRef={langMenuRef}
          handleCklick={handleLangClick}
        />
        <LangBtn
          type="button"
          onClick={() => toggleModal('langMenu')}
          ref={langButtonRef}
        >
          <img
            width={40}
            height={40}
            src={
              local === LOCAL_EN
                ? FLAG_UK_URL
                : local === LOCAL_DE
                ? FLAG_DE_URL
                : FLAG_UA_URL
            }
            alt="flag"
          />
        </LangBtn>
        <UserBtn type="button">
          <SvgIcon w={36} h={36} icon={'avatar'} aria-label="icon user" />
        </UserBtn>
      </SetButtonWrapper>
    </>
  );
};
