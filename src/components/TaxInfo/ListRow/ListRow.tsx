import { Dispatch } from 'react';
import { TaxItemRow } from '../../../models/types';
import { ActionPayload, ActionType } from '../../../reducer/reducer';
import FormattedNum from '../FormattedNum/FormattedNum';

const ListRow = ({ taxItem, dispatch }: { taxItem: TaxItemRow, dispatch: Dispatch<ActionPayload> }) => {
  const { name, tax, net, isFav } = taxItem;
  const numNet = parseFloat(net);
  const numTax = parseFloat(tax);

  return (
    <tr>
      <td>{name}</td>
      <td><FormattedNum value={numNet} /></td>
      <td><FormattedNum value={numTax} /></td>
      <td><FormattedNum value={numNet + numTax} /></td>
      <td>
        <button className={isFav ? 'btn-fav': ''} onClick={() => {
          dispatch({type: ActionType.UPDATE_ROW, payload: [{ ...taxItem, isFav: !taxItem.isFav}]})
        }}>&#9829;</button>
      </td>
    </tr>
  );
};

export default ListRow;
