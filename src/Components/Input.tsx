import React, { useState } from "react";

type Props = {
  authorNames: Array<string> | undefined;
};

const Input = (props: Props): React.ReactElement => {
  const { authorNames } = props;
  const [inputValue, setInputValue] = useState("");
  const [filteredArr, setFilteredArr] = useState<any>([]);

  const filterArray = (input: string) => {
    return authorNames?.filter((e) => {
      return e.toLowerCase().indexOf(input.toLowerCase()) !== -1;
    });
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    const arr: any = filterArray(inputValue);
    setFilteredArr([...arr]);
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {filteredArr.length && inputValue ? (
        <>
          {filteredArr.map((e: any) => {
            return <li>{e}</li>;
          })}
        </>
      ) : null}
    </>
  );
};

export default Input;
