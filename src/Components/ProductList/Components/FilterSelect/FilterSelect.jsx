import { lang } from 'lang/lang';
import { CardSelect, CheckBox, FilterLabel } from './FilterSelect.styled';
import { selectUser } from 'store/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatusFilter } from 'store/filter/selectors';
import { setStatusFilter } from 'store/filter/slice';

export const FilterSelect = ({
  className,
  onChange,
  onToggle,
  forwardedRef
}) => {
  const { locale } = useSelector(selectUser);

  const dispatch = useDispatch();

  const filterStatus = useSelector(selectStatusFilter);

  const handleChange = e => {
    const id = e.target.id;
    dispatch(setStatusFilter(id));

    onChange(id);
    onToggle(id);
  };

  return (
    <CardSelect className={className} ref={forwardedRef}>
      <FilterLabel>
        <CheckBox className={filterStatus === 'active' ? 'active' : null} />
        {lang[locale].only_active_cards}
        <input
          id="active"
          hidden
          name="filter"
          type="radio"
          checked={filterStatus === 'active'}
          onChange={handleChange}
        />
      </FilterLabel>
      <FilterLabel>
        <CheckBox className={filterStatus === 'archive' ? 'active' : null} />
        {lang[locale].only_archived_cards}
        <input
          id="archive"
          hidden
          name="filter"
          type="radio"
          checked={filterStatus === 'archive'}
          onChange={handleChange}
        />
      </FilterLabel>
      <FilterLabel>
        <CheckBox className={filterStatus === 'all' ? 'active' : null} />
        {lang[locale].all_cards}
        <input
          id="all"
          hidden
          name="filter"
          type="radio"
          checked={filterStatus === 'all'}
          onChange={handleChange}
        />
      </FilterLabel>
    </CardSelect>
  );
};
