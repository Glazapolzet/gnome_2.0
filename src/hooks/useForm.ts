import React, {useState} from "react";

export const useForm = (initialValue: {[index: string]: string}): [
    {[index: string]: string}, 
    (evt: React.ChangeEvent<HTMLInputElement>) => void
] => {
    const [value, setValue] = useState(initialValue);

    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
        setValue({
          ...value,
          [`${evt.target.name}`]: evt.target.value,
        });
    }

    return [value, onChange];
}

export default useForm;
