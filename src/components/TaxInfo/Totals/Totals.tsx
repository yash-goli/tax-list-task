import { useCallback } from 'react';
import { TaxItem } from '../../../models/types';
import FormattedNum from '../FormattedNum/FormattedNum';

const Totals = ({ taxItems }: { taxItems: TaxItem[] }) => {
  
  const calcTotal = useCallback((key: keyof TaxItem) => {
    return taxItems.reduce((acc, curr) => {
      const numCurr = parseFloat(curr[key as keyof TaxItem] as string);
      return acc + numCurr;
    }, 0);
  }, [taxItems]);

  const totalTax = calcTotal('tax');
  
  const totalNet = calcTotal('net');
  
  return (
    <tr>
      <td><b>Total: </b></td>
      <td><FormattedNum value={totalNet}/></td>
      <td><FormattedNum value={totalTax}/></td>
      <td><FormattedNum value={totalNet + totalTax}/></td>
    </tr>
  );
};

export default Totals;
