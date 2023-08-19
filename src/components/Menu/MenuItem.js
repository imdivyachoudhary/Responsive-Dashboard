import styles from "./Menu.module.css";

function MenuItem({iconUrl, itemName, active}) {
  return <div className={`${styles.MenuItem} ${active ? styles.Active : null}`}>
    <div className={styles.Icon}><img alt={itemName} src={iconUrl} /></div>
    <div className={styles.ItemName}>{itemName}</div>
  </div>;
}

export default MenuItem;
