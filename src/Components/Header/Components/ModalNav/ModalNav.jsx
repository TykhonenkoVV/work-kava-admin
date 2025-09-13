import { BackdropHeader, CloseButton } from './ModalNav.styled';
import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import { Navigation } from 'Components/Global/Navigation/Navigation';
import { SetButtons } from 'Components/Global/SetButtons/SetButtons';

export const ModalNav = ({ action }) => {
  return (
    <BackdropHeader>
      <CloseButton
        type="button"
        onClick={() => action('mobileNav')}
        aria-label="close"
      >
        <SvgIcon w={32} h={32} icon="close" />
      </CloseButton>
      <Navigation action={action} />
      <SetButtons />
    </BackdropHeader>
  );
};
