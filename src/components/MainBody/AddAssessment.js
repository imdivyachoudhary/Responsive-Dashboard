import AddAssessmentForm from "./AddAssessmentForm";
import styles from "./AssessmentCard.module.css";
import IconImage from "./IconImage";

function AddAssessment() {
  return (
    <div className={styles.AssessmentCard}>
      <div className={`${styles.AssessmentCardBox} ${styles.AddCardBox}`}>
        <div
          data-bs-toggle="modal"
          data-bs-target="#modalAddAssessmentForm"
          style={{ cursor: "pointer", padding:"10px" }}
        >
          <IconImage
            height="70px"
            width="70px"
            iconClass="fas fa-plus"
            iconFontSize="2rem"
            iconColor="rgb(54, 102, 233)"
            bgcolor="white"
            borderRadius="50%"
          />
        </div>
        <div className={styles.AssessmentTopic}>New Assessment</div>
        <div className={styles.Desc}>
          From here you can add questions of multiple types like mCQs,
          subjective(text or paragraph)!
        </div>
      </div>
      <div
        className={`${styles.AddIcon} ${styles.Outer} OnlyMobView`}
        data-bs-toggle="modal"
        data-bs-target="#modalAddAssessmentForm"
      >
        <IconImage
          iconClass="fas fa-plus"
          iconFontSize="2rem"
          iconColor="white"
          bgcolor="rgb(54, 102, 233)"
          borderRadius="50%"
        />
      </div>
      <AddAssessmentForm />
    </div>
  );
}

export default AddAssessment;
