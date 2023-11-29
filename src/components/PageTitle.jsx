import style from "../styles/modules/title.module.scss";

// eslint-disable-next-line react/prop-types
const PageTitle = ({ first, rest }) => {
  return (
    <div>
      <p className={style.title}>
        {
          <span>
            <span className={style.first}>{first}</span>
            <span>{rest}</span>
          </span>
        }
      </p>
    </div>
  );
};

export default PageTitle;
