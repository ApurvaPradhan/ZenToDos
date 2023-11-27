import style from "../styles/modules/button.module.scss";
import { getClasses } from "../utils/checkClass";
const Types = {
  primary: "primary",
  secondary: "secondary",
};
const Button = ({ variant = "primary", type, children }) => {
  return (
    <button
      className={getClasses([style.button, style[`button--${Types[variant]}`]])}
      type={type === "submit" ? "submit" : "button"}
    >
      {children}
    </button>
  );
};
const SelectButton = ({ children, id }) => {
  return (
    <select
      id={id}
      className={getClasses([style.button, style.button__select])}
    >
      {children}
    </select>
  );
};
export default Button;
export { SelectButton };
