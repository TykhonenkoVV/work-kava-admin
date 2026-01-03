import { lang } from 'lang/lang';

export const orderForm = (formData, defaultValues) => {
  let res = false;
  if (formData.avatar.size !== 0) res = { avatar: formData.avatar };
  if (formData.name !== defaultValues.name)
    res = { ...res, name: formData.name };
  if (formData.email !== defaultValues.email)
    res = { ...res, email: formData.email };
  if (formData.new_password)
    res = {
      ...res,
      password: formData.password,
      newPassword: formData.new_password
    };
  return res;
};

export const validate = (data, locale) => {
  let result = {};
  const {
    name,
    email,
    phonenumber,
    picker,
    password,
    confirm_password,
    new_password,
    hours_selector
  } = data;
  if (name !== undefined) {
    const res = /^[^-\s][A-Za-zА-ЯЄIЇа-яєiї' ]+/gm.test(name);
    if (name === '' || !res)
      result = {
        ...result,
        name: lang[locale].error_user_name
      };
  }
  if (email !== undefined) {
    const res = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(
      email
    );
    if (email === '' || !res)
      result = {
        ...result,
        email: lang[locale].error_email
      };
  }
  if (phonenumber !== undefined) {
    if (phonenumber === '')
      result = {
        ...result,
        phonenumber: lang[locale].error_phonenumber
      };
  }
  if (picker !== undefined) {
    if (picker === '0')
      result = {
        ...result,
        picker: lang[locale].error_picker
      };
  }
  if (hours_selector !== undefined) {
    if (hours_selector === '0')
      result = {
        ...result,
        hours_selector: lang[locale].error_interval
      };
  }
  if (password !== undefined) {
    const res =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        password
      );
    if (password === '' || !res)
      result = {
        ...result,
        password: lang[locale].error_pass
      };
    if (confirm_password !== undefined) {
      if (confirm_password !== password)
        result = {
          ...result,
          confirm_password: lang[locale].error_confirm_pass
        };
    }
  }
  if (new_password !== undefined) {
    const res =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        new_password
      );
    if (new_password === '' || !res)
      result = {
        ...result,
        new_password: lang[locale].error_pass
      };
  }

  return result;
};
