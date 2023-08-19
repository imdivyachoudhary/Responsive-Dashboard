import styles from "./Header.module.css";

function Header({ heading, subHeading }) {
  if (heading === "Assessment") {
    return (
      <div className={styles.Header}>
        <div className={`${styles.Heading} OnlyDesktopView`}>{heading} </div>
        <div className={`${styles.HeadingPartition} OnlyDesktopView`}></div>
        <div className={`${styles.SubHeading} ${styles.Active}`}>My Assessments </div>
        <div className={`${styles.SubHeading} OnlyMobView`}>Unstop Assessment </div>
      </div>
    );
  }
  return (
    <div className={styles.Header}>
      <div className={styles.Heading}>{heading} </div>
      <div className={styles.HeadingPartition}></div>
      <div className={styles.SubHeading}>{subHeading} </div>
    </div>
  );
}

export default Header;
