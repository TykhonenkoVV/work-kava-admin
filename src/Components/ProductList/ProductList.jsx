import { useDispatch, useSelector } from 'react-redux';
import {
  AddCardButton,
  CardButtonContainer,
  CardLink,
  CardTitle,
  CollectionTitle,
  FilterButton,
  Icon,
  ImgWrapper,
  StyledImage,
  StyledLi,
  StyledList
} from './ProductList.styled';
import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import { useLocation } from 'react-router-dom';
import { colors, getMaxIndex } from 'services/productList';
import {
  ADD_PRODUCT_PATH,
  DELETE_OPERATION,
  EDIT_PRODUCT_PATH,
  IMAGE_CLOUD_URL,
  PATCH_OPERATION
} from 'utils/GlobalUtils';
import { selectUser } from 'store/auth/selectors';
import { useProductState } from 'hooks/useProductState';
import { Loader } from 'Components/Global/Loader/Loader';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { lang } from 'lang/lang';
import { useEffect, useRef, useState } from 'react';
import { FilterSelect } from './Components/FilterSelect/FilterSelect';
import { setStatusFilter } from 'store/filter/slice';
import { useModal } from 'hooks/useModal';
import { useClickOutsideModal } from 'hooks/useClickOutsideModal';
import { Modal } from 'Components/Global/Modal/Modal';
import { AskModal } from 'Components/Global/AskModal/AskModal';
import { ActionButton } from 'styles/components.styled';
import { useProductError } from 'hooks/useProductError';
import { InfoModal } from 'Components/Global/InfoModal/InfoModal';

