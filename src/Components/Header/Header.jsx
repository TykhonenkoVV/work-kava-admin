import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import {
  BurgerMenuButton,
  ContainerStyled,
  HeaderStyled,
  SetButtonsWrapper
} from './Header.styled';
import { ModalNav } from './Components/ModalNav/ModalNav';
import { ThemeToggler } from './Components/ThemeToggler/ThemeToggler';
import { useModal } from 'hooks/useModal';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { SetButtons } from 'Components/Global/SetButtons/SetButtons';

export const Header = () => {
  const windowWidth = useWindowWidth();
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <HeaderStyled>
        <ContainerStyled>
          <SvgIcon
            w={windowWidth > 719 ? 188 : 150}
            h={windowWidth > 719 ? 40 : 32}
            icon={'logo'}
            style={{ fill: 'inherit' }}
          />
          <SetButtonsWrapper>
            <ThemeToggler />
            {windowWidth < 720 && (
              <BurgerMenuButton
                type="button"
                onClick={openModal}
                aria-label="menu"
              >
                <SvgIcon
                  w={32}
                  h={32}
                  icon={'burger'}
                  style={{ fill: 'inherit' }}
                />
              </BurgerMenuButton>
            )}
            {windowWidth > 719 && <SetButtons />}
          </SetButtonsWrapper>
        </ContainerStyled>
      </HeaderStyled>
      {isModalOpen && <ModalNav action={closeModal} />}
    </>
  );
};
