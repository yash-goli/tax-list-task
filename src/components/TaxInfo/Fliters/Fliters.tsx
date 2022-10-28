import { ChangeEvent, Dispatch, SetStateAction } from "react";

const Fliters = ({setFilterValue, filterValue}: {
  filterValue: number,
  setFilterValue: Dispatch<SetStateAction<number>>
}) => {
  const inputs = [["Show favourited", 1], ["Show all", 0]];
  return (
    <tr>
      <th>Fliters: </th>
      <th colSpan={4}>
        <div>
          {inputs.map(([text, value], i) => (
            <label key={i}>
              <input
                type='radio'
                name='fliters'
                checked={value === filterValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFilterValue(parseInt(e.target.value));
                }}
                value={value}
              />
              {text}
            </label>
          ))}
        </div>
      </th>
    </tr>
  );
};

export default Fliters;
