import { useRef } from 'react';
import { StyledThemeButton } from './ThemeToggler.styled';
import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import { selectUser } from 'store/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { updateAdmin } from 'store/auth/operations';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const themeBtn = useRef(null);
  const { theme } = useSelector(selectUser);

  const toggleTheme = () => {
    if (themeBtn.current.classList.contains('dark')) {
      themeBtn.current.classList.replace('dark', 'light');
      dispatch(updateAdmin({ theme: 'light' }));
      return;
    }
    if (themeBtn.current.classList.contains('light')) {
      themeBtn.current.classList.replace('light', 'dark');
      dispatch(updateAdmin({ theme: 'dark' }));
      return;
    }
  };
  return (
    <StyledThemeButton
      ref={themeBtn}
      className={theme}
      onClick={toggleTheme}
      aria-label="Theme"
      type="button"
    >
      <SvgIcon w={20} h={20} icon="moon" />
      <SvgIcon w={20} h={20} icon="sun" />
    </StyledThemeButton>
  );
};
