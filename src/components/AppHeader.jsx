import Button, { SelectButton } from "./Button";

const AppHeader = () => {
  return (
    <div>
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
