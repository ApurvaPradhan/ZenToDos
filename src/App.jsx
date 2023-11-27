import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import "./styles/GlobalStyles.css";
import style from "./styles/modules/app.module.scss";
const App = () => {
  return (
    <div className="container">
      <PageTitle>ZenToDos</PageTitle>
      <div className={style.app__wrapper}>
        <AppHeader />
      </div>
    </div>
  );
};

export default App;
