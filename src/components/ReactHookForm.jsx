import "../App.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const ReactHookForm = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const submitHandler = (data) => {
    console.log(data);
    reset();
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <>
      <form className="form" onSubmit={handleSubmit(submitHandler)}>
        <label htmlFor="email">Email Address:</label>
        <div>
          <input
            className={`input ${errors.email ? "error" : ""}`}
            id="email"
            placeholder="john.doe@globant.com"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required! ",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email address is not valid! ",
              },
            })}
          />
          {errors.email && (
            <span className="errorMsg">{errors.email.message}</span>
          )}
        </div>
        <label htmlFor="name">Full name:</label>
        <div>
          <input
            className={`input ${errors.name ? "error" : ""}`}
            id="name"
            placeholder="John Doe"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required! ",
              },
            })}
          />
          {errors.name && (
            <span className="errorMsg">{errors.name.message}</span>
          )}
        </div>
        <button>
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default ReactHookForm;
