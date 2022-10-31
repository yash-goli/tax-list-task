import { useState } from 'react';
import useGetTaxList from '../../../hooks/useGetTaxList';
import { TaxItemRow } from '../../../models/types';
import Fliters from '../Fliters/Fliters';
import ListRow from '../ListRow/ListRow';
import Totals from '../Totals/Totals';

const ListView = () => {
  const [filterValue, setFilterValue] = useState<number>(0);
  const [taxList, dispatchTaxList] = useGetTaxList();

  const filteredTaxList = taxList.filter((item: TaxItemRow) => {
    if (filterValue === 0) return true;
    return item.isFav;
  });

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
        {filteredTaxList.map((item) => {
          return <ListRow taxItem={item} key={item.id} dispatch={dispatchTaxList}/>;
        })}
      </tbody>
      <tfoot>
        <Totals taxItems={filteredTaxList} />
      </tfoot>
    </table>
  );
};

export default ListView;
