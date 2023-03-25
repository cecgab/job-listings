import Close from "jsx:../../images/close.svg";
import styles from "./Chip.module.scss";

export default function Chip({
  title,
  removable,
  onClickHandler,
  onCloseHandler,
}) {
  if (!title) return false;
  return (
    <div
      className={`${styles.chip} ${removable ? styles["chip--removable"] : ""}`}
      onClick={onClickHandler}
    >
      <span className={styles.chip__content}>{title}</span>
      {removable && (
        <span className={styles.chip__remove} onClick={onCloseHandler}>
          <Close />
        </span>
      )}
    </div>
  );
}
