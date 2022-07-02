import styles from "./Card.module.css";

interface CardProps {
  //   children: JSX.Element[];
  children?: React.ReactNode;
  className?: string;
}

const Card = (props: CardProps) => {
  const classes = styles["card"] + ` ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
