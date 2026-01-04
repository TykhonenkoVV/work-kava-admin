import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { Layout } from './Global/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshAdmin } from 'store/auth/operations';
import { RestrictedRoute } from './Global/restrictedRoute';
import { PrivateRoute } from './Global/privateRoute';
import AuthPage from 'Pages/AuthPage';
import { darkTheme, lightTheme, theme } from 'styles/theme';
import { selectTheme } from 'store/auth/selectors';
import { GlobalStyles } from 'styles/globalStyles';

const HomePage = lazy(() => import('../Pages/Home'));
const App = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const [currTheme, setCurrTheme] = useState({
    ...lightTheme,
    ...theme
  });
  const selectedTheme = useSelector(selectTheme);

  const initGlobal = {
    ...GlobalStyles,
    body: {
      ...GlobalStyles.body,
      backgroundColor: currTheme.colors.primaryBackground,
      color: currTheme.colors.primaryText,
      fill: currTheme.colors.primaryText
    }
  };

  useEffect(() => {
    dispatch(refreshAdmin());
  }, [dispatch]);

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    if (accessToken && refreshToken) {
      dispatch(refreshAdmin());
    }
  }, [searchParams, dispatch]);

  useEffect(() => {
    if (!selectedTheme) return;
    if (selectedTheme.toLowerCase() === 'dark') {
      setCurrTheme({ ...darkTheme, ...theme });
    }
    if (selectedTheme.toLowerCase() === 'light') {
      setCurrTheme({ ...lightTheme, ...theme });
    }
  }, [selectedTheme]);

  return (
    <ThemeProvider theme={currTheme}>
      <Global styles={initGlobal} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/coffee-classic"
            element={
              <PrivateRoute redirectTo="/auth" component={<HomePage />} />
            }
          />
          <Route
            path="/coffee-with-milk"
            element={
              <PrivateRoute redirectTo="/auth" component={<HomePage />} />
            }
          />
          <Route
            path="/desserts"
            element={
              <PrivateRoute redirectTo="/auth" component={<HomePage />} />
            }
          />
          <Route
            path="/burgers"
            element={
              <PrivateRoute redirectTo="/auth" component={<HomePage />} />
            }
          />
          <Route
            path="/rolls"
            element={
              <PrivateRoute redirectTo="/auth" component={<HomePage />} />
            }
          />
          <Route
            path="/hot-dogs"
            element={
              <PrivateRoute redirectTo="/auth" component={<HomePage />} />
            }
          />
          <Route
            path="/rooms"
            element={
              <PrivateRoute redirectTo="/auth" component={<HomePage />} />
            }
          />
          <Route
            path="/add-product"
            element={
              <PrivateRoute redirectTo="/auth" component={<HomePage />} />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <PrivateRoute redirectTo="/auth" component={<HomePage />} />
            }
          />
          <Route path="/" element={<Navigate to={'/coffee-classic'} />} />
          <Route path="*" element={<Navigate to={'/coffee-classic'} />} />
        </Route>
        <Route
          path="/auth"
          element={<RestrictedRoute redirectTo="/" component={<AuthPage />} />}
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
