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
