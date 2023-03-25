import styles from "./Logo.module.scss";

export default function Logo({ name, className }) {
  return (
    <div
      className={`${styles.logo} ${className}`}
      style={{ backgroundImage: `url(${name})` }}
    ></div>
  );
}
