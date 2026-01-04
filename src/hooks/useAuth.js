import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectAuthError,
  selectIsRegistered
} from '../store/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const { locale } = user;
  const { avatarURL } = user;
  const shortLocale =
    locale === 'en-UK' ? 'en' : locale === 'de-DE' ? 'de' : 'ua';
  const authError = useSelector(selectAuthError);
  const isRegistered = useSelector(selectIsRegistered);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    locale,
    avatarURL,
    shortLocale,
    authError,
    isRegistered
  };
};
