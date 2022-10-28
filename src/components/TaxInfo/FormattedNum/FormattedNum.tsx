import { useCallback } from "react";

const FormattedNum = ({ value }: {value: number}) => {

  const format = useCallback((value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(value);
  }, []);

  return <span>{format(value)}</span>
};

export default FormattedNum;