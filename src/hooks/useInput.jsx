import { useState } from "react";

const useInput = (isValidFn) => {
    const [value, setValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const changeHandler = (event) => {
        setValue(event.target.value);
    }
    const blurHandler = () => {
        setIsTouched(true)
    }
    const clear = () => {
        setValue("");
        setIsTouched(false);
    }

    const isValid = isValidFn(value);
    const hasError = !isValid && isTouched;
  
    return {
        value,
        hasError,
        isValid,
        changeHandler,
        blurHandler,
        clear
    }
}

export default useInput;