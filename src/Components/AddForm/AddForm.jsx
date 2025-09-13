import { useRef, useState } from 'react';
import {
  BackLink,
  FormCaption,
  FormTitle,
  ImageWrapper,
  StyledForm
} from './AddForm.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormBlock } from './Components/FormBlock/FormBlock';
import { createData, newInit, validateFormData } from 'services/addForm';
import { FormBlockFile } from './Components/FormBlockFile/FormBlockFile';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'Components/Global/Loader/Loader';
import { useProductState } from 'hooks/useProductState';
import { lang } from 'lang/lang';
import { selectUser } from 'store/auth/selectors';
import { POST_OPERATION } from 'utils/GlobalUtils';
import { Modal } from 'Components/Global/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { getTitle } from 'services/home';
import { StyledButton } from 'styles/components.styled';
import { AskModal } from 'Components/Global/AskModal/AskModal';

export const AddForm = () => {
  const { local } = useSelector(selectUser);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const askModalRef = useRef(null);
  const formRef = useRef(null);
  const { isModalOpen, openModal, closeModal } = useModal();
  const location = useLocation();
  const props = useRef(location?.state?.props);
  const pathname = props?.current?.pathname;
  const title = getTitle(pathname, local);

  const data = createData(pathname);

  const { isLoading, operation } = useProductState(pathname, POST_OPERATION);

  const index = props?.current?.index;

  const initialFormData = newInit(data);

  const [state, setState] = useState(initialFormData);
  const [image, setImage] = useState({
    img: null,
    webpImg: null
  });

  const onChange = e => {
    const { name, value } = e.target;
    const isNumber = Number(value);
    let newValue = value;
    if (!isNaN(value)) newValue = isNumber;
    setState({ ...state, [name]: newValue });
  };

  const formReset = () => {
    formRef.current.reset();
    setImage({
      img: null,
      webpImg: null
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValidValues = validateFormData(state);
    if (isValidValues) {
      dispatch(operation({ ...state, index: index }));
      formReset(e.current);
      openModal('askAdd');
    } else alert('Not all fields are filled in');
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    const targetName = e.target.name;
    if (file) {
      const reader = new FileReader();
      setState({ ...state, [targetName]: file });
      reader.onloadend = () => {
        setImage({ ...image, [targetName]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleActionAdd = prop => {
    navigate(prop);
  };

  return (
    <>
      {isLoading && <Loader />}
      <BackLink to={pathname}>{lang[local].baсk_to_produkt_list}</BackLink>
      <FormTitle>{title}</FormTitle>
      <FormCaption>{lang[local].add_new_product}</FormCaption>
      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <FormBlock
          data={data.title}
          title={lang[local].name_title}
          onChange={onChange}
        />
        <FormBlock
          data={data.price}
          title={lang[local].price_title}
          onChange={onChange}
        />
        {data?.ingredients && (
          <FormBlock
            data={data.ingredients}
            title={lang[local].ingredients_title}
            onChange={onChange}
          />
        )}
        {data?.weight && (
          <FormBlock
            data={data.weight}
            title={lang[local].weight_title}
            onChange={onChange}
          />
        )}
        <FormBlockFile onChange={handleImageChange} />
        <ImageWrapper>
          {image?.img && <img src={image?.img} alt={'Raster'} />}
          {image?.webpImg && <img src={image?.webpImg} alt={'Webp'} />}
        </ImageWrapper>
        <StyledButton type="submit">{lang[local].submit}</StyledButton>
      </StyledForm>
      {isModalOpen.askAdd && !isLoading && (
        <Modal
          id="askAdd"
          forwardetRef={askModalRef}
          onClose={() => closeModal('askAdd')}
        >
          <AskModal
            action={handleActionAdd}
            onCloseModal={() => closeModal('askAdd')}
            data={pathname}
            names={{
              cancel: lang[local].add_new_product,
              action: lang[local].baсk_to_produkt_list
            }}
          />
        </Modal>
      )}
    </>
  );
};
