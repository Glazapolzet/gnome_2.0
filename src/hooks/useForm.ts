import React, {useState} from "react";

export const useForm = (initialValue: {[index: string]: any}): [
    {[index: string]: any}, 
    (val: any) => any,
    (evt: React.ChangeEvent<HTMLInputElement>) => void
] => {
    const [value, setValue] = useState(initialValue);

    function setFormValue(val: any) {
        setValue(val)
    }

    function onEvent(evt: React.ChangeEvent<HTMLInputElement>) {
        setValue({
          ...value,
          [`${evt.target.name}`]: evt.target.value,
        });
    }

    return [value, setFormValue, onEvent];
}

export default useForm;
