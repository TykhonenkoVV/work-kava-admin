import { AddEditForm } from 'Components/AddEditForm/AddEditForm';
import { ProductList } from 'Components/ProductList/ProductList';
import { useAuth } from 'hooks/useAuth';
import { useProductState } from 'hooks/useProductState';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getTitle } from 'services/home';
import { selectUser } from 'store/auth/selectors';
import { setStatusFilter } from 'store/filter/slice';
import { Container, StyledHomeSection } from 'styles/components.styled';
import {
  ACTIVE,
  ADD_PRODUCT_PATH,
  EDIT_PRODUCT_PATH,
  GET_OPERATION
} from 'utils/GlobalUtils';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { locale } = useSelector(selectUser);
  const title = getTitle(pathname, locale);
  const { collection, operation } = useProductState(pathname, GET_OPERATION);

  useEffect(() => {
    if (isLoggedIn) {
      if (operation) {
        dispatch(setStatusFilter(ACTIVE));
        dispatch(operation());
      }
    }
  }, [dispatch, isLoggedIn, operation]);

  return (
    <StyledHomeSection>
      <Container>
        {pathname === ADD_PRODUCT_PATH ||
        `/${pathname.split('/')[1]}` === EDIT_PRODUCT_PATH ? (
          <AddEditForm
            dataId={pathname === ADD_PRODUCT_PATH ? 'add-form' : 'edit-form'}
          />
        ) : (
          collection && <ProductList data={collection} title={title} />
        )}
      </Container>
    </StyledHomeSection>
  );
};

export default Home;
