import "../App.css";
import useInput from "../hooks/useInput";
import { isNotEmpty, isValidEmail } from "../utils/regex";

let renderCount = 0;

const MyForm = () => {
  renderCount++;
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    clear: clearEmail,
  } = useInput(isValidEmail);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    clear: clearName,
  } = useInput(isNotEmpty);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ email: emailValue, name: nameValue });
    clearEmail();
    clearName();
  };

  const isFormValid = emailIsValid && nameIsValid;
  return (
    <>
      <form className="form" onSubmit={submitHandler} noValidate>
        <label htmlFor="email">Email Address:</label>
        <div>
          <input
            type="email"
            className={`input ${emailHasError ? "error" : ""}`}
            id="email"
            placeholder="john.doe@globant.com"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {emailHasError && (
            <span className="errorMsg">Email address is not valid!</span>
          )}
        </div>
        <label htmlFor="name">Full name:</label>
        <div>
          <input
            type="text"
            className={`input ${nameHasError ? "error" : ""}`}
            id="name"
            placeholder="John Doe"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
          />
          {nameHasError && <span className="errorMsg">Name is required!</span>}
        </div>
        <button
          className={`button ${!isFormValid ? "disabled" : ""}`}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
      <p>RenderCount = {renderCount/2}</p>
    </>
  );
};

export default MyForm;
