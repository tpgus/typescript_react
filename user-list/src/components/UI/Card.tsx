import styles from "./Card.module.css";
import { DefaultPropsType } from "./UI_PropsType";

const Card = (props: DefaultPropsType) => {
  return (
    <div className={`${styles["card"]} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
