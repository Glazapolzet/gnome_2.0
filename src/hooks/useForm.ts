import React, {useState} from "react";

interface UseFormProps {
  [index: string]: string,
}

const useInput = (initialValue: UseFormProps): [UseFormProps, (evt: React.ChangeEvent<HTMLInputElement>) => void] => {

  const [value, setValue] = useState(initialValue);

  function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setValue({
      ...value,
      [`${evt.target.name}`]: evt.target.value,
    });
  }

  return [value, onChange];
}

export default useInput;
