import Card from "../UI/Card";
import styles from "./UsersList.module.css";
import Button from "../UI/Button";

interface PropsType {
  users: {
    id: string;
    age: string;
    name: string;
  }[];
  onDelete: (id: string) => void;
}
const UsersList = (props: PropsType) => {
  return (
    <Card className={styles["users"]}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}세)
            <Button onClick={props.onDelete.bind(null, user.id)}>삭제</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
