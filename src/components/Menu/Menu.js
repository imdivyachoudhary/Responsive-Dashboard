import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";

function Menu({ toggleMobMenu }) {
  return (
    <div className={styles.MenuWrapper} id="menu">
      <div className={styles.Menu}>
        <div className={`${styles.MenuHeading} OnlyMobView`}>
          <h3>Menu</h3>
          <div className={styles.CrossButton} onClick={toggleMobMenu}>
            X
          </div>
        </div>
        <MenuItem
          itemName="Dashboard"
          iconUrl="https://cdn-icons-png.flaticon.com/128/1828/1828765.png"
        />
        <MenuItem
          itemName="Assessment"
          iconUrl="https://cdn-icons-png.flaticon.com/128/1483/1483205.png"
          active={true}
        />
        <MenuItem
          itemName="My Library"
          iconUrl="https://cdn-icons-png.flaticon.com/128/7786/7786396.png"
        />
        <div className={styles.AdminPartition}>
          <button className={styles.AdminButton}>Admin</button>
        </div>
        <MenuItem
          itemName="Round Status"
          iconUrl="https://cdn-icons-png.flaticon.com/128/7786/7786396.png"
        />
      </div>
    </div>
  );
}

export default Menu;
