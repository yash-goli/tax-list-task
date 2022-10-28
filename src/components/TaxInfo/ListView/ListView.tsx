import { useEffect, useReducer, useState } from 'react';
import api from '../../../api/api';
import { TaxItemRow } from '../../../models/types';
import reducer, { ActionType } from '../../../reducer/reducer';
import Fliters from '../Fliters/Fliters';
import ListRow from '../ListRow/ListRow';
import Totals from '../Totals/Totals';

const ListView = () => {
  const [filterValue, setFilterValue] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const callApi = async () => {
      const { items } = await api();
      const newItems = items.map((item): TaxItemRow => ({...item, isFav: false}));
      dispatch({type: ActionType.UPDATE_INIT, payload: newItems});
    };
    callApi();
  }, []);

  const filterState = (item: TaxItemRow) => {
    if (filterValue === 0) return true;
    return item.isFav;
  }

  const filteredState = state.filter(filterState);

  return (
    <table>
      <thead>
        <Fliters setFilterValue={setFilterValue} filterValue={filterValue}/>
        <tr>
          <th>Name</th>
          <th>Net</th>
          <th>Tax</th>
          <th>Gross</th>
          <th>Favourite Expense</th>
        </tr>
      </thead>
      <tbody>
        {filteredState.map((item) => {
          return <ListRow taxItem={item} key={item.id} dispatch={dispatch}/>;
        })}
      </tbody>
      <tfoot>
        <Totals taxItems={filteredState} />
      </tfoot>
    </table>
  );
};

export default ListView;
