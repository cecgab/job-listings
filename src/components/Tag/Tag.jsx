import styles from "./Tag.module.scss";

export default function Tag({ title, style = "primary" }) {
  return (
    <div className={`${styles.tag} ${styles[`tag--${style}`]}`}>{title}</div>
  );
}
