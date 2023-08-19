import IconImage from "./IconImage";
import styles from "./Overview.module.css";

function OverviewItem({
  width,
  heading,
  iconClass,
  iconColor,
  iconBgColor,
  data,
}) {
  return (
    <div className={styles.Col} style={{ width }}>
      <div className={styles.Heading}>{heading}</div>
      <div className={styles.Detail}>
        <div className={styles.DetailIcon}>
          <IconImage
            iconClass={iconClass}
            bgcolor={iconBgColor ? iconBgColor : null}
            iconColor={iconColor ? iconColor : null}
          />
        </div>
        {data.map((ele, index) => (
          <div
            key={index}
            className={`${styles.DetailData} ${
              index > 0 ? styles.LeftBorder : ""
            }`}
          >
            <div className={styles.Count}>
              <div>{ele.value}</div>
              {ele.addValue ? <span>+{ele.addValue}</span> : null}
            </div>
            {ele.about ? (
              <div className={styles.DetailAbout}>{ele.about}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverviewItem;
