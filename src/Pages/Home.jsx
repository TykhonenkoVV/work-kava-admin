import { AddForm } from 'Components/AddForm/AddForm';
import { EditForm } from 'Components/EditForm/EditForm';
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
import { ADD_PRODUCT_PATH, GET_OPERATION } from 'utils/GlobalUtils';

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
        dispatch(setStatusFilter('active'));
        dispatch(operation());
      }
    }
  }, [dispatch, isLoggedIn, operation]);

  return (
    <StyledHomeSection>
      <Container>
        {pathname === ADD_PRODUCT_PATH ? (
          <AddForm />
        ) : pathname.split('/')[1] === 'edit' ? (
          <EditForm />
        ) : (
          collection && <ProductList data={collection} title={title} />
        )}
      </Container>
    </StyledHomeSection>
  );
};

export default Home;
