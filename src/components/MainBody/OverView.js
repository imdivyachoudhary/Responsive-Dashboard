import styles from "./Overview.module.css";
import OverviewItem from "./OverviewItem";

function Overview() {
  return (
    <>
      <div className={`${styles.Overview} ${styles.DesktopView}`}>
        <div className={styles.Row}>
          <OverviewItem
            width="15%"
            heading="Total Assessments"
            iconClass="fas fa-equals"
            data={[{ value: "34" }]}
          />
          <OverviewItem
            width="35%"
            heading="Candidates"
            iconClass="fas fa-user-friends"
            data={[
              { value: "11,145", about: "Total Candidate", addValue: "89" },
              { value: "114", about: "Who Attempted", addValue: "89" },
            ]}
          />
          <OverviewItem
            width="35%"
            heading="Candidate Sources"
            iconClass="fas fa-globe"
            iconColor="rgba(255, 0, 0, 0.869)"
            iconBgColor="rgba(246, 184, 184, 0.869)"
            data={[
              { value: "11,000", about: "E-mail", addValue: "89" },
              { value: "11,000", about: "Social Share", addValue: "89" },
              { value: "11,000", about: "Unique Link", addValue: "89" },
            ]}
          />
          <OverviewItem
            width="15%"
            heading="Total Purpose"
            iconClass="fas fa-link"
            data={[{ value: "11" }]}
          />
        </div>
      </div>
      <div className={`${styles.Overview} ${styles.MobView}`}>
        <div className={styles.Row}>
          <OverviewItem
            width="50%"
            heading="Total Assessments"
            iconClass="fas fa-equals"
            data={[{ value: "34" }]}
          />
          <OverviewItem
            width="50%"
            heading="Total Purpose"
            iconClass="fas fa-link"
            data={[{ value: "11" }]}
          />
        </div>
        <div className={styles.Row}>
          <OverviewItem
            width="100%"
            heading="Candidates"
            iconClass="fas fa-user-friends"
            data={[
              { value: "11,145", about: "Total Candidate", addValue: "89" },
              { value: "114", about: "Who Attempted", addValue: "89" },
            ]}
          />
        </div>
        <div className={styles.Row}>
          <OverviewItem
            width="100%"
            heading="Candidate Sources"
            iconClass="fas fa-globe"
            iconColor="rgba(255, 0, 0, 0.869)"
            iconBgColor="rgba(246, 184, 184, 0.869)"
            data={[
              { value: "11,000", about: "E-mail", addValue: "89" },
              { value: "11,000", about: "Social Share", addValue: "89" },
              { value: "11,000", about: "Unique Link", addValue: "89" },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Overview;
