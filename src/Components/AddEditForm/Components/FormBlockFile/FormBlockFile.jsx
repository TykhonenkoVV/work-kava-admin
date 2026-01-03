import { StyledButton } from 'styles/components.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { lang } from 'lang/lang';
import {
  BlockFileTitle,
  BlockWrapper,
  FileLabel,
  FileWrapper,
  Img
} from './FormBlockFile.styled';
import { ErrorText } from 'Components/Global/ErrorText/ErrorText';

export const FormBlockFile = ({ onChange, images, errors }) => {
  const { locale } = useSelector(selectUser);
  const title = ['Jpg/Png', 'Webp'];
  return (
    <>
      <BlockFileTitle>{lang[locale].images_title}</BlockFileTitle>
      <BlockWrapper>
        {Object.keys(images).map((el, i) => (
          <FileWrapper key={el} style={{ flexBasis: 'calc(100% - 10px)' }}>
            <FileLabel>
              <span>{title[i]}</span>
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
            </FileLabel>
            <Img src={images[el]} alt={'Raster'} />
            {errors?.[el] && <ErrorText text={errors[el]} />}
          </FileWrapper>
        ))}
      </BlockWrapper>
    </>
  );
};
