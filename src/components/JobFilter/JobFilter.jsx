import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import Chip from "../Chip/Chip";
import styles from "./JobFilter.module.scss";

export default function JobFilter() {
  const { filters, removeFilter, removeAllFilter } = useContext(FilterContext);

  const removeFilterHandler = (el) => {
    removeFilter(el);
  };

  return (
    <div className={styles.wrapper}>
      {filters && filters.length ? (
        <div className={styles.filter}>
          <div className={styles.filter__list}>
            {filters.map((el, index) => (
              <Chip
                key={`${index}_${el.cat}_${el.title}`}
                title={el.title}
                removable={true}
                onCloseHandler={() => removeFilterHandler(el)}
              />
            ))}
          </div>
          <div className={styles.filter__cleaner} onClick={removeAllFilter}>
            Clear
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
}
