import { ButtonPropsType } from "./UI_PropsType";
import styles from "./Button.module.css";

const Button = (props: ButtonPropsType) => {
  return (
    <button
      className={`${styles["button"]} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
