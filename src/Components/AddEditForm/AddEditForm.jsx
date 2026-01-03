import { Loader } from 'Components/Global/Loader/Loader';
import { useModal } from 'hooks/useModal';
import { useProductState } from 'hooks/useProductState';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  createData,
  createState,
  onChangeValue,
  validateFormData
} from 'services/addForm';
import {
  IMAGE_CLOUD_URL,
  PATCH_OPERATION,
  POST_OPERATION
} from 'utils/GlobalUtils';
import {
  BackLink,
  FormCaption,
  FormTitle,
  StyledForm
} from './AddEditForm.styled';
import { lang } from 'lang/lang';
import { FormBlock } from './Components/FormBlock/FormBlock';
import { FormBlockFile } from './Components/FormBlockFile/FormBlockFile';
import { StyledButton } from 'styles/components.styled';
import { Modal } from 'Components/Global/Modal/Modal';
import { AskModal } from 'Components/Global/AskModal/AskModal';
import { InfoModal } from 'Components/Global/InfoModal/InfoModal';
import { getTitle } from 'services/home';
import { useProductError } from 'hooks/useProductError';
import { useAuth } from 'hooks/useAuth';

export const AddEditForm = ({ dataId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { locale, shortLocale } = useAuth();

  const [product, setProduct] = useState();
  const [formTitle, setFormTitle] = useState();
  const [isChanged, setIsChanged] = useState(false);
  const [formData, setFormData] = useState();
  const [errors, setErrors] = useState(false);
  const [image, setImage] = useState({
    img: `${IMAGE_CLOUD_URL}w_470,h_260,c_fill/v1766148203/workkava/service/image-not-found.png`,
    webpImg: `${IMAGE_CLOUD_URL}w_470,h_260,c_fill/v1766148203/workkava/service/image-not-found.png`
  });

  const { id } = useParams();

  const formRef = useRef(null);
  const {
    isModalOpen: isAskEditModalOpen,
    openModal: openAskEditModal,
    closeModal: closeAskEditModal
  } = useModal();
  const {
    isModalOpen: isInfoModalOpen,
    openModal: openInfoModal,
    closeModal: closeInfoModal
  } = useModal();

  const location = useLocation();

  const productError = useProductError();

  const props = useRef(location?.state?.props);
  const index = props?.current?.index;
  const pathname = props?.current?.pathname;

  const data = createData(pathname);

  const { isLoading, collection, operation } = useProductState(
    pathname,
    dataId === 'edit-form' ? PATCH_OPERATION : POST_OPERATION
  );

  useEffect(() => {
    if (id) {
      const i = collection.findIndex(product => product._id === id);
      setProduct(collection[i]);
      setImage({
        img: `${IMAGE_CLOUD_URL}/${collection[i].imgURL}`,
        webpImg: `${IMAGE_CLOUD_URL}/${collection[i].webpImgURL}`
      });
    }
  }, [id, collection]);

  useEffect(() => {
    if (dataId === 'edit-form' && product)
      setFormTitle(product?.[shortLocale].title);
    else setFormTitle(getTitle(pathname, locale));
    if (dataId === 'add-form') setFormData(createState(createData(pathname)));
  }, [product, dataId, shortLocale, pathname, locale]);

  useEffect(() => {
    if (isChanged) {
      setIsChanged(false);
      openInfoModal();
    }
  }, [isChanged, openInfoModal]);

  const onChange = e => {
    setFormData(onChangeValue(e, formData, product, dataId));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (dataId === 'edit-form') {
      if (!formData || Object.keys(formData).length === 0) {
        setFormData(false);
        openInfoModal();
      } else openAskEditModal();
    }
    if (dataId === 'add-form') {
      const hasErrors = validateFormData(formData, errors, locale);
      if (hasErrors) setErrors(hasErrors);
      else openAskEditModal();
    }
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    const targetName = e.target.name;
    if (file) {
      const reader = new FileReader();
      setFormData({ ...formData, [targetName]: file });
      reader.onloadend = () => {
        setImage({ ...image, [targetName]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleActionEdit = () => {
    closeAskEditModal();
    if (dataId === 'edit-form') {
      dispatch(operation({ id: id, data: formData }));
      setIsChanged(true);
    }
    if (dataId === 'add-form') {
      dispatch(operation({ ...formData, index: index, archived: false }));
      setIsChanged(true);
    }
  };

  const handleCloseInfoModal = () => {
    if (!productError[pathname] && formData) navigate(pathname);
    else closeInfoModal();
  };

  return (
    <>
      {isLoading && <Loader />}
      <BackLink to={pathname}>{lang[locale].baсk_to_produkt_list}</BackLink>
      <FormTitle>{formTitle}</FormTitle>
      <FormCaption>
        {dataId === 'edit-form'
          ? lang[locale].edit_product
          : lang[locale].add_new_product}
      </FormCaption>
      <StyledForm data-id={dataId} ref={formRef} onSubmit={handleSubmit}>
        <FormBlock
          data={data.localeBlocks}
          product={product}
          title={lang[locale].name_title}
          localed={true}
          onChange={onChange}
          errors={errors}
        />
        {data?.globalBlocks && (
          <FormBlock
            data={data.globalBlocks}
            product={product}
            title={lang[locale].name_title}
            localed={false}
            onChange={onChange}
            errors={errors}
          />
        )}
        <FormBlockFile
          onChange={handleImageChange}
          images={image}
          errors={errors}
        />
        <StyledButton type="submit">{lang[locale].submit}</StyledButton>
      </StyledForm>
      {isAskEditModalOpen && (
        <Modal onClose={closeAskEditModal}>
          <AskModal
            action={handleActionEdit}
            data={pathname}
            onCloseModal={closeAskEditModal}
            names={{
              cancel: lang[locale].cancel,
              action: lang[locale].submit
            }}
          />
        </Modal>
      )}
      {isInfoModalOpen && !isLoading && !productError[pathname] && (
        <Modal onClose={handleCloseInfoModal}>
          <InfoModal
            type="fulfilled"
            data={pathname}
            text={
              dataId === 'edit-modal'
                ? lang[locale].success_update
                : lang[locale].success_added
            }
          />
        </Modal>
      )}
      {isInfoModalOpen &&
        !isLoading &&
        (productError[pathname] || !formData) && (
          <Modal onClose={handleCloseInfoModal}>
            <InfoModal
              type={productError[pathname] ? 'rejected' : 'warning'}
              onClose={handleCloseInfoModal}
              text={
                productError[pathname]
                  ? productError[pathname].message
                  : lang[locale].nothing_has_changed
              }
            />
          </Modal>
        )}
    </>
  );
};