export const ProductList = ({ data, title, checkedRadio }) => {
  const dispatch = useDispatch();

  const windowWidth = useWindowWidth();

  const { locale } = useSelector(selectUser);

  const filterSelectRef = useRef(null);
  const filterButtontRef = useRef(null);

  const { pathname } = useLocation();

  const productError = useProductError();

  const [filteredData, setFilteredData] = useState();
  const [filterCaption, setFilterCaption] = useState(null);
  const [method, setMethod] = useState();
  const [cardData, setCardData] = useState();
  const [isChanged, setIsChanged] = useState(false);

  const {
    isModalOpen: isAskArchiveModalOpen,
    openModal: openAskArchiveModal,
    closeModal: closeAskArchiveModal
  } = useModal();

  const {
    isModalOpen: isAskDeleteModalOpen,
    openModal: openAskDeleteModal,
    closeModal: closeAskDeleteModal
  } = useModal();

  const {
    isModalOpen: isInfoModalOpen,
    openModal: openInfoModal,
    closeModal: closeInfoModal
  } = useModal();

  const {
    isModalOpen: isSelectFilterModalOpen,
    closeModal: closeSelectFilterModal,
    toggleModal: toggleSelectFilterModal
  } = useModal();

  useClickOutsideModal(
    [filterSelectRef, filterButtontRef],
    closeSelectFilterModal,
    'selectFilter'
  );

  const shortLocale =
    locale === 'en-UK' ? 'en' : locale === 'de-DE' ? 'de' : 'ua';

  const { isLoading, operation } = useProductState(pathname, method);

  const index = getMaxIndex(data) + 1;

  useEffect(() => {
    if (isChanged) {
      setIsChanged(false);
      openInfoModal();
    }
  }, [isChanged, openInfoModal]);

  useEffect(() => {
    setFilterCaption(lang[locale].only_active_cards);
    dispatch(setStatusFilter('active'));
    setFilteredData(data.filter(el => el.archived === false));
  }, [dispatch, data, locale]);

  const openAskModalArhive = data => {
    setMethod(PATCH_OPERATION);
    setCardData(data);
    openAskArchiveModal();
  };

  const handleActionArchive = ({ id, archived }) => {
    dispatch(setStatusFilter('active'));
    dispatch(operation({ id, data: { archived: !archived } }));
    setIsChanged(true);
  };

  const openAskModalDelete = data => {
    setMethod(DELETE_OPERATION);
    setCardData(data);
    openAskDeleteModal();
  };

  const handleActionDelete = ({ id }) => {
    dispatch(setStatusFilter('active'));
    dispatch(operation(id));
    setIsChanged(true);
  };

  const handleRadioChange = id => {
    if (id === 'active') {
      setFilterCaption(lang[locale].only_active_cards);
      setFilteredData(data.filter(el => el.archived === false));
    }
    if (id === 'archive') {
      setFilterCaption(lang[locale].only_archived_cards);
      setFilteredData(data.filter(el => el.archived === true));
    }
    if (id === 'all') {
      setFilterCaption(lang[locale].all_cards);
      setFilteredData(data);
    }
  };

  const onTogle = () => {
    toggleSelectFilterModal();
  };

  return (
    <>
      {isLoading && <Loader />}
      <CollectionTitle>{title}</CollectionTitle>
      <FilterButton onClick={onTogle} type="button" ref={filterButtontRef}>
        <SvgIcon w={16} h={16} icon={'filter'} />
        <span>{filterCaption}</span>
        <Icon
          w={12}
          h={12}
          icon={'arrow'}
          rotate={isSelectFilterModalOpen ? '180deg' : 0}
        />
      </FilterButton>
      <FilterSelect
        className={isSelectFilterModalOpen ? null : 'visually-hidden'}
        onChange={handleRadioChange}
        onToggle={onTogle}
        local={locale}
        checkedRadio={checkedRadio}
        forwardedRef={filterSelectRef}
      />
      <AddCardButton
        to={ADD_PRODUCT_PATH}
        state={{ props: { pathname, index } }}
      >
        <SvgIcon
          w={windowWidth > 413 ? 16 : 12}
          h={windowWidth > 413 ? 16 : 12}
          icon={'add'}
        />
        <span>{lang[locale].add_new_product}</span>
      </AddCardButton>
      {filteredData?.length > 0 && (
        <StyledList>
          {filteredData?.map((el, i) => (
            <StyledLi key={el._id}>
              <CardTitle>{el[shortLocale].title}</CardTitle>
              <ImgWrapper
                color={colors[i]}
                className={el.archived ? 'archived' : null}
              >
                <StyledImage
                  width={120}
                  src={`${IMAGE_CLOUD_URL}w_240,c_fill/${el.imgURL}`}
                  alt={el[shortLocale].title}
                />
              </ImgWrapper>
              <CardButtonContainer>
                <CardLink
                  to={`${EDIT_PRODUCT_PATH}/${el._id}`}
                  state={{ props: { pathname, index } }}
                >
                  <SvgIcon w={24} h={24} icon={'edit'} />
                </CardLink>
                <ActionButton
                  onClick={() =>
                    openAskModalArhive({ id: el._id, archived: el.archived })
                  }
                >
                  <SvgIcon
                    w={24}
                    h={24}
                    icon={el.archived ? 'unarchive' : 'archive'}
                  />
                </ActionButton>
                <ActionButton
                  onClick={() => openAskModalDelete({ id: el._id })}
                >
                  <SvgIcon w={24} h={24} icon={'delete'} />
                </ActionButton>
              </CardButtonContainer>
            </StyledLi>
          ))}
        </StyledList>
      )}
      {isAskArchiveModalOpen && (
        <Modal onClose={closeAskArchiveModal}>
          <AskModal
            action={handleActionArchive}
            onCloseModal={closeAskArchiveModal}
            data={cardData}
            names={{
              cancel: lang[locale].cancel,
              action: cardData.archived
                ? lang[locale].restore
                : lang[locale].archive
            }}
          />
        </Modal>
      )}
      {isAskDeleteModalOpen && (
        <Modal onClose={closeAskDeleteModal}>
          <AskModal
            action={handleActionDelete}
            onCloseModal={closeAskDeleteModal}
            data={cardData}
            names={{
              cancel: lang[locale].cancel,
              action: lang[locale].delete
            }}
          />
        </Modal>
      )}
      {isInfoModalOpen && !isLoading && !productError[pathname] && (
        <Modal onClose={closeInfoModal}>
          <InfoModal
            type="fulfilled"
            onClose={closeInfoModal}
            text={lang[locale].success_update}
          />
        </Modal>
      )}
      {isInfoModalOpen && !isLoading && productError[pathname] && (
        <Modal onClose={closeInfoModal}>
          <InfoModal
            type="rejected"
            onClose={closeInfoModal}
            text={productError[pathname].message}
          />
        </Modal>
      )}
    </>
  );
};
