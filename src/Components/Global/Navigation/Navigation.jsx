import {
  BURGERS_PATH,
  COFFE_CLASSIC_PATH,
  COFFE_WITH_MILK_PATH,
  DESSERTS_PATH,
  HOT_DOGS_PATH,
  ROLLS_PATH
} from 'utils/GlobalUtils';
import { Item, LinkItem, List } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { getTitle } from 'services/home';
import { useLocation } from 'react-router-dom';

export const Navigation = ({ action }) => {
  const { pathname } = useLocation();
  const paths = [
    { pathName: COFFE_CLASSIC_PATH },
    { pathName: COFFE_WITH_MILK_PATH },
    { pathName: DESSERTS_PATH },
    { pathName: BURGERS_PATH },
    { pathName: ROLLS_PATH },
    { pathName: HOT_DOGS_PATH }
  ];

  const { locale } = useSelector(selectUser);

  return (
    <nav>
      <List>
        {paths.map(el => (
          <Item
            key={el.pathName}
            className={pathname === el.pathName ? 'active' : null}
          >
            <LinkItem to={el.pathName} onClick={action}>
              {() => getTitle(el.pathName, locale)}
            </LinkItem>
          </Item>
        ))}
      </List>
    </nav>
  );
};
