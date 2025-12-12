import {
  BlockTitle,
  Caption,
  StyledButton,
  StyledLabel
} from 'styles/components.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { lang } from 'lang/lang';

export const FormBlockFile = ({ onChange }) => {
  const { locale } = useSelector(selectUser);
  const data = ['img', 'webpImg'];
  const title = ['Jpg/Png', 'Webp'];
  return (
    <div>
      <BlockTitle>{lang[locale].images_title}</BlockTitle>
      {data.map((el, i) => (
        <StyledLabel key={el}>
          <Caption>{title[i]}</Caption>
          <input
            id={el}
            type="file"
            accept={el === 'img' ? 'image/png, image/jpeg' : 'image/webp'}
            hidden
            name={el}
            onChange={onChange}
          />
          <StyledButton
            type="button"
            onClick={() => document.getElementById(`${el}`).click()}
          >
            {lang[locale].select_file}
          </StyledButton>
        </StyledLabel>
      ))}
    </div>
  );
};
