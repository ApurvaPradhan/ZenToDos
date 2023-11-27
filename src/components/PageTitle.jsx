import style from "../styles/modules/title.module.scss";

// eslint-disable-next-line react/prop-types
const PageTitle = ({ children }) => {
  return (
    <div>
      <p className={style.title}>{children}</p>
    </div>
  );
};

export default PageTitle;
