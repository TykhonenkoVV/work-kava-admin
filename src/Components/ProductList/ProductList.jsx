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
  LOCAL_DE,
  LOCAL_EN,
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

export const ProductList = ({ data, title, checkedRadio }) => {
  const dispatch = useDispatch();

  const filterSelectRef = useRef(null);
  const filterButtontRef = useRef(null);

  const [method, setMethod] = useState();

  const [cardData, setCardData] = useState();

  const { isModalOpen, openModal, closeModal, toggleModal } = useModal();

  useClickOutsideModal(
    [filterSelectRef, filterButtontRef],
    closeModal,
    'selectFilter'
  );

  const windowWidth = useWindowWidth();

  const { local } = useSelector(selectUser);

  const { pathname } = useLocation();

  const { isLoading, operation } = useProductState(pathname, method);

  const [filteredData, setFilteredData] = useState();

  const [filterCaption, setFilterCaption] = useState(null);

  const index = getMaxIndex(data) + 1;

  useEffect(() => {
    setFilterCaption(lang[local].only_active_cards);
    dispatch(setStatusFilter('active'));
    setFilteredData(data.filter(el => el.archived === false));
  }, [dispatch, data, local]);

  const openAskModalArhive = data => {
    setMethod(PATCH_OPERATION);
    setCardData(data);
    openModal('askArchive');
  };

  const handleActionArchive = ({ id, archived }) => {
    dispatch(setStatusFilter('active'));
    dispatch(operation({ id, data: { archived: !archived } }));
  };

  const openAskModalDelete = data => {
    setMethod(DELETE_OPERATION);
    setCardData(data);
    openModal('askDelete');
  };

  const handleActionDelete = ({ id }) => {
    dispatch(setStatusFilter('active'));
    dispatch(operation(id));
  };

  const handleRadioChange = id => {
    if (id === 'active') {
      setFilterCaption(lang[local].only_active_cards);
      setFilteredData(data.filter(el => el.archived === false));
    }
    if (id === 'archive') {
      setFilterCaption(lang[local].only_archived_cards);
      setFilteredData(data.filter(el => el.archived === true));
    }
    if (id === 'all') {
      setFilterCaption(lang[local].all_cards);
      setFilteredData(data);
    }
  };

  const onTogle = () => {
    toggleModal('selectFilter');
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
          rotate={isModalOpen?.selectFilter ? '180deg' : 0}
        />
      </FilterButton>
      <FilterSelect
        className={isModalOpen?.selectFilter ? null : 'visually-hidden'}
        onChange={handleRadioChange}
        onToggle={onTogle}
        local={local}
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
        <span>{lang[local].add_new_product}</span>
      </AddCardButton>
      {filteredData?.length > 0 && (
        <StyledList>
          {filteredData?.map((el, i) => (
            <StyledLi key={el._id}>
              <CardTitle>
                {local === LOCAL_EN
                  ? el.title_en
                  : local === LOCAL_DE
                  ? el.title_de
                  : el.title_ua}
              </CardTitle>
              <ImgWrapper
                color={colors[i]}
                className={el.archived ? 'archived' : null}
              >
                <StyledImage width={120} src={el.imgURL} alt={el.title_en} />
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
      {isModalOpen?.askArchive && (
        <Modal onClose={() => closeModal('askArchive')}>
          <AskModal
            action={handleActionArchive}
            onCloseModal={() => closeModal('askArchive')}
            data={cardData}
            names={{
              cancel: lang[local].cancel,
              action: cardData.archived
                ? lang[local].restore
                : lang[local].archive
            }}
          />
        </Modal>
      )}
      {isModalOpen?.askDelete && (
        <Modal onClose={() => closeModal('askDelete')}>
          <AskModal
            action={handleActionDelete}
            onCloseModal={() => closeModal('askDelete')}
            data={cardData}
            names={{
              cancel: lang[local].cancel,
              action: lang[local].delete
            }}
          />
        </Modal>
      )}
    </>
  );
};
