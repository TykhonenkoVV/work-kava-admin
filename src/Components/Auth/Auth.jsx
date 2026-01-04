import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import {
  AuthCaption,
  AuthForm,
  AuthFormWrapper,
  AuthInput,
  AuthLabel,
  AuthLogo,
  ButtonShowPassword,
  StyledSectoion,
  SubmitButton,
  Subtitle
} from './Auth.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'store/auth/operations';
import { useEffect, useState } from 'react';
import { lang } from 'lang/lang';
import { selectUser } from 'store/auth/selectors';
import { ErrorText } from 'Components/Global/ErrorText/ErrorText';
import { validate } from 'services/authServices';
import { useModal } from 'hooks/useModal';
import { Modal } from 'Components/Global/Modal/Modal';
import { InfoModal } from 'Components/Global/InfoModal/InfoModal';
import { useAuth } from 'hooks/useAuth';
import { clearError } from 'store/auth/slice';

export const Auth = () => {
  const dispatch = useDispatch();
  const { authError } = useAuth();
  const { isModalOpen, openModal, closeModal } = useModal();
  const [errors, setErrors] = useState();
  const [showPass, setShowPass] = useState({ showPass: false });
  const { locale } = useSelector(selectUser);

  useEffect(() => {
    if (!authError) return;
    openModal();
  }, [authError, openModal]);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const objFormData = Object.fromEntries(formData);
    const response = validate(objFormData, locale);
    if (Object.keys(response).length !== 0) {
      setErrors(response);
    } else {
      setErrors(null);
      dispatch(logIn(objFormData));
    }

    // form.reset();
  };

  const closeInfoModal = () => {
    dispatch(clearError());
    closeModal();
  };
  const hendleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <StyledSectoion>
      <AuthFormWrapper>
        <AuthLogo>
          <SvgIcon w={190} h={41} icon={'logo'} />
          <Subtitle>{lang[locale].site_title}</Subtitle>
        </AuthLogo>
        <AuthCaption>{lang[locale].login}</AuthCaption>
        <AuthForm onSubmit={onSubmit} autoComplete="false">
          <AuthLabel>
            {lang[locale].e_mail}
            <AuthInput name="email" type="text" />
          </AuthLabel>
          {errors?.email && <ErrorText text={errors.email} />}
          <AuthLabel>
            {lang[locale].password}
            <AuthInput name="password" type={showPass ? 'password' : 'text'} />
            <ButtonShowPassword onClick={hendleShowPass} type="button">
              <SvgIcon
                w={24}
                h={24}
                icon={showPass ? 'eye-denied' : 'eye-allow'}
              />
            </ButtonShowPassword>
          </AuthLabel>
          {errors?.password && <ErrorText text={errors.password} />}
          <SubmitButton type="submit">{lang[locale].submit}</SubmitButton>
        </AuthForm>
      </AuthFormWrapper>
      {isModalOpen && authError && (
        <Modal onClose={closeInfoModal}>
          <InfoModal
            type="reject"
            text={authError.message}
            onClose={closeInfoModal}
          />
        </Modal>
      )}
    </StyledSectoion>
  );
};
