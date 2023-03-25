import { useContext } from "react";
import Chip from "../Chip/Chip";
import Logo from "../Logo/Logo";
import Tag from "../Tag/Tag";
import { FilterContext } from "../../contexts/FilterContext";
import styles from "./JobPost.module.scss";

export default function JobPost({
  logo = "",
  company = "",
  position = "",
  isNew = false,
  isFeatured = false,
  details = [],
  categories = [],
}) {
  const { addFilter } = useContext(FilterContext);

  const filterHandler = (cat) => {
    addFilter(cat);
  };

  return (
    <div
      className={`${styles.post} ${isFeatured ? styles["post--featured"] : ""}`}
    >
      <div className={`${styles.post__content} ${styles.info}`}>
        <Logo className={styles.info__logo} name={logo} />
        <div>
          <div className={styles.info__header}>
            <h5>{company}</h5>
            {isNew && <Tag title="new!" />}
            {isFeatured && <Tag title="featured" style="dark" />}
          </div>
          <h3 className={styles.info__title}>{position}</h3>
          {details && (
            <div className={styles.info__details}>
              {details.map((el, index) => (
                <span key={index}>{el}</span>
              ))}
            </div>
          )}
        </div>
      </div>
      {categories && (
        <div className={styles.post__categories}>
          {categories.map((el, index) => (
            <Chip
              key={index}
              title={el.title}
              onClickHandler={() => filterHandler(el)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
