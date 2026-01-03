import { text } from 'services/formBlockServices';
import {
  BlockCaption,
  Label,
  StyledActionButton,
  StyledInput,
  StyledTextarea
} from './FormBlock.styled';
import { BlockTitle } from 'styles/components.styled';
import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import { Fragment } from 'react';
import { lang } from 'lang/lang';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { ErrorText } from 'Components/Global/ErrorText/ErrorText';

export const FormBlock = ({ data, localed, onChange, product, errors }) => {
  const { locale } = useSelector(selectUser);
  return (
    <>
      <div>
        {localed ? (
          <>
            {data?.map(el => (
              <Fragment key={el}>
                <BlockTitle>
                  {el === 'title' && lang[locale].name_title}
                  {el === 'price' && lang[locale].price_title}
                  {el === 'standart' && lang[locale].price_standart_title}
                  {el === 'xl' && lang[locale].price_xl_title}
                  {el === 'ingredients' && lang[locale].ingredients_title}
                  {el === 'caption' && lang[locale].caption_title}
                </BlockTitle>
                {['en', 'de', 'ua'].map(e => (
                  <Fragment key={e}>
                    <Label>
                      <BlockCaption>{text(e, el)}</BlockCaption>
                      {el === 'ingredients' || el === 'caption' ? (
                        <StyledTextarea
                          name={`${el}_${e}`}
                          onChange={onChange}
                          defaultValue={product && product[e][el]}
                        />
                      ) : (
                        <StyledInput
                          type="text"
                          name={`${el}_${e}`}
                          onChange={onChange}
                          defaultValue={product && product[e][el]}
                        />
                      )}
                      {product && (
                        <StyledActionButton type="button" disabled>
                          <SvgIcon w={18} h={18} icon="undo" />
                        </StyledActionButton>
                      )}
                    </Label>
                    {errors?.[e]?.[el] && <ErrorText text={errors[e][el]} />}
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </>
        ) : (
          <>
            <BlockTitle>{lang[locale].ingredients_title}</BlockTitle>
            {data?.map(el => (
              <Fragment key={el}>
                <Label>
                  <BlockCaption className="long">
                    {el === 'water' && lang[locale].water_caption}
                    {el === 'coffee' && lang[locale].coffee_caption}
                    {el === 'milk' && lang[locale].milk_caption}
                    {el === 'weight' && lang[locale].weight_caption}
                  </BlockCaption>
                  <StyledInput
                    type="text"
                    name={el}
                    onChange={onChange}
                    defaultValue={product && product[el]}
                  />
                  {product && (
                    <StyledActionButton type="button" disabled>
                      <SvgIcon w={18} h={18} icon="undo" />
                    </StyledActionButton>
                  )}
                </Label>
                {errors?.[el] && <ErrorText text={errors[el]} />}
              </Fragment>
            ))}
          </>
        )}
      </div>
    </>
  );
};
