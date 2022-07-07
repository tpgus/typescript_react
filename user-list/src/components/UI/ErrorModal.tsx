import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

interface PropsType {
  title: string;
  message: string;
  onCloseModal: () => void;
}

const ErrorModal = (props: PropsType) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles["backdrop"]} onClick={props.onCloseModal}></div>,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <Card className={styles["modal"]}>
          <header className={styles["header"]}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles["content"]}>
            <p>{props.message}</p>
          </div>
          <footer className={styles["actions"]}>
            <Button onClick={props.onCloseModal}>닫기</Button>
          </footer>
        </Card>,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default ErrorModal;
