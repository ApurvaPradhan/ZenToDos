import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";
const AppHeader = () => {
  return (
    <div className={styles.wrapperHeader}>
      <Button variant="primary"> Add Task</Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
    </div>
  );
};

export default AppHeader;
