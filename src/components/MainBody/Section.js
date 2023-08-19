import IconImage from "./IconImage";
import styles from "./Section.module.css";

function Section({ id, heading, children, onClickHandle }) {
  return (
    <div className={styles.Section} id={id}>
      <div className={styles.Heading}>
        <div>{heading}</div>
        {heading === "My Assessment" ? <div className={styles.IconOptions}>
          <IconImage bgcolor="white" iconClass="fas fa-search" />
          <IconImage bgcolor="white" iconClass="fas fa-filter" />
          <IconImage bgcolor="rgb(245, 247, 252)" imageUrl="https://cdn-icons-png.flaticon.com/128/893/893201.png" imageAlt="graph" onClickHandle={onClickHandle} />
        </div> : null}
      </div>
      {children}
    </div>
  );
}

export default Section;
