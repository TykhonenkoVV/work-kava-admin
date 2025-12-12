import { Navigation } from 'Components/Global/Navigation/Navigation';
import { StyledSideBar } from './SideBar.styled';
import { CardTitle } from 'Components/ProductList/ProductList.styled';
import { lang } from 'lang/lang';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

export const SideBar = () => {
  const { locale } = useSelector(selectUser);

  return (
    <StyledSideBar>
      <CardTitle>{lang[locale].category}</CardTitle>
      <Navigation />
    </StyledSideBar>
  );
};
