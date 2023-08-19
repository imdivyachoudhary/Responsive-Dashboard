import IconImage from "../MainBody/IconImage";
import styles from "./Navbar.module.css";

function Navbar({ heading, toggleMobMenu}) {
  return (
    <div className={`${styles.Navbar} OnlyMobView`}>
      <IconImage
        imageAlt="menu"
        imageUrl="https://cdn-icons-png.flaticon.com/128/8359/8359020.png"
        bgcolor="rgb(245, 247, 252)"
        onClickHandle={toggleMobMenu}
      />
      <h3>{heading}</h3>
    </div>
  );
}

export default Navbar;
