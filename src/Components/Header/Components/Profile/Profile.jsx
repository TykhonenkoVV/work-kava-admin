import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut, updateAdmin } from 'store/auth/operations';
import {
  ButtonLogOut,
  CheckBox,
  CheckBoxInput,
  CheckBoxLabelStyled,
  InputStyled,
  InputWrapper,
  LabelStyled,
  ProfileFromStyled,
  ProfileTitleStyled,
  RightButton
} from './Profile.styled';
import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import { Loader } from 'Components/Global/Loader/Loader';
import { orderForm } from 'services/profileFormServices';
import { lang } from 'lang/lang';
import { useState } from 'react';
import { Avatar } from './Components/Avatar/Avatar';
import { StyledButton } from 'styles/components.styled';
import { useModal } from 'hooks/useModal';
import { Modal } from 'Components/Global/Modal/Modal';
import { InfoModal } from 'Components/Global/InfoModal/InfoModal';
import { ErrorText } from 'Components/Global/ErrorText/ErrorText';
import { validate } from 'services/authServices';

export const Profile = ({ action }) => {
  const dispatch = useDispatch();
  const { locale, isRefreshing, user } = useAuth();
  const { name, email } = user;
  const { isModalOpen, openModal, closeModal } = useModal();

  const [errors, setErrors] = useState(null);

  const [changeCheckBox, setChangeCheckBox] = useState(false);
  const [show, setShow] = useState({
    password: false,
    new_password: false
  });

  const defaultValues = {
    name,
    email
  };

  const handleChangeCheckBox = e => {
    setChangeCheckBox(!changeCheckBox);
  };

  const onShowChange = e => {
    const currentId = e.currentTarget.dataset.id;
    setShow({ ...show, [currentId]: !show[currentId] });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const objFormData = Object.fromEntries(formData);
    //
    const response = validate(objFormData, locale);
    if (Object.keys(response).length !== 0) {
      setErrors(response);
      console.log(response);
    } else {
      setErrors(null);
      const isOrderedForm = orderForm(objFormData, defaultValues);
      if (!isOrderedForm) openModal();
      else dispatch(updateAdmin(isOrderedForm));
    }
  };

  const onLogOut = () => {
    dispatch(logOut());
    action();
  };

  return (
    <>
      {isRefreshing && <Loader />}
      <ProfileTitleStyled>{lang[locale].edit_profile}</ProfileTitleStyled>
      <ProfileFromStyled onSubmit={handleSubmit}>
        <Avatar />
        <LabelStyled>
          <InputWrapper>
            <InputStyled
              defaultValue={defaultValues.name}
              autoComplete="off"
              name="name"
              type="text"
            />
            <SvgIcon
              w={24}
              h={24}
              icon="user"
              addedStyle={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                pointerEvents: 'none'
              }}
            />
          </InputWrapper>
          {errors?.name && <ErrorText text={errors.name} />}
        </LabelStyled>
        <LabelStyled>
          <InputWrapper>
            <InputStyled
              defaultValue={defaultValues.email}
              autoComplete="off"
              name="email"
              type="text"
            />
            <SvgIcon
              w={24}
              h={24}
              icon="at"
              addedStyle={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                pointerEvents: 'none'
              }}
            />
          </InputWrapper>
          {errors?.email && <ErrorText text={errors.email} />}
        </LabelStyled>
        <CheckBoxLabelStyled>
          <CheckBoxInput
            hidden
            name="change_pass"
            type="checkbox"
            checked={changeCheckBox}
            onChange={handleChangeCheckBox}
          />
          <CheckBox />
          {lang[locale].change_pass}
        </CheckBoxLabelStyled>
        <LabelStyled>
          <InputWrapper>
            <InputStyled
              id="password"
              autoComplete="off"
              name="password"
              type={!show?.password ? 'password' : 'text'}
              placeholder={lang[locale].enter_old_pass}
              disabled={!changeCheckBox}
            />
            <SvgIcon
              w={24}
              h={24}
              icon="pass"
              addedStyle={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                pointerEvents: 'none'
              }}
            />{' '}
            <RightButton
              data-id={'password'}
              type="button"
              onClick={onShowChange}
            >
              <SvgIcon
                w={24}
                h={24}
                icon={!show['password'] ? 'eye-denied' : 'eye-allow'}
                className="js-class"
              />
            </RightButton>
          </InputWrapper>
          {errors?.password && <ErrorText text={errors.password} />}
        </LabelStyled>
        <LabelStyled>
          <InputWrapper>
            <InputStyled
              id="new_password"
              autoComplete="off"
              name="new_password"
              type={!show?.new_password ? 'password' : 'text'}
              placeholder={lang[locale].enter_new_pass}
              disabled={!changeCheckBox}
            />
            <SvgIcon
              w={24}
              h={24}
              icon="pass"
              addedStyle={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                pointerEvents: 'none'
              }}
            />
            <RightButton
              data-id={'new_password'}
              type="button"
              onClick={onShowChange}
            >
              <SvgIcon
                w={24}
                h={24}
                icon={!show['new_password'] ? 'eye-denied' : 'eye-allow'}
                className="js-class"
              />
            </RightButton>
          </InputWrapper>
          {errors?.new_password && <ErrorText text={errors.new_password} />}
        </LabelStyled>
        <StyledButton type="submit">{lang[locale].submit}</StyledButton>
        <ButtonLogOut onClick={onLogOut}>
          <SvgIcon w={24} h={24} icon={'log-out'} />
          {lang[locale].log_out}
        </ButtonLogOut>
      </ProfileFromStyled>
      {isModalOpen && (
        <Modal>
          <InfoModal
            type="warning"
            onClose={closeModal}
            text={lang[locale].nothing_has_changed}
          />
        </Modal>
      )}
    </>
  );
};
