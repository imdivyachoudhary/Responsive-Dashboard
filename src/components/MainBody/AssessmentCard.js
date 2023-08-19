import AssessmentStudent from "./Assessment Student";
import styles from "./AssessmentCard.module.css";
import IconImage from "./IconImage";

function AssessmentCard({ topic, type, date, duration, questions }) {
  return (
    <div className={styles.AssessmentCard}>
      <div className={styles.AssessmentCardBox}>
        <img className={styles.OptionsDotImage} alt="options" src="https://t3.ftcdn.net/jpg/04/04/25/36/240_F_404253660_9PHYb2HcUzeFAXDAQ6z6sWBktUGrxBox.jpg" />
        <div className={styles.CardBody}>
          <IconImage
            imageAlt="assessment"
            imageUrl="https://cdn-icons-png.flaticon.com/128/11213/11213082.png"
          />
          <div className={styles.About}>
            <div className={styles.AssessmentTopic}>{topic}</div>
            <div className={styles.AssessmentDesc}>
              <div className={styles.AssessmentType}>{type}</div>
              <div className={styles.AssessmentDate}>
                <div><i className="fas fa-calendar-alt"></i></div>
                <div className={styles.Date}>{date}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.CardFooter}>
          <div className={styles.AssessmentDetail}>
            <div className={styles.Detail}>
              <div className={styles.DetailValue}>{duration}</div>
              <div className={styles.DetailType}>Duration</div>
            </div>
            <div className={styles.Detail}>
              <div className={styles.DetailValue}>{questions}</div>
              <div className={styles.DetailType}>Questions</div>
            </div>
          </div>
          <div className={styles.Options}>
            <div className={styles.ShareButton}>
              <button>
                <i className="fas fa-link"></i>Share
              </button>
            </div>
            <div className={styles.Students}>
              <AssessmentStudent name="LP" bgcolor="purple" left="0" />
              <AssessmentStudent name="MP" bgcolor="#33859c" left="15px" />
              <AssessmentStudent name="KP" bgcolor="#eb2f96" left="30px" />
              <div className={styles.StudentCount}>+324</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssessmentCard;
