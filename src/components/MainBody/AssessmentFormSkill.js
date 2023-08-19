import styles from "./AssessmentCard.module.css";

function AssessmentFormSkill({ skill }) {
  return (
    <div className={styles.Skill}>
      <div className={styles.Name}>{skill}</div>
      <div className={styles.Cross}>X</div>
    </div>
  );
}

export default AssessmentFormSkill;
